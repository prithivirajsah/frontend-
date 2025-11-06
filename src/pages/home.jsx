import React from 'react';
import Header from '../components/Header';
import Button from '../components/base/Button';
import { Car } from 'lucide-react';
import Footer from '../components/Footer';

export default function HomePage() {
  const handleGetStarted = () => {
    // Example CTA handler
    window.location.href = '/contact';
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      {/* ...existing page content... */}
      <div className="flex-1" />
      <Footer />
    </div>
  );
}
