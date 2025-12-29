import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import HeroBanner from '../components/HeroBanner';
import ProductCard from '../components/ProductCard';
import Button from '../components/Button';
import productsData from '../data/products.json';

const Home = () => {
  const featuredProducts = productsData.slice(0, 4);
  const [imageErrors, setImageErrors] = useState({});

  const handleImageError = (categoryName) => {
    setImageErrors((prev) => ({ ...prev, [categoryName]: true }));
  };

  const getCategoryImage = (category) => {
    if (imageErrors[category.name]) {
      // Fallback images
      const fallbacks = {
        'Balls': 'https://images.unsplash.com/photo-1575361204480-aadea25e6e68?w=500&h=500&fit=crop&auto=format',
        'Shoes': 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=500&fit=crop&auto=format',
        'Apparel': 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=500&h=500&fit=crop&auto=format',
        'Equipment': 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=500&fit=crop&auto=format',
      };
      return fallbacks[category.name] || category.image;
    }
    return category.image;
  };

  return (
    <div className="min-h-screen">
      <HeroBanner />

      {/* Featured Products Section */}
      <section className="py-12 sm:py-20 bg-mountain-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="font-nunito font-extrabold text-4xl sm:text-5xl md:text-6xl text-forest-green mb-4">
              FEATURED <span className="text-sunset-orange">GEAR</span>
            </h2>
            <p className="font-lato text-base sm:text-lg text-earth-brown max-w-2xl mx-auto px-4">
              Discover our handpicked selection of premium outdoor sports equipment
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/shop">
              <Button variant="primary" size="lg">
                View All Products
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-12 sm:py-20 bg-forest-green text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="font-nunito font-extrabold text-4xl sm:text-5xl md:text-6xl mb-4">
              SHOP BY <span className="text-sunset-orange">CATEGORY</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              { name: 'Shoes', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=500&fit=crop&auto=format', link: '/shop?category=shoes' },
              { name: 'Apparel', image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=500&h=500&fit=crop&auto=format', link: '/shop?category=apparel' },
              { name: 'Balls', image: 'https://images.unsplash.com/photo-1575361204480-aadea25e6e68?w=500&h=500&fit=crop&auto=format', link: '/shop?category=balls' },
              { name: 'Equipment', image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=500&fit=crop&auto=format', link: '/shop?category=equipment' },
            ].map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="relative overflow-hidden glossy-card cursor-pointer group"
              >
                <Link to={category.link}>
                  <img
                    src={getCategoryImage(category)}
                    alt={category.name}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                    onError={() => handleImageError(category.name)}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-green to-transparent opacity-80" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                    <h3 className="font-nunito font-extrabold text-2xl sm:text-3xl text-white mb-2">
                      {category.name}
                    </h3>
                    <span className="font-lato text-sunset-orange group-hover:underline font-semibold text-sm sm:text-base">
                      Shop Now →
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-20 bg-sunset-orange text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-nunito font-extrabold text-4xl sm:text-5xl md:text-6xl mb-4 sm:mb-6">
              READY FOR ADVENTURE?
            </h2>
            <p className="font-lato text-base sm:text-xl mb-6 sm:mb-8">
              Join thousands of outdoor enthusiasts who trust SPORTSEQUIP for their gear needs
            </p>
            <Link to="/shop">
              <Button variant="secondary" size="xl">
                Start Shopping
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;

