import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Button from '../components/Button';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-mountain-gray flex items-center justify-center py-12 px-4">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
            className="mb-6 sm:mb-8"
          >
            <h1 className="font-nunito font-extrabold text-7xl sm:text-9xl md:text-[12rem] text-sunset-orange">
              404
            </h1>
          </motion.div>

          <h2 className="font-nunito font-extrabold text-3xl sm:text-4xl md:text-5xl text-forest-green mb-4">
            PAGE NOT <span className="text-sunset-orange">FOUND</span>
          </h2>
          <p className="font-lato text-base sm:text-lg text-earth-brown mb-6 sm:mb-8">
            Oops! The page you're looking for doesn't exist. It might have been
            moved or deleted.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/">
              <Button variant="primary" size="lg">
                Go Home
              </Button>
            </Link>
            <Link to="/shop">
              <Button variant="outline" size="lg">
                Browse Shop
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
