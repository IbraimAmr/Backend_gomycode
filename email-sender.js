const nodemailer = require('nodemailer');

// Create a transporter object using SMTP transport
const transporter = nodemailer.createTransport({
  service: 'Gmail', // Use your email service provider
  auth: {
    user: 'ibraAgmail.com',
    pass: '2222',
  },
});

// Email content
const mailOptions = {
  from: 'YOUR_EMAIL_ADDRESS',
  to: 'TO_EMAIL_ADDRESS',
  subject: 'Test Email',
  text: 'This is a test email sent from Node.js using Nodemailer.',
};

// Send email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error('Error sending email:', error);
  } else {
    console.log('Email sent:', info.response);
  }
});
