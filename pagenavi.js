'use client';

const restaurantDetails = {
  1: {
    title: 'Chinese Wok',
    desc: 'Chinese Wok offers a variety of Chinese, Asian, Tibetan, and Desserts. Enjoy their signature noodles and delicious sides!',
    src: '/chinese-wok.png'
  },
  2: {
    title: 'BOX8 - Desi Meals',
    desc: 'BOX8 serves North Indian, Biryani, Thali, and Home Food. Perfect for a wholesome meal with authentic flavors.',
    src: '/box8.png'
  },
  3: {
    title: 'Bikanervala',
    desc: 'Bikanervala is famous for Sweets, North Indian, South Indian, Chinese, and Chaat. A great spot for traditional and modern snacks.',
    src: '/bikanervala.png'
  },
  4: {
    title: 'White Hart Pizza',
    desc: 'White Hart Pizza specializes in Pizza, Beverages, Snacks, and Burgers. Try their cheesy pizzas and refreshing drinks!',
    src: '/white-hart-pizza.png'
  },
  5: {
    title: 'Chicago Pizza',
    desc: 'Chicago Pizza brings you classic and gourmet pizzas with a variety of fresh toppings and sauces.',
    src: '/chicago-pizza.png'
  }
};

export default function RestaurantDetail({ params }) {
  const { id } = params;
  const details = restaurantDetails[id] || { title: 'Restaurant Not Found', desc: 'No description available.', src: '' };

  return (
    <div style={{ padding: '40px 20px', maxWidth: 600, margin: '0 auto', textAlign: 'center' }}>
      {details.src && (
        <img src={details.src} alt={details.title} style={{ width: '220px', height: '150px', objectFit: 'cover', borderRadius: '12px', marginBottom: 24, background: '#f3f4f6' }} />
      )}
      <h1 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: 16 }}>{details.title}</h1>
      <p style={{ fontSize: '1.1rem', color: '#444' }}>{details.desc}</p>
    </div>
  );
}
