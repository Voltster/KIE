import React, { useState } from 'react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add the logic to submit the form data

    // Reset the form after submission
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div className="contact-section ">
      <h2 className="contact-title">Get in Touch</h2>
      <div className="contact-container">
        <div className="contact-info">
          <p>
            At Koncept India Enterprises, we value open communication and strive to provide exceptional customer service. Whether you have a specific project in mind or need guidance on the best printing solution for your needs, our team is here to assist you.
          </p>
          <div className="contact-details">
            <div>
              <h3>Phone</h3>
              <p>+91 123 456 7890</p>
            </div>
            <div>
              <h3>Email</h3>
              <p>info@konceptindia.com</p>
            </div>
            <div>
              <h3>Address</h3>
              <p>123 Main Street, New Delhi, India 110001</p>
            </div>
          </div>
        </div>
        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="submit-btn">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;