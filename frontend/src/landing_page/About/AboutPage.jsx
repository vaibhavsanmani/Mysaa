import React from 'react'
import Hero from './Hero';
import Team from './Team';

function AboutPage() {
  return (
    <div className="container py-5 theme-page-container">
      <Hero />
      <Team />
    </div>
  );
}

export default AboutPage;