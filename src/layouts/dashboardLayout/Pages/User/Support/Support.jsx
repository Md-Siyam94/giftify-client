import React, { useState } from "react";
import { MdSupportAgent } from "react-icons/md";
import { toast } from "react-toastify";

const Support = () => {
  const [formData, setFormData] = useState({
    subject: "",
    message: "",
    name: "",
    email: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Support request submitted:", formData);
    // ✅ TODO: integrate EmailJS or Axios POST to backend
    toast("Your message has been sent! We'll get back soon.");
    setFormData({ subject: "", message: "", name: "", email: "" });
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <div className="bg-white shadow-xl rounded-xl p-6">
        <div className="flex items-center gap-3 mb-6">
          <MdSupportAgent className="text-3xl text-indigo-600" />
          <h2 className="text-2xl font-bold">Contact Support</h2>
        </div>
        <p className="mb-6 text-gray-600">
          Facing gift delivery problems, need a refund, or want to share a complaint?
          Reach out to our support team directly below. We’ll get back to you ASAP!
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Your Name</label>
            <input
              type="text"
              name="name"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
              placeholder="John Doe"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Your Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Subject</label>
            <select
              name="subject"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
              value={formData.subject}
              onChange={handleChange}
            >
              <option value="">Select Subject</option>
              <option value="Gift Delivery Issue">Gift Delivery Issue</option>
              <option value="Refund Request">Refund Request</option>
              <option value="Complaint">Complaint</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div>
            <label className="block mb-1 font-medium">Message</label>
            <textarea
              name="message"
              required
              rows={4}
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
              placeholder="Describe your issue..."
              value={formData.message}
              onChange={handleChange}
            />
          </div>
          <button
            type="submit"
            className="bg-indigo-600 text-white font-semibold px-6 py-2 rounded-lg hover:bg-indigo-700 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Support;
