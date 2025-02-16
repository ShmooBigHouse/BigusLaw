import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:elbiguspa@gmail.com?subject=Legal Consultation Request from ${formData.name}&body=${formData.message}`;
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full px-4 py-2 border-2 border-gray-400 rounded-lg shadow-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Your name"
          onChange={(e) => setFormData({...formData, name: e.target.value})}
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full px-4 py-2 border-2 border-gray-400 rounded-lg shadow-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Your email address"
          onChange={(e) => setFormData({...formData, email: e.target.value})}
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          className="w-full px-4 py-2 border-2 border-gray-400 rounded-lg shadow-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="How can we help you?"
          onChange={(e) => setFormData({...formData, message: e.target.value})}
        />
      </div>
      <div className="flex justify-center">
        <button
          type="submit"
          className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
        >
          Send Message
        </button>
      </div>
    </form>
  );
};

export default ContactForm;