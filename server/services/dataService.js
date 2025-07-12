import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { v4 as uuidv4 } from 'uuid';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DATA_DIR = path.join(__dirname, '../data');

// Ensure data directory exists
const ensureDataDir = async () => {
  try {
    await fs.access(DATA_DIR);
  } catch {
    await fs.mkdir(DATA_DIR, { recursive: true });
  }
};

// Save contact submission
export const saveContactSubmission = async (contactData) => {
  await ensureDataDir();
  
  const submissionId = `CONTACT-${Date.now()}-${uuidv4().slice(0, 8)}`;
  const filename = `contact-${submissionId}.json`;
  const filepath = path.join(DATA_DIR, filename);
  
  const submission = {
    id: submissionId,
    ...contactData,
    status: 'new'
  };
  
  await fs.writeFile(filepath, JSON.stringify(submission, null, 2));
  
  // Also append to contacts log
  const logEntry = `${new Date().toISOString()},${submissionId},${contactData.company},${contactData.email},${contactData.projectType}\n`;
  await fs.appendFile(path.join(DATA_DIR, 'contacts.log'), logEntry);
  
  return submissionId;
};

// Generate quote ID
export const generateQuoteId = () => {
  return `QT-${Date.now()}-${Math.random().toString(36).substr(2, 6).toUpperCase()}`;
};

// Save quote request
export const saveQuoteRequest = async (quoteData) => {
  await ensureDataDir();
  
  const filename = `quote-${quoteData.quoteId}.json`;
  const filepath = path.join(DATA_DIR, filename);
  
  await fs.writeFile(filepath, JSON.stringify(quoteData, null, 2));
  
  return quoteData.quoteId;
};

// Get contact submissions
export const getContactSubmissions = async () => {
  await ensureDataDir();
  
  try {
    const files = await fs.readdir(DATA_DIR);
    const contactFiles = files.filter(file => file.startsWith('contact-'));
    
    const submissions = await Promise.all(
      contactFiles.map(async (file) => {
        const content = await fs.readFile(path.join(DATA_DIR, file), 'utf8');
        return JSON.parse(content);
      })
    );
    
    return submissions.sort((a, b) => new Date(b.submittedAt) - new Date(a.submittedAt));
  } catch (error) {
    console.error('Error reading contact submissions:', error);
    return [];
  }
};

// Get quote requests
export const getQuoteRequests = async () => {
  await ensureDataDir();
  
  try {
    const files = await fs.readdir(DATA_DIR);
    const quoteFiles = files.filter(file => file.startsWith('quote-'));
    
    const quotes = await Promise.all(
      quoteFiles.map(async (file) => {
        const content = await fs.readFile(path.join(DATA_DIR, file), 'utf8');
        return JSON.parse(content);
      })
    );
    
    return quotes.sort((a, b) => new Date(b.submittedAt) - new Date(a.submittedAt));
  } catch (error) {
    console.error('Error reading quote requests:', error);
    return [];
  }
};

// Update quote status
export const updateQuoteStatus = async (quoteId, status, notes) => {
  await ensureDataDir();
  
  const filename = `quote-${quoteId}.json`;
  const filepath = path.join(DATA_DIR, filename);
  
  try {
    const content = await fs.readFile(filepath, 'utf8');
    const quote = JSON.parse(content);
    
    quote.status = status;
    quote.notes = notes;
    quote.updatedAt = new Date().toISOString();
    
    await fs.writeFile(filepath, JSON.stringify(quote, null, 2));
    
    return quote;
  } catch (error) {
    throw new Error(`Quote ${quoteId} not found`);
  }
};

// Get service catalog
export const getServiceCatalog = async () => {
  return {
    materials: [
      {
        id: 'concrete',
        name: 'Premium Ready Mix Concrete',
        grades: ['M10', 'M15', 'M20', 'M25', 'M30', 'M35', 'M40', 'M50', 'M60', 'M80'],
        basePrice: 4500,
        unit: 'per cubic meter',
        availability: 'Available 24/7'
      },
      {
        id: 'steel',
        name: 'TMT Steel Bars',
        grades: ['Fe415', 'Fe500', 'Fe550'],
        sizes: ['8mm', '10mm', '12mm', '16mm', '20mm', '25mm', '32mm', '40mm'],
        basePrice: 65000,
        unit: 'per metric ton',
        availability: 'In stock'
      },
      {
        id: 'aggregates',
        name: 'Certified Aggregates',
        types: ['6mm', '10mm', '20mm', '40mm', 'M-Sand'],
        basePrice: 1200,
        unit: 'per metric ton',
        availability: 'Available'
      }
    ],
    equipment: [
      {
        id: 'tower-crane',
        name: 'Tower Cranes',
        capacity: '5T to 25T',
        dailyRate: 15000,
        monthlyRate: 350000,
        availability: 'Subject to booking'
      },
      {
        id: 'mobile-crane',
        name: 'Mobile Cranes',
        capacity: '25T to 500T',
        dailyRate: 25000,
        monthlyRate: 600000,
        availability: 'Available'
      },
      {
        id: 'excavator',
        name: 'Excavators',
        capacity: '20T to 50T',
        dailyRate: 8000,
        monthlyRate: 180000,
        availability: 'Available'
      }
    ]
  };
};

// Get equipment availability
export const getEquipmentAvailability = async (params) => {
  // Mock availability data
  return {
    location: params.location,
    dateRange: {
      start: params.startDate,
      end: params.endDate
    },
    available: [
      {
        id: 'crane-001',
        type: 'Tower Crane',
        capacity: '25T',
        status: 'available',
        dailyRate: 15000
      },
      {
        id: 'excavator-003',
        type: 'Excavator',
        capacity: '30T',
        status: 'available',
        dailyRate: 8000
      }
    ],
    unavailable: [
      {
        id: 'crane-002',
        type: 'Mobile Crane',
        capacity: '100T',
        status: 'booked',
        availableFrom: '2024-02-15'
      }
    ]
  };
};

// Get analytics data
export const getAnalyticsData = async () => {
  await ensureDataDir();
  
  try {
    // Read contacts log for basic analytics
    const logPath = path.join(DATA_DIR, 'contacts.log');
    let totalContacts = 0;
    
    try {
      const logContent = await fs.readFile(logPath, 'utf8');
      totalContacts = logContent.split('\n').filter(line => line.trim()).length;
    } catch {
      // Log file doesn't exist yet
    }
    
    return {
      totalContacts,
      totalQuotes: 0, // Would calculate from quote files
      responseTime: '2.5 hours average',
      conversionRate: '85%',
      topServices: [
        { name: 'Ready Mix Concrete', requests: 45 },
        { name: 'Tower Cranes', requests: 32 },
        { name: 'TMT Steel', requests: 28 }
      ]
    };
  } catch (error) {
    console.error('Error getting analytics:', error);
    return {
      totalContacts: 0,
      totalQuotes: 0,
      responseTime: 'N/A',
      conversionRate: 'N/A',
      topServices: []
    };
  }
};