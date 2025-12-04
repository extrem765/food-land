import React from 'react';
import './Chefsection.scss';

export default function Chefsection() {
  return (
    <section className="chef-section">
      <div className="chef-section__container">
        <div className="chef-section__content">
          {/* Left Side - Text Content */}
          <div className="chef-section__text">
            <h2 className="chef-section__title">
              Everyone can be a<br />
              chef in their own kitchen
            </h2>
            <p className="chef-section__description">
              Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do 
              eiusmod tempor incididunt ut labore et dolore magna aliqut enim 
              ad minim
            </p>
            <button className="chef-section__button">
              Learn More
            </button>
          </div>

          {/* Right Side - Image */}
          <div className="chef-section__image-wrapper">
            <img 
              src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=600&h=600&fit=crop"
              alt="Professional chef with plate"
              className="chef-section__image"
            />
            
            {/* Floating Food Icons */}
            
          </div>
        </div>
      </div>
    </section>
  );
}