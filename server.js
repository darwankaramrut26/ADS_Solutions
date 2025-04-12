const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
app.use(bodyParser.json());

app.post('/send-email', (req, res) => {
    const formData = req.body;

    const transporter = nodemailer.createTransport({
        service: 'gmail', // Or your email service (e.g., 'yahoo', 'outlook')
        auth: {
            user: 'amrutdar25@gmail.com', // Replace with your email
            pass: '8975860883' // Replace with your app password
        }
    });

    const mailOptions = {
        from: 'your_email@gmail.com', // Replace with your email
        to: 'amrutdar25@gmail.com', // Your email
        subject: 'Contact Form Submission',
        text: JSON.stringify(formData, null, 2)
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error);
            res.status(500).json({ success: false, message: 'Failed to send email: ' + error.message }); // Include error message
        } else {
            console.log('Email sent:', info.response);
            res.json({ success: true, message: 'Email sent successfully' });
        }
    });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});