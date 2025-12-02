import React from 'react';
import './Hero.scss';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__inner">
        <div className="hero__content">
          <div className="hero__badge">
            <span className="hero__badge-icon">🔥</span>
            <span className="hero__badge-text">Hot Recipes</span>
          </div>
          
          <h1 className="hero__title">
            Spicy delicious chicken wings
          </h1>
          
          <p className="hero__description">
            Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim 
          </p>
          
          <div className="hero__meta">
            <div className="hero__meta-item">
              <span className="hero__meta-icon">⏱️</span>
              <span className="hero__meta-text">30 Minutes</span>
            </div>
            <div className="hero__meta-item">
              <span className="hero__meta-icon">🍴</span>
              <span className="hero__meta-text">Chicken</span>
            </div>
          </div>
        </div>
        
        <div className="hero__image">
          {/* Тут буде зображення */}
        </div>
      </div>
    </section>
  );
}