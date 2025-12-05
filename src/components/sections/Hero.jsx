import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-coverflow';

// import './Hero.scss'
import HeroCard from '@/components/HeroCard';

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <Swiper
        modules={[EffectCoverflow]}
        spaceBetween={40}
        slidesPerView={'auto'}
        centeredSlides={true}
        initialSlide={1}
        effect="coverflow"
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2,
        }}
        className="hero__slider"
      >
        <SwiperSlide className="hero__slider-item">
          <HeroCard
            category={{
              imgSrc: '/src/assets/images/scroll.png',
              label: 'Hot Recipes',
            }}
            title="Spicy delicious chicken wings"
            TitleTag="h1"
            description="Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim"
            tags={[
              { iconName: 'timer', label: '30 Minutes' },
              { iconName: 'fork-knife', label: 'Chicken' },
            ]}
            author={{
              imgSrc: '/src/assets/images/man.jpg',
              name: 'John Smith',
              date: {
                dateTime: '2022-03-15',
                label: '15 March 2022',
              },
            }}
            imgSrc="/src/assets/images/chicken.jpg"
          />
        </SwiperSlide>

        <SwiperSlide className="hero__slider-item">
          <HeroCard
            category={{
              imgSrc: '/src/assets/images/scroll.png',
              label: 'Hot Recipes',
            }}
            title="Spicy delicious chicken wings"
            TitleTag="h1"
            description="Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim"
            tags={[
              { iconName: 'timer', label: '30 Minutes' },
              { iconName: 'fork-knife', label: 'Chicken' },
            ]}
            author={{
              imgSrc: '/src/assets/images/man.jpg',
              name: 'John Smith',
              date: {
                dateTime: '2022-03-15',
                label: '15 March 2022',
              },
            }}
            imgSrc="/src/assets/images/chicken.jpg"
          />
        </SwiperSlide>

        <SwiperSlide className="hero__slider-item">
          <HeroCard
            category={{
              imgSrc: '/src/assets/images/scroll.png',
              label: 'Hot Recipes',
            }}
            title="Spicy delicious chicken wings"
            TitleTag="h1"
            description="Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim"
            tags={[
              { iconName: 'timer', label: '30 Minutes' },
              { iconName: 'fork-knife', label: 'Chicken' },
            ]}
            author={{
              imgSrc: '/src/assets/images/man.jpg',
              name: 'John Smith',
              date: {
                dateTime: '2022-03-15',
                label: '15 March 2022',
              },
            }}
            imgSrc="/src/assets/images/chicken.jpg"
          />
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
