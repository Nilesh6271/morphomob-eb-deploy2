import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import rateLimit from 'express-rate-limit';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

// Import routes
import contactRoutes from './routes/contact.js';
import quoteRoutes from './routes/quotes.js';
import servicesRoutes from './routes/services.js';
import adminRoutes from './routes/admin.js';
import analyticsRoutes from './routes/analytics.js';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 8081; // AWS Beanstalk prefers 8081

// Security middleware
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
      fontSrc: ["'self'", "https://fonts.gstatic.com"],
      imgSrc: ["'self'", "data:", "https:", "blob:"],
      scriptSrc: ["'self'"],
      connectSrc: ["'self'"]
    }
  }
}));

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: 'Too many requests from this IP, please try again later.'
});
const contactLimiter = rateLimit({
  windowMs: 60 * 60 * 1000,
  max: 5,
  message: 'Too many contact form submissions, please try again later.'
});
app.use(limiter);

app.use(cors({
  origin: [
    'http://localhost:5173',
    'http://localhost:3000',
    'https://morphomobinfra.com',
    'https://www.morphomobinfra.com',
    'https://morphomobinfra.onrender.com'
  ],
  credentials: true
}));

app.use(morgan('combined'));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Serve static files in production/beanstalk
app.use(express.static(join(__dirname, 'build')));

// API Routes
app.use('/api/contact', contactLimiter, contactRoutes);
app.use('/api/quotes', quoteRoutes);
app.use('/api/services', servicesRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/analytics', analyticsRoutes);

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development'
  });
});

// Serve React app for all non-API GET requests
app.get(/^\/(?!api).*/, (req, res) => {
  res.sendFile(join(__dirname, 'build/index.html'));
});

// Global error handler
app.use((err, req, res, next) => {
  console.error('Error:', err);
  res.status(err.status || 500).json({
    message: process.env.NODE_ENV === 'production' 
      ? 'Something went wrong!' 
      : err.message,
    ...(process.env.NODE_ENV !== 'production' && { stack: err.stack })
  });
});

// 404 handler for non-GET requests
app.use('*', (req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

app.listen(PORT, () => {
  console.log(`🚀 MorphoMob Infra Solutions server running on port ${PORT}`);
  console.log(`📧 Email service: ${process.env.SMTP_HOST ? 'Configured' : 'Not configured'}`);
  console.log(`🔒 Environment: ${process.env.NODE_ENV || 'development'}`);
});

export default app;
