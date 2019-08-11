import React from 'react';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import LandingIntroBanner from './components/LandingIntroBanner';

export default function Home() {
  return (
    <div
      className="home-page"
      style={{
        background: '#fff',
      }}
    >
      <Header />
      <LandingIntroBanner />
      <Footer />
    </div>
  );
}
