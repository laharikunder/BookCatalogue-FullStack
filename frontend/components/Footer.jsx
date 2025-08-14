'use client';
import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[rgba(97,79,60,0.75)] to-[rgba(97,79,60,0.75)] text-white shadow-md py-6 px-6 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto text-center text-sm">
        © {new Date().getFullYear()} BookCatalogue App
      </div>
    </footer>
  );
}
