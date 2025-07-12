import express from 'express';
import { body, validationResult } from 'express-validator';
import { generateQuoteId, saveQuoteRequest } from '../services/dataService.js';
import { sendQuoteRequestEmail } from '../services/emailService.js';

const router = express.Router();

// Quote request validation
const quoteValidation = [
  body('serviceType').notEmpty().withMessage('Service type is required'),
  body('projectDetails').trim().isLength({ min: 20 }).withMessage('Project details must be at least 20 characters'),
  body('quantity').optional().trim().notEmpty().withMessage('Quantity must not be empty if provided'),
  body('timeline').notEmpty().withMessage('Timeline is required'),
  body('contactInfo.name').trim().isLength({ min: 2 }).withMessage('Name must be at least 2 characters'),
  body('contactInfo.email').isEmail().withMessage('Valid email is required'),
  body('contactInfo.phone').trim().isLength({ min: 10 }).withMessage('Phone number must be at least 10 digits')
];

// Request quote
router.post('/request', quoteValidation, async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        errors: errors.array()
      });
    }

    const quoteId = generateQuoteId();
    const quoteData = {
      ...req.body,
      quoteId,
      status: 'pending',
      submittedAt: new Date().toISOString(),
      ipAddress: req.ip
    };

    // Save quote request
    await saveQuoteRequest(quoteData);

    // Send notification email
    await sendQuoteRequestEmail(quoteData);

    res.json({
      success: true,
      message: 'Quote request submitted successfully',
      quoteId
    });

  } catch (error) {
    console.error('Quote request error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to submit quote request'
    });
  }
});

// Get quote status
router.get('/status/:quoteId', async (req, res) => {
  try {
    const { quoteId } = req.params;
    
    // In a real app, you'd fetch from database
    const mockQuote = {
      quoteId,
      status: 'under_review',
      submittedAt: new Date().toISOString(),
      estimatedResponse: '2-4 business hours'
    };

    res.json({
      success: true,
      quote: mockQuote
    });

  } catch (error) {
    console.error('Quote status error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch quote status'
    });
  }
});

export default router;