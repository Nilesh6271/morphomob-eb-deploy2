import express from 'express';
import { body, validationResult } from 'express-validator';
import { sendContactEmail, sendAutoReply } from '../services/emailService.js';
import { saveContactSubmission } from '../services/dataService.js';

const router = express.Router();

// Contact form validation rules
const contactValidation = [
  body('name')
    .trim()
    .isLength({ min: 2, max: 100 })
    .withMessage('Name must be between 2 and 100 characters'),
  body('company')
    .trim()
    .isLength({ min: 2, max: 200 })
    .withMessage('Company name must be between 2 and 200 characters'),
  body('designation')
    .trim()
    .isLength({ min: 2, max: 100 })
    .withMessage('Designation must be between 2 and 100 characters'),
  body('email')
    .isEmail()
    .normalizeEmail()
    .withMessage('Please provide a valid email address'),
  body('phone')
    .isMobilePhone('any')
    .withMessage('Please provide a valid phone number'),
  body('projectType')
    .notEmpty()
    .withMessage('Please select a project type'),
  body('projectValue')
    .optional(),
  body('timeline')
    .optional(),
  body('requirements')
    .optional()
    .trim()
    .isLength({ max: 2000 })
    .withMessage('Requirements must be at most 2000 characters')
];

// Submit contact form
router.post('/submit', contactValidation, async (req, res) => {
  try {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: errors.array()
      });
    }

    const contactData = {
      ...req.body,
      submittedAt: new Date().toISOString(),
      ipAddress: req.ip,
      userAgent: req.get('User-Agent')
    };

    // Save to database/file
    const submissionId = await saveContactSubmission(contactData);

    // Send notification email to admin
    await sendContactEmail(contactData, submissionId);

    // Send auto-reply to customer
    await sendAutoReply(contactData);

    res.json({
      success: true,
      message: 'Thank you for your inquiry. Our team will contact you within 4 hours.',
      submissionId
    });

  } catch (error) {
    console.error('Contact form submission error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to submit contact form. Please try again or call our emergency hotline.'
    });
  }
});

// Newsletter subscription
router.post('/newsletter', [
  body('email').isEmail().normalizeEmail().withMessage('Please provide a valid email address'),
  body('name').optional().trim().isLength({ max: 100 })
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        errors: errors.array()
      });
    }

    // Save newsletter subscription
    // In a real app, you'd save this to a database
    console.log('Newsletter subscription:', req.body);

    res.json({
      success: true,
      message: 'Successfully subscribed to our newsletter!'
    });

  } catch (error) {
    console.error('Newsletter subscription error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to subscribe to newsletter'
    });
  }
});

export default router;