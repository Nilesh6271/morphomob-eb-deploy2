import express from 'express';
import { authenticateAdmin } from '../middleware/auth.js';
import { getContactSubmissions, getQuoteRequests, updateQuoteStatus } from '../services/dataService.js';

const router = express.Router();

// Admin login
router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    
    // Simple admin authentication - in production, use proper authentication
    if (username === process.env.ADMIN_USERNAME && password === process.env.ADMIN_PASSWORD) {
      const token = 'admin-token-' + Date.now(); // In production, use JWT
      
      res.json({
        success: true,
        token,
        message: 'Login successful'
      });
    } else {
      res.status(401).json({
        success: false,
        message: 'Invalid credentials'
      });
    }
  } catch (error) {
    console.error('Admin login error:', error);
    res.status(500).json({
      success: false,
      message: 'Login failed'
    });
  }
});

// Get contact submissions (protected)
router.get('/contacts', authenticateAdmin, async (req, res) => {
  try {
    const submissions = await getContactSubmissions();
    res.json({
      success: true,
      submissions
    });
  } catch (error) {
    console.error('Get contacts error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch contact submissions'
    });
  }
});

// Get quote requests (protected)
router.get('/quotes', authenticateAdmin, async (req, res) => {
  try {
    const quotes = await getQuoteRequests();
    res.json({
      success: true,
      quotes
    });
  } catch (error) {
    console.error('Get quotes error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch quote requests'
    });
  }
});

// Update quote status (protected)
router.put('/quotes/:quoteId/status', authenticateAdmin, async (req, res) => {
  try {
    const { quoteId } = req.params;
    const { status, notes } = req.body;
    
    await updateQuoteStatus(quoteId, status, notes);
    
    res.json({
      success: true,
      message: 'Quote status updated successfully'
    });
  } catch (error) {
    console.error('Update quote status error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to update quote status'
    });
  }
});

export default router;