import React from "react";

export default function MailTemplate() {
  return (
    <div className="container mx-auto max-w-2xl bg-white p-8 rounded-lg shadow-md">
      <div className="header text-center mb-8">
        <img src="logo.png" alt="Koncept India Enterprises" className="max-w-48 mx-auto" />
      </div>
      <div className="content leading-6 text-gray-700">
        <h1 className="text-2xl font-bold mb-4">Welcome to Koncept India Enterprises</h1>
        <p>Dear [Recipient's Name],</p>
        <p>We are excited to introduce you to our comprehensive printing solutions. At Koncept India Enterprises, we specialize in a wide range of printing services, including offset printing, digital printing, screen printing, leaf printing, and UV printing.</p>
        <p>Our commitment to quality, innovation, and customer satisfaction has made us a trusted partner for businesses and individuals alike. With state-of-the-art technology and a team of skilled professionals, we ensure exceptional results for all your printing needs.</p>
        <p>Whether you require brochures, catalogs, packaging, or any other printed materials, we are here to bring your vision to life.</p>
        <a href="https://www.konceptindia.com" className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-4">Explore Our Services</a>
      </div>
      <div className="footer mt-8 text-center text-gray-600 text-sm">
        <p>&copy; Koncept India Enterprises. All rights reserved.</p>
        <p>Email: info@konceptindia.com | Phone: +91 123 456 7890</p>
      </div>
    </div>
  );
}
