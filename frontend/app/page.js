'use client';
import React from 'react';
import { useRouter } from 'next/navigation';

export default function LandingPage() {
  const router = useRouter();

  return (
    <div className="min-h-[calc(100vh-4rem-4rem)] bg flex items-center justify-center bg-gradient-to-br from-purple-100 via-pink-100 to-yellow-100 px-4">
      <main className="text-center">
        <h1
          className="text-5xl md:text-6xl font-extrabold mb-4 opacity-0 animate-fade-down animation-delay-300"
          style={{ color: 'rgba(97, 79, 60, 0.75)' }}
        >
          📚 Book Catalogue
        </h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-xl mx-auto mb-8 opacity-0 animate-fade-up animation-delay-500">
          Discover, manage, and explore your favorite reads in a beautifully designed book catalogue.
        </p>

        <div className="flex justify-center space-x-4 opacity-0 animate-fade-up animation-delay-700">
          <button
            className="bg-[rgba(111,135,103,1)] hover:bg-[#324c31] text-white px-6 py-3 rounded-lg text-lg transition duration-300 shadow-lg hover:-translate-y-1"
            style={{ boxShadow: '0 8px 20px rgba(97, 79, 60, 0.6)' }}
            onClick={() => router.push('/library')}
          >
            Explore Books
          </button>
          <button
            className="bg-[rgba(148,94,149,0.65)] hover:bg-[#8b4996] text-white px-6 py-3 rounded-lg text-lg transition duration-300 shadow-lg hover:-translate-y-1"
            style={{ boxShadow: '0 8px 20px rgba(97, 79, 60, 0.6)' }}
            onClick={() => router.push('/about')}
          >
            Learn More
          </button>
        </div>
      </main>
    </div>
  );
}
