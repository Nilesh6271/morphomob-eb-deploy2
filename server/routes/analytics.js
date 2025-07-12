import express from 'express';
import { getAnalyticsData } from '../services/dataService.js';

const router = express.Router();

// Get basic analytics
router.get('/overview', async (req, res) => {
  try {
    const analytics = await getAnalyticsData();
    res.json({
      success: true,
      analytics
    });
  } catch (error) {
    console.error('Analytics error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch analytics data'
    });
  }
});

export default router;