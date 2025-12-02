import React from 'react';
import { Facebook, Twitter, Instagram } from 'lucide-react';

export default function Header() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-8 py-6">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold italic">
            Foodieland
          </div>

          <nav className="flex items-center space-x-12">
            <a href="#" className="text-gray-800 hover:text-gray-600 font-medium">
              Home
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800 font-medium">
              Recipes
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800 font-medium">
              Blog
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800 font-medium">
              Contact
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800 font-medium">
              About us
            </a>
          </nav>

          <div className="flex items-center space-x-6">
            <a href="#" className="text-gray-800 hover:text-gray-600">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-800 hover:text-gray-600">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-800 hover:text-gray-600">
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}