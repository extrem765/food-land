import React from 'react';
import { Facebook, Twitter, Instagram } from 'lucide-react';
import './Header.scss';

export default function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__content">
          {/* Логотип */}
          <div className="header__logo text-2xl font-bold italic">
            Foodieland
          </div>

          {/* Меню */}
          <nav className="header__menu">
            <ul className="header__menu-list">
              <li className="header__menu-item">
                <a href="#" className="header__menu-link">Home</a>
              </li>
              <li className="header__menu-item">
                <a href="#" className="header__menu-link">Recipes</a>
              </li>
              <li className="header__menu-item">
                <a href="#" className="header__menu-link">Blog</a>
              </li>
              <li className="header__menu-item">
                <a href="#" className="header__menu-link">Contact</a>
              </li>
              <li className="header__menu-item">
                <a href="#" className="header__menu-link">About us</a>
              </li>
            </ul>
          </nav>

          {/* Соцмережі */}
          <div className="header__socials">
            <a href="#" className="header__social-link">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="header__social-link">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="header__social-link">
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
