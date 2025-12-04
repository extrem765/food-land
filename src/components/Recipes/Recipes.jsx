import React from 'react';
import { Clock, Utensils, Heart } from 'lucide-react';
import './Recipes.scss';

export default function Recipes() {
  const recipes = [
    {
      id: 1,
      title: 'Big and Juicy Wagyu Beef Cheeseburger',
      time: '30 Minutes',
      category: 'Snack',
      image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop',
      liked: false
    },
    {
      id: 2,
      title: 'Fresh Lime Roasted Salmon with Ginger Sauce',
      time: '30 Minutes',
      category: 'Fish',
      image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=400&h=300&fit=crop',
      liked: false
    },
    {
      id: 3,
      title: 'Strawberry Oatmeal Pancake with Honey Syrup',
      time: '30 Minutes',
      category: 'Breakfast',
      image: 'https://images.unsplash.com/photo-1528207776546-365bb710ee93?w=400&h=300&fit=crop',
      liked: false
    },
    {
      id: 4,
      title: 'Fresh and Healthy Mixed Mayonnaise Salad',
      time: '30 Minutes',
      category: 'Healthy',
      image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop',
      liked: false
    },
    {
      id: 5,
      title: 'Chicken Meatballs with Cream Cheese',
      time: '30 Minutes',
      category: 'Meat',
      image: 'https://images.unsplash.com/photo-1529042410759-befb1204b468?w=400&h=300&fit=crop',
      liked: false
    },
    {
      id: 6,
      title: 'Fruity Pancake with Orange & Blueberry',
      time: '30 Minutes',
      category: 'Sweet',
      image: 'https://images.unsplash.com/photo-1506084868230-bb9d95c24759?w=400&h=300&fit=crop',
      liked: false
    },
    {
      id: 7,
      title: 'The Best Easy One Pot Chicken',
      time: '30 Minutes',
      category: 'Snack',
      image: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=400&h=300&fit=crop',
      liked: false
    },
    {
      id: 8,
      title: 'The Creamiest Creamy Chicken and Bacon Pasta',
      time: '30 Minutes',
      category: 'Noodles',
      image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop',
      liked: false
    },
    {
      id: 9,
      title: 'Classic Homemade Pizza Margherita',
      time: '25 Minutes',
      category: 'Italian',
      image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&h=300&fit=crop',
      liked: false
    }
  ];

  return (
    <section className="recipes">
      <div className="recipes__container">
        {/* Header */}
        <div className="recipes__header">
          <h2 className="recipes__title">Simple and tasty recipes</h2>
          <p className="recipes__description">
            Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim
          </p>
        </div>

        {/* Recipes Grid */}
        <div className="recipes__grid">
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      </div>
    </section>
  );
}

function RecipeCard({ recipe }) {
  const [liked, setLiked] = React.useState(recipe.liked);

  return (
    <div className="recipe-card">
      {/* Image */}
      <div className="recipe-card__image-wrapper">
        <img 
          src={recipe.image}
          alt={recipe.title}
          className="recipe-card__image"
        />
        
        {/* Like Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            setLiked(!liked);
          }}
          className={`recipe-card__like ${liked ? 'recipe-card__like--active' : ''}`}
        >
          <Heart 
            size={20}
            fill={liked ? '#FF6B6B' : 'none'}
            color={liked ? '#FF6B6B' : '#666'}
          />
        </button>
      </div>

      {/* Content */}
      <div className="recipe-card__content">
        <h3 className="recipe-card__title">
          {recipe.title}
        </h3>

        {/* Meta Info */}
        <div className="recipe-card__meta">
          <div className="recipe-card__meta-item">
            <Clock size={16} color="#666" />
            <span>{recipe.time}</span>
          </div>

          <div className="recipe-card__meta-item">
            <Utensils size={16} color="#666" />
            <span>{recipe.category}</span>
          </div>
        </div>
      </div>
    </div>
  );
}