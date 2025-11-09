// EmailJS Configuration
// To set up EmailJS:
// 1. Go to https://www.emailjs.com/ and create a free account
// 2. Create an Email Service (Gmail, Outlook, etc.)
// 3. Create an Email Template with these variables:
//    - {{from_name}}
//    - {{from_email}}
//    - {{message}}
//    - {{to_email}}
// 4. Copy your Service ID, Template ID, and Public Key from the dashboard
// 5. Replace the values below

export const emailConfig = {
  serviceId: 'service_224cb7j', // Replace with your EmailJS Service ID
  templateId: 'template_0hcdnro', // Replace with your EmailJS Template ID
  publicKey: 'H0otXkLZQK3_b6urS', // Replace with your EmailJS Public Key
  recipientEmail: 'jointt.work@gmail.com' // Your email address to receive messages
};

// Alternative: Use Formspree (easier setup, no backend needed)
// 1. Go to https://formspree.io/ and create a free account
// 2. Create a new form
// 3. Copy your form endpoint (e.g., https://formspree.io/f/YOUR_FORM_ID)
// 4. Uncomment the formspreeEndpoint below and use it in StayInTouch.jsx

export const formspreeEndpoint = ''; // e.g., 'https://formspree.io/f/YOUR_FORM_ID'

