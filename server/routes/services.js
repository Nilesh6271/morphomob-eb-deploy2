import express from 'express';
import { getServiceCatalog, getEquipmentAvailability } from '../services/dataService.js';

const router = express.Router();

// Get service catalog
router.get('/catalog', async (req, res) => {
  try {
    const catalog = await getServiceCatalog();
    res.json({
      success: true,
      catalog
    });
  } catch (error) {
    console.error('Service catalog error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch service catalog'
    });
  }
});

// Get equipment availability
router.get('/equipment/availability', async (req, res) => {
  try {
    const { location, startDate, endDate, equipmentType } = req.query;
    
    const availability = await getEquipmentAvailability({
      location,
      startDate,
      endDate,
      equipmentType
    });

    res.json({
      success: true,
      availability
    });
  } catch (error) {
    console.error('Equipment availability error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to check equipment availability'
    });
  }
});

// Get material pricing
router.get('/materials/pricing', async (req, res) => {
  try {
    const { materialType, quantity, location } = req.query;
    
    // Mock pricing data - in real app, this would come from database
    const pricing = {
      materialType,
      basePrice: 2500,
      quantity: parseInt(quantity) || 1,
      location,
      totalPrice: (parseInt(quantity) || 1) * 2500,
      currency: 'INR',
      validUntil: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
      terms: 'Prices subject to change based on market conditions'
    };

    res.json({
      success: true,
      pricing
    });
  } catch (error) {
    console.error('Material pricing error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch material pricing'
    });
  }
});

export default router;