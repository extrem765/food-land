import React from 'react';
import './Categories.scss';

export default function Categories() {
  const categories = [
    { id: 1, name: 'Breakfast', emoji: '🍙' },
    { id: 2, name: 'Vegan', emoji: '🥬' },
    { id: 3, name: 'Meat', emoji: '🥩' },
    { id: 4, name: 'Dessert', emoji: '🍰' },
    { id: 5, name: 'Lunch', emoji: '🍔' },
    { id: 6, name: 'Chocolate', emoji: '🍫' }
  ];

  return (
    <section className="categories">
      <div className="categories__container">
        <div className="categories__header">
          <h2 className="categories__title">Categories</h2>
          <button className="categories__view-all">
            View All Categories
          </button>
        </div>

        <div className="categories__grid">
          {categories.map((category) => (
            <div key={category.id} className="categories__card">
              <div className="categories__icon">
                <span className="categories__emoji">{category.emoji}</span>
              </div>
              <h3 className="categories__name">{category.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}