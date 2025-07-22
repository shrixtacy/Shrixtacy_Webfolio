import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';
import path from 'path';
import { fileURLToPath } from 'url';
import connectDB from './config/db.js';
import Message from './models/Message.js';
import Visit from './models/Visit.js';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Initialize Express app
const app = express();
app.use(cors());
app.use(express.json());

// Serve static files from the dist directory
app.use(express.static(path.join(__dirname, '../dist')));

// Connect to MongoDB
connectDB();

// Email transporter configuration with error handling
const createTransporter = () => {
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    console.error('Email configuration missing. Please check your .env file.');
    return null;
  }

  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });
};

const transporter = createTransporter();

// API Routes
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    // Save message to database
    const newMessage = new Message({ name, email, message });
    await newMessage.save();

    // Check if email transporter is configured
    if (!transporter || !process.env.CONTACT_EMAIL) {
      console.error('Email service not properly configured');
      return res.status(200).json({ 
        message: 'Message saved successfully, but email notification could not be sent'
      });
    }

    try {
      // Send notification email to admin
      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: process.env.CONTACT_EMAIL,
        subject: `New Portfolio Contact: ${name}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
          <hr>
          <p>Received on: ${new Date().toLocaleString()}</p>
        `
      });

      // Send confirmation email to user
      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: email,
        subject: 'Thank you for contacting me!',
        html: `
          <h2>Thank you for reaching out!</h2>
          <p>Dear ${name},</p>
          <p>I have received your message and will get back to you as soon as possible.</p>
          <p>Best regards,<br>Shriyansh</p>
        `
      });
    } catch (emailError) {
      console.error('Error sending emails:', emailError);
      return res.status(200).json({ 
        message: 'Message saved successfully, but there was an issue sending email notifications'
      });
    }

    res.status(200).json({ message: 'Message sent successfully' });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Failed to process your message' });
  }
});

app.post('/api/analytics/visit', async (req, res) => {
  try {
    const { page } = req.body;
    
    if (!page) {
      return res.status(400).json({ error: 'Page parameter is required' });
    }

    const visit = new Visit({
      page,
      timestamp: new Date(),
      userAgent: req.headers['user-agent']
    });
    await visit.save();
    res.status(200).json({ message: 'Visit recorded' });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Failed to record visit' });
  }
});

// Handle all other routes by serving the index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});