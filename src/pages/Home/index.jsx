import React from 'react';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import LandingIntroBanner from './components/LandingIntroBanner';
import IceworksInfo from './components/IceworksInfo';
import DesignLanguage from './components/DesignLanguage';
import Materials from './components/Materials';
import BrandList from './components/BrandList';

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
