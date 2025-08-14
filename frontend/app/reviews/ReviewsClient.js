'use client';
import React, { useEffect, useState } from "react";

export default function ReviewsPage() {
  const [reviews, setReviews] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    message: "",
  });

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/reviews");
        const data = await res.json();
        setReviews(data);
      } catch (err) {
        console.error("❌ Failed to fetch reviews:", err);
      }
    };

    fetchReviews();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.message.trim()) {
      alert("Please fill in both fields.");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/api/reviews", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const newReview = await res.json();
      setReviews([newReview, ...reviews]);
      setFormData({ name: "", message: "" });
    } catch (err) {
      console.error("❌ Error submitting review:", err);
    }
  };

  return (
    <div className="bg bg-gradient-to-br from-blue-50 via-purple-100 to-pink-100 py-12 px-6">
      <div className="max-w-xl mx-auto bg-white shadow-xl rounded-2xl p-8 opacity-0 animate-fade-up animation-delay-100">

        <h1 className="text-3xl font-bold text-purple-700 mb-6 text-center opacity-0 animate-fade-down animation-delay-100" style={{ color: 'rgba(97, 79, 60, 0.75)' }}>
          User Reviews 📝
        </h1>

        {/* Review Input Form */}
        <form onSubmit={handleSubmit} className="mb-8 space-y-4">
          <input
            type="text"
            placeholder="Your name"
            className="w-full border p-3 rounded focus:outline-none focus:ring-2 focus:ring-purple-400"
            value={formData.name}
            onChange={(e) =>
              setFormData({ ...formData, name: e.target.value })
            }
          />
          <textarea
            placeholder="Your review"
            className="w-full border p-3 rounded focus:outline-none focus:ring-2 focus:ring-purple-400 resize-none"
            rows="4"
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
          />
          <button
            type="submit"
            className="bg-[rgba(148,94,149,0.9)] hover:bg-[#8b4996] text-white px-4 py-2 rounded-lg transition hover:-translate-y-1"
            style={{ boxShadow: '0 5px 10px rgba(97, 79, 60, 0.6)' }}
          >
            Submit Review
          </button>
        </form>

        {/* Display Reviews */}
        {reviews.length === 0 ? (
          <p className="text-center text-gray-500">No reviews available yet.</p>
        ) : (
          <div className="space-y-4">
            {reviews.map((review) => (
              <div
                key={review._id || review.id}
                className="border border-gray-200 rounded-md p-4 bg-gray-50"
              >
                <p className="font-semibold text-purple-600" style={{ color: 'rgba(97, 79, 60, 0.65)' }}>{review.name}</p>
                <p className="text-gray-700">{review.message}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
