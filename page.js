'use client';
import { useRef } from 'react';
import './foodwebsite.css';

const topRestaurants = [
  { id: 1, src: '/chinese-wok.png', title: 'Chinese Wok' },
  { id: 2, src: '/box8.png', title: 'BOX8 - Desi Meals' },
  { id: 3, src: '/bikanervala.png', title: 'Bikanervala' },
  { id: 4, src: '/white-hart-pizza.png', title: 'White Hart Pizza' },
  { id: 5, src: '/chicago-pizza.png', title: 'Chicago Pizza' },
];

const deliveryRestaurants = [
  { id: 1, src: '/chinese-wok.png', title: 'Chinese Wok', desc: 'Chinese, Asian, Tibetan, Desserts', price: '₹210 for two' },
  { id: 2, src: '/box8.png', title: 'BOX8 - Desi Meals', desc: 'North Indian, Biryani, Thali, Home Food', price: '₹250 for two' },
  { id: 3, src: '/bikanervala.png', title: 'Bikanervala', desc: 'Sweets, North Indian, South Indian, Chinese, Chaat', price: '₹190 for two' },
  { id: 4, src: '/white-hart-pizza.png', title: 'White Hart Pizza', desc: 'Pizza, Beverages, Snacks, Burgers', price: '₹200 for two' },
];

export default function FoodWebsite() {
  const carouselRef = useRef(null);

  const scrollCarousel = (dir) => {
    if (carouselRef.current) {
      const scrollAmount = 240;
      carouselRef.current.scrollBy({ left: dir * scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="fw-container">
      {/* Carousel Section */}
      <section className="fw-carousel-section">
        <div className="fw-carousel-title">Top restaurant chains in Noida</div>
        <div className="fw-carousel-container">
          <button className="fw-carousel-arrow" onClick={() => scrollCarousel(-1)}>&lt;</button>
          <div className="fw-carousel-track" ref={carouselRef}>
            {topRestaurants.map((r) => (
              <a key={r.id} href={`/foodwebsite/${r.id}`} className="fw-carousel-card" style={{ textDecoration: 'none', color: 'inherit' }}>
                <img src={r.src} alt={r.title} className="fw-carousel-image" />
                <div className="fw-carousel-card-title">{r.title}</div>
              </a>
            ))}
          </div>
          <button className="fw-carousel-arrow" onClick={() => scrollCarousel(1)}>&gt;</button>
        </div>
      </section>

      {/* Delivery Restaurants Section */}
      <section className="fw-restaurant-section">
        <div className="fw-restaurant-title">Restaurants with online food delivery in Noida</div>
        <div className="fw-restaurant-list">
          {deliveryRestaurants.map((r) => (
            <a key={r.id} href={`/foodwebsite/${r.id}`} className="fw-restaurant-card" style={{ textDecoration: 'none', color: 'inherit' }}>
              <img src={r.src} alt={r.title} className="fw-restaurant-image" />
              <div className="fw-restaurant-card-title">{r.title}</div>
              <div className="fw-restaurant-desc">{r.desc}</div>
              <div className="fw-restaurant-price">{r.price}</div>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
