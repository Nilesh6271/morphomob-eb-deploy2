import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

// Create transporter
const createTransporter = () => {
  if (process.env.NODE_ENV === 'development') {
    // For development, log emails to console
    return {
      sendMail: async (mailOptions) => {
        console.log('📧 Email would be sent:', {
          to: mailOptions.to,
          subject: mailOptions.subject,
          html: mailOptions.html ? 'HTML content present' : 'No HTML content',
          text: mailOptions.text ? mailOptions.text.substring(0, 100) + '...' : 'No text content'
        });
        
        // In development, also log the full email content for debugging
        if (mailOptions.html) {
          console.log('📧 Full email HTML content:', mailOptions.html.substring(0, 500) + '...');
        }
        
        return { messageId: 'dev-' + Date.now() };
      }
    };
  }

  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT || 587,
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }
  });
};

const transporter = createTransporter();

// Send contact form notification to admin
export const sendContactEmail = async (contactData, submissionId) => {
  const mailOptions = {
    from: process.env.SMTP_FROM || 'noreply@morphomobinfra.com',
    to: process.env.ADMIN_EMAIL || 'partnerships@morphomobinfra.com',
    subject: `🚨 New Enterprise Inquiry - ${contactData.company}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #1e3a8a, #1e40af); color: white; padding: 20px; text-align: center;">
          <h1>New Enterprise Partnership Inquiry</h1>
          <p>Submission ID: ${submissionId}</p>
        </div>
        
        <div style="padding: 20px; background: #f8fafc;">
          <h2 style="color: #1e40af;">Contact Information</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px; font-weight: bold;">Name:</td><td style="padding: 8px;">${contactData.name}</td></tr>
            <tr><td style="padding: 8px; font-weight: bold;">Company:</td><td style="padding: 8px;">${contactData.company}</td></tr>
            <tr><td style="padding: 8px; font-weight: bold;">Designation:</td><td style="padding: 8px;">${contactData.designation}</td></tr>
            <tr><td style="padding: 8px; font-weight: bold;">Email:</td><td style="padding: 8px;">${contactData.email}</td></tr>
            <tr><td style="padding: 8px; font-weight: bold;">Phone:</td><td style="padding: 8px;">${contactData.phone}</td></tr>
          </table>
          
          <h2 style="color: #1e40af; margin-top: 30px;">Project Details</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px; font-weight: bold;">Project Type:</td><td style="padding: 8px;">${contactData.projectType}</td></tr>
            <tr><td style="padding: 8px; font-weight: bold;">Project Value:</td><td style="padding: 8px;">${contactData.projectValue}</td></tr>
            <tr><td style="padding: 8px; font-weight: bold;">Timeline:</td><td style="padding: 8px;">${contactData.timeline}</td></tr>
          </table>
          
          <h2 style="color: #1e40af; margin-top: 30px;">Requirements</h2>
          <div style="background: white; padding: 15px; border-radius: 8px; border-left: 4px solid #f59e0b;">
            ${contactData.requirements}
          </div>
          
          <div style="margin-top: 30px; padding: 15px; background: #fef3c7; border-radius: 8px;">
            <p style="margin: 0; font-weight: bold; color: #92400e;">⚡ Action Required: Respond within 4 hours as per our service guarantee</p>
          </div>
        </div>
      </div>
    `
  };

  return await transporter.sendMail(mailOptions);
};

// Send auto-reply to customer
export const sendAutoReply = async (contactData) => {
  const mailOptions = {
    from: process.env.SMTP_FROM || 'partnerships@morphomobinfra.com',
    to: contactData.email,
    subject: 'Thank you for your Enterprise Partnership Inquiry - MorphoMob Infra',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #1e3a8a, #1e40af); color: white; padding: 30px; text-align: center;">
          <h1>Thank You, ${contactData.name}!</h1>
          <p style="font-size: 18px;">Your enterprise partnership inquiry has been received</p>
        </div>
        
        <div style="padding: 30px; background: #f8fafc;">
          <h2 style="color: #1e40af;">What Happens Next?</h2>
          
          <div style="background: white; padding: 20px; border-radius: 12px; margin: 20px 0; border-left: 4px solid #10b981;">
            <h3 style="color: #059669; margin-top: 0;">✅ Within 4 Hours</h3>
            <p>Our senior management team will review your requirements and contact you directly to discuss your project needs.</p>
          </div>
          
          <div style="background: white; padding: 20px; border-radius: 12px; margin: 20px 0; border-left: 4px solid #3b82f6;">
            <h3 style="color: #2563eb; margin-top: 0;">📋 Strategic Consultation</h3>
            <p>We'll schedule a detailed consultation to understand your project scope and provide customized solutions.</p>
          </div>
          
          <div style="background: white; padding: 20px; border-radius: 12px; margin: 20px 0; border-left: 4px solid #f59e0b;">
            <h3 style="color: #d97706; margin-top: 0;">💼 Proposal Development</h3>
            <p>Our team will prepare a comprehensive technical and commercial proposal tailored to your requirements.</p>
          </div>
          
          <div style="background: #fef3c7; padding: 20px; border-radius: 12px; margin: 30px 0;">
            <h3 style="color: #92400e; margin-top: 0;">🚨 Emergency Requirements?</h3>
            <p style="margin-bottom: 10px;">For urgent project needs, contact our 24/7 emergency hotline:</p>
            <p style="font-size: 20px; font-weight: bold; color: #dc2626;">+91 98765 43210</p>
          </div>
          
          <div style="text-align: center; margin-top: 30px;">
            <p style="color: #6b7280;">Best regards,<br><strong>MorphoMob Infra Solutions Team</strong></p>
          </div>
        </div>
      </div>
    `
  };

  return await transporter.sendMail(mailOptions);
};

// Send quote request notification
export const sendQuoteRequestEmail = async (quoteData) => {
  const mailOptions = {
    from: process.env.SMTP_FROM || 'noreply@morphomobinfra.com',
    to: process.env.ADMIN_EMAIL || 'quotes@morphomobinfra.com',
    subject: `💰 New Quote Request - ${quoteData.serviceType}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #f59e0b, #d97706); color: white; padding: 20px; text-align: center;">
          <h1>New Quote Request</h1>
          <p>Quote ID: ${quoteData.quoteId}</p>
        </div>
        
        <div style="padding: 20px; background: #f8fafc;">
          <h2 style="color: #d97706;">Service Details</h2>
          <p><strong>Service Type:</strong> ${quoteData.serviceType}</p>
          <p><strong>Timeline:</strong> ${quoteData.timeline}</p>
          ${quoteData.quantity ? `<p><strong>Quantity:</strong> ${quoteData.quantity}</p>` : ''}
          
          <h2 style="color: #d97706;">Project Details</h2>
          <div style="background: white; padding: 15px; border-radius: 8px;">
            ${quoteData.projectDetails}
          </div>
          
          <h2 style="color: #d97706;">Contact Information</h2>
          <p><strong>Name:</strong> ${quoteData.contactInfo.name}</p>
          <p><strong>Email:</strong> ${quoteData.contactInfo.email}</p>
          <p><strong>Phone:</strong> ${quoteData.contactInfo.phone}</p>
        </div>
      </div>
    `
  };

  return await transporter.sendMail(mailOptions);
};