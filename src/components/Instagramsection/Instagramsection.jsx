import React from 'react';
import { Heart, MessageCircle, Send, Bookmark, MoreHorizontal, Instagram } from 'lucide-react';
import './InstagramSection.scss';

export default function InstagramSection() {
  const posts = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=400&fit=crop',
      likes: '14,245',
      date: 'September 19',
      caption: 'Foodieland. Yup, we are a big food and drink lover! We must taste it all!'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=400&fit=crop',
      likes: '10,468',
      date: 'September 19',
      caption: 'Foodieland. Today, we are making a sweet chocolate pancake mix for our viewers! Do try!'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=400&fit=crop',
      likes: '12,863',
      date: 'September 19',
      caption: 'Foodieland. How are you doing? We just want to check if you are okay! Want some cooking?'
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=400&fit=crop',
      likes: '9,242',
      date: 'September 19',
      caption: 'Foodieland. Hope you all doing good! We just did it! Thanks for support! It\'s available for you!'
    }
  ];

  return (
    <section className="instagram-section">
      <div className="instagram-section__container">
        {/* Header */}
        <div className="instagram-section__header">
          <h2 className="instagram-section__title">
            Check out @foodieland on Instagram
          </h2>
          <p className="instagram-section__description">
            Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim
          </p>
        </div>

        {/* Instagram Posts Grid */}
        <div className="instagram-section__grid">
          {posts.map((post) => (
            <InstagramPost key={post.id} post={post} />
          ))}
        </div>

        {/* Visit Instagram Button */}
        <div className="instagram-section__button-wrapper">
          <button className="instagram-section__button">
            <span>Visit Our Instagram</span>
            <Instagram size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}

function InstagramPost({ post }) {
  return (
    <div className="instagram-post">
      {/* Post Header */}
      <div className="instagram-post__header">
        <div className="instagram-post__user">
          <div className="instagram-post__avatar">
            <img 
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop" 
              alt="Foodieland"
            />
          </div>
          <div className="instagram-post__user-info">
            <span className="instagram-post__username">Foodieland.</span>
            <span className="instagram-post__verified">✓</span>
          </div>
        </div>
        <button className="instagram-post__more">
          <MoreHorizontal size={20} />
        </button>
      </div>

      {/* Post Image */}
      <div className="instagram-post__image">
        <img src={post.image} alt="Food post" />
      </div>

      {/* Post Actions */}
      <div className="instagram-post__actions">
        <div className="instagram-post__actions-left">
          <button className="instagram-post__action">
            <Heart size={22} />
          </button>
          <button className="instagram-post__action">
            <MessageCircle size={22} />
          </button>
          <button className="instagram-post__action">
            <Send size={22} />
          </button>
        </div>
        <button className="instagram-post__action">
          <Bookmark size={22} />
        </button>
      </div>

      {/* Post Info */}
      <div className="instagram-post__info">
        <div className="instagram-post__likes">
          Liked by <strong>craig_love</strong> and <strong>{post.likes}</strong> others
        </div>
        <div className="instagram-post__caption">
          <strong>Foodieland.</strong> {post.caption}
        </div>
        <div className="instagram-post__date">
          {post.date}
        </div>
      </div>
    </div>
  );
}