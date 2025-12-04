import React, { useState } from 'react';
import { Clock, Utensils, Heart } from 'lucide-react';
import './Deliciousrecipe.scss';

export default function Deliciousrecipe() {
  const recipes = [
    {
      id: 1,
      title: 'Mixed Tropical Fruit Salad with Superfood Boosts',
      time: '30 Minutes',
      category: 'Healthy',
      image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400&h=300&fit=crop',
      liked: false
    },
    {
      id: 2,
      title: 'Big and Juicy Wagyu Beef Cheeseburger',
      time: '30 Minutes',
      category: 'Western',
      image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop',
      liked: false
    },
    {
      id: 3,
      title: 'Healthy Japanese Fried Rice with Asparagus',
      time: '30 Minutes',
      category: 'Healthy',
      image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=400&h=300&fit=crop',
      liked: false
    },
    {
      id: 4,
      title: 'Cauliflower Walnut Vegetarian Taco Meat',
      time: '30 Minutes',
      category: 'Eastern',
      image: 'https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=400&h=300&fit=crop',
      liked: false
    },
    {
      id: 5,
      title: 'Rainbow Chicken Salad with Almond Honey Mustard Dressing',
      time: '30 Minutes',
      category: 'Healthy',
      image: 'https://images.unsplash.com/photo-1546793665-c74683f339c1?w=400&h=300&fit=crop',
      liked: false
    },
    {
      id: 6,
      title: 'Barbeque Spicy Sandwiches with Chips',
      time: '30 Minutes',
      category: 'Snack',
      image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=400&h=300&fit=crop',
      liked: false
    },
   {
      id: 7,
      title: 'Firecracker Vegan Lettuce Wraps - Spicy!',
      time: '30 Minutes',
      category: 'Seafood',
      image: 'https://images.unsplash.com/photo-1588137378633-dea1336ce1e2?w=400&h=300&fit=crop',
      liked: false
    },
    {
      id: 8,
      title: 'Chicken Ramen Soup with Mushroom',
      time: '30 Minutes',
      category: 'Japanese',
      image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&h=300&fit=crop',
      liked: false
    }
  ];

  return (
    <section className="delicious-recipes">
      <div className="delicious-recipes__container">
        {/* Header */}
        <div className="delicious-recipes__header">
          <div className="delicious-recipes__header-left">
            <h2 className="delicious-recipes__title">
              Try this delicious recipe<br />
              to make your day
            </h2>
          </div>
          <div className="delicious-recipes__header-right">
            <p className="delicious-recipes__description">
              Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor 
              incididunt ut labore et dolore magna aliqut enim ad minim
            </p>
          </div>
        </div>

        {/* Recipes Grid */}
        <div className="delicious-recipes__grid">
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      </div>
    </section>
  );
}

function RecipeCard({ recipe }) {
  const [liked, setLiked] = useState(recipe.liked);

  return (
    <div className="recipe-card-delicious">
      {/* Image */}
      <div className="recipe-card-delicious__image-wrapper">
        <img 
          src={recipe.image}
          alt={recipe.title}
          className="recipe-card-delicious__image"
        />
        
        {/* Like Button */}
        <button
          onClick={() => setLiked(!liked)}
          className={`recipe-card-delicious__like ${liked ? 'recipe-card-delicious__like--active' : ''}`}
        >
          <Heart 
            size={20}
            fill={liked ? '#FF6B6B' : 'white'}
            color={liked ? '#FF6B6B' : '#666'}
          />
        </button>
      </div>

      {/* Content */}
      <div className="recipe-card-delicious__content">
        <h3 className="recipe-card-delicious__title">
          {recipe.title}
        </h3>

        {/* Meta Info */}
        <div className="recipe-card-delicious__meta">
          <div className="recipe-card-delicious__meta-item">
            <Clock size={16} />
            <span>{recipe.time}</span>
          </div>

          <div className="recipe-card-delicious__meta-item">
            <Utensils size={16} />
            <span>{recipe.category}</span>
          </div>
        </div>
      </div>
    </div>
  );
}