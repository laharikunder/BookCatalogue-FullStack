'use client';
import { useState } from "react";
import { useRouter } from 'next/navigation';

export default function Contact() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in all fields.");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setSubmitted(false), 3000);
      } else {
        alert("Failed to send message.");
      }
    } catch (error) {
      console.error("Error submitting contact form:", error);
      alert("Something went wrong. Try again later.");
    }
  };

  return (
    <div className="bg bg-gray-100 px-4 py-12 mt-10 flex justify-center items-center">
      <div className="w-full max-w-lg bg-white p-6 rounded-lg shadow-lg opacity-0 animate-fade-up animation-delay-100">
        <h2 className="text-4xl font-extrabold text-center mb-6 opacity-0 animate-fade-down animation-delay-100" style={{ color: 'rgba(97, 79, 60, 0.75)' }}>
          Contact Us ✉️
        </h2>

        {submitted && (
          <div className="bg-green-100 text-green-700 px-4 py-2 rounded mb-4 text-center">
            Your message has been sent successfully!
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring focus:ring-purple-300"
              placeholder="Your name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring focus:ring-purple-300"
              placeholder="Your email"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
            <textarea
              name="message"
              id="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring focus:ring-purple-300"
              placeholder="Your message"
            />
          </div>

          <button
            type="submit"
            className="bg-[rgba(97,79,60,0.65)] hover:bg-[rgba(97,79,60,0.9)] text-white font-bold py-2 px-4 rounded-lg transition hover:-translate-y-1"
            style={{ boxShadow: '0 5px 10px rgba(97, 79, 60, 0.6)' }}
          >
            Send Message
          </button>
        </form>

        <button
          onClick={() => router.push("/reviews")}
          className="mt-6 w-full text-lg font-semibold flex justify-center bg-[rgba(155,91,157,0.90)] hover:bg-[#8b4996] text-white py-3 rounded-lg transition hover:-translate-y-1"
          style={{ boxShadow: '0 5px 20px rgba(97, 79, 60, 0.6)' }}
        >
          📚 See Other Reviews
        </button>

        <div className="mt-8 border-t pt-4 text-center text-sm text-gray-600">
          <p>📞 Get in touch with us directly:</p>
          <p className="mt-2">
            Lahari: <a href="laharivk2006@gmail.com" className="text-purple-600 hover:underline">laharivk2006@gmail.com</a>
          </p>
          <p>
            Karthik: <a href="tel:9100694446" className="text-purple-600 hover:underline">91006 94446</a>
          </p>
        </div>
      </div>
    </div>
  );
}
