import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="w-full bg-gray-50">

      {/* 🔷 Banner */}
      <div
        className="relative h-[220px] w-full flex items-center justify-center"
        style={{
          background: "linear-gradient(135deg, #0f2550, #1a3260)",
        }}
      >
        <div className="text-center text-white">
          <h1 className="text-4xl font-bold tracking-wide">Contact Us</h1>
          <p className="mt-2 text-sm text-gray-200">🏠 &gt; CONTACT US</p>
        </div>
      </div>

      {/* 🔷 Contact Info Cards */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-12">

          {/* Phone */}
          <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100 flex items-start gap-4">
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
              style={{ backgroundColor: "rgba(15,37,80,0.08)" }}
            >
              {/* Headphone Icon */}
              <svg
                className="w-6 h-6"
                style={{ color: "#1a6eb5" }}
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 18v-6a9 9 0 0118 0v6M3 18a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H5a2 2 0 00-2 2v3zM21 18a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h1a2 2 0 012 2v3z"
                />
              </svg>
            </div>
            <div>
              <h3
                className="text-lg font-bold mb-1"
                style={{ color: "#0f2550" }}
              >
                Phone
              </h3>
              <p className="text-gray-600 text-sm">Phone 01: (+91) 7011918354</p>
              <p className="text-gray-600 text-sm">Phone 02: (+91) 9711029497</p>
              <p className="text-gray-600 text-sm">tel 011-71367072</p>
            </div>
          </div>

          {/* Address */}
          <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100 flex items-start gap-4">
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
              style={{ backgroundColor: "rgba(15,37,80,0.08)" }}
            >
              {/* Location Pin Icon */}
              <svg
                className="w-6 h-6"
                style={{ color: "#1a6eb5" }}
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <div>
              <h3
                className="text-lg font-bold mb-1"
                style={{ color: "#0f2550" }}
              >
                Address
              </h3>
              <p className="text-gray-600 text-sm">
                20, Beadon Pura, Karol Bagh, New Delhi - 110005
              </p>
            </div>
          </div>

          {/* Email */}
          <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100 flex items-start gap-4">
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
              style={{ backgroundColor: "rgba(15,37,80,0.08)" }}
            >
              {/* Envelope Icon */}
              <svg
                className="w-6 h-6"
                style={{ color: "#1a6eb5" }}
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <div>
              <h3
                className="text-lg font-bold mb-1"
                style={{ color: "#0f2550" }}
              >
                Email
              </h3>
              <p className="text-gray-600 text-sm">info@sdpksb.com</p>
              <p className="text-gray-600 text-sm">schoolsdps1@gmail.com</p>
              <p className="text-gray-600 text-sm">dakshitasinghalsdps@gmail.com</p>
            </div>
          </div>
        </div>

        {/* 🔷 Google Map Embed */}
        <div className="rounded-xl overflow-hidden shadow-lg mb-16 border border-gray-200">
          <iframe
            title="SD Public School Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.6874483232024!2d77.19138!3d28.6469!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd108c4ef4f7%3A0x5a3d3e3e3e3e3e3e!2sSD%20Public%20School%2C%20Karol%20Bagh!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin"
            width="100%"
            height="420"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        {/* 🔷 Contact Form Section */}
        <div className="bg-white rounded-xl shadow-md p-10 border border-gray-100 max-w-6xl mx-auto">
          <h2
            className="text-[40px]  font-bold text-center mb-8"
            style={{ color: "#8b0000" }}
          >
            Contact
          </h2>

          <form onSubmit={handleSubmit}>
            {/* Row 1: Name, Email, Phone */}
            <div className="grid md:grid-cols-3 gap-4 mb-4">
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-300 transition"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email Address"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-300 transition"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-300 transition"
              />
            </div>

            {/* Row 2: Message */}
            <div className="mb-6">
              <textarea
                name="message"
                placeholder="Your message here"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-300 transition resize-y"
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-center">
              <button
                type="submit"
                className="px-10 py-3 rounded-full text-white text-sm font-semibold tracking-widest uppercase transition hover:opacity-90 hover:scale-105 active:scale-95"
                style={{ backgroundColor: "#4a7cf7" }}
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;