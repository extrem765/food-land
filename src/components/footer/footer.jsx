import React, { useState } from 'react';
import { Facebook, Twitter, Instagram } from 'lucide-react';
import './footer.scss';

export default function NewsletterFooter() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Subscribed:', email);
    setEmail('');
  };

  return (
    <>
      {/* Newsletter Section */}
      <section className="newsletter">
        <div className="newsletter__container">
          <div className="newsletter__content">
            {/* Left Vegetables Image */}
            <div className="newsletter__image newsletter__image--left">
              <img 
                src="https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=300&h=300&fit=crop" 
                alt="Fresh vegetables"
              />
            </div>

            {/* Center Content */}
            <div className="newsletter__center">
              <h2 className="newsletter__title">
                Deliciousness to your inbox
              </h2>
              <p className="newsletter__description">
                Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqut enim ad minim
              </p>

              {/* Subscribe Form */}
              <form className="newsletter__form" onSubmit={handleSubmit}>
                <input 
                  type="email"
                  placeholder="Your email address..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="newsletter__input"
                  required
                />
                <button type="submit" className="newsletter__button">
                  Subscribe
                </button>
              </form>
            </div>

            {/* Right Food Image */}
            <div className="newsletter__image newsletter__image--right">
              <img 
                src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=300&h=300&fit=crop" 
                alt="Delicious food"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer__container">
          {/* Top Section */}
          <div className="footer__top">
            {/* Left - Logo & Description */}
            <div className="footer__left">
              <h3 className="footer__logo">Foodieland</h3>
              <p className="footer__description">
                Lorem ipsum dolor sit amet, consectetuipisicing elit,
              </p>
            </div>

            {/* Right - Navigation */}
            <nav className="footer__nav">
              <a href="#recipes" className="footer__link">Recipes</a>
              <a href="#blog" className="footer__link">Blog</a>
              <a href="#contact" className="footer__link">Contact</a>
              <a href="#about" className="footer__link">About us</a>
            </nav>
          </div>

          {/* Divider */}
          <div className="footer__divider"></div>

          {/* Bottom Section */}
          <div className="footer__bottom">
            <p className="footer__copyright">
              © 2020 Flowbase. Powered by <span className="footer__webflow">Webflow</span>
            </p>

            {/* Social Icons */}
            <div className="footer__social">
              <a href="#" className="footer__social-link" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="footer__social-link" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="footer__social-link" aria-label="Instagram">
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}