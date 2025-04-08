import React, { useState } from 'react';
import Modal from './Modal';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowModal(true);
    setFormData({ name: '', email: '', message: '' });
    console.log(formData)
    setTimeout(() => setShowModal(false), 3000);
  };

  return (
    <section id="contact" className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-poppins font-bold text-center mb-16">Get in Touch</h2>
        <div className="max-w-xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-blue-600 outline-none font-poppins"
                required
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-blue-600 outline-none font-poppins"
                required
              />
            </div>
            <div>
              <textarea
                placeholder="Your Message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-blue-600 outline-none h-32 font-poppins"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-poppins cursor-pointer"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
      {showModal && <Modal message="Message sent successfully!" />}
    </section>
  );
}

export default Contact;