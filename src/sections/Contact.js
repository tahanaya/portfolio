import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import '../styles/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');

  // Update form data based on user input
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission with EmailJS
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,   // Your EmailJS service ID
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,  // Your EmailJS template ID
        formData,
        process.env.REACT_APP_EMAILJS_USER_ID       // Your EmailJS public key/user ID
      )
      .then(
        (result) => {
          console.log(result.text);
          setResponseMessage('Message sent successfully!');
          setFormData({ name: '', email: '', message: '' });
          setLoading(false);
        },
        (error) => {
          console.error(error.text);
          setResponseMessage('Something went wrong. Please try again later.');
          setLoading(false);
        }
      );
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <h2>Contact Me</h2>
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit" disabled={loading}>
            {loading ? 'Sending...' : 'Send'}
          </button>
        </form>
        {responseMessage && <p className="response-message">{responseMessage}</p>}
      </div>
    </section>
  );
};

export default Contact;
