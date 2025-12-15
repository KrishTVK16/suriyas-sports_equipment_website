import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Button from '../components/Button';

const About = () => {
  return (
    <div className="min-h-screen bg-mountain-gray">
      {/* Hero Section */}
      <section className="bg-forest-green text-white py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="font-nunito font-extrabold text-4xl sm:text-5xl md:text-6xl mb-4 sm:mb-6">
              ABOUT <span className="text-sunset-orange">SPORTSEQUIP</span>
            </h1>
            <p className="font-lato text-base sm:text-xl text-mountain-gray max-w-3xl mx-auto">
              Empowering athletes worldwide with premium outdoor sports equipment and gear
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-nunito font-extrabold text-3xl sm:text-4xl md:text-5xl text-forest-green mb-4 sm:mb-6">
                OUR <span className="text-sunset-orange">MISSION</span>
              </h2>
              <p className="font-lato text-base sm:text-lg text-earth-brown mb-4 leading-relaxed">
                At SPORTSEQUIP, we believe that every athlete deserves access to
                high-quality equipment that enhances their performance. Founded in
                2020, we've been committed to providing premium sports gear to
                athletes of all levels.
              </p>
              <p className="font-lato text-base sm:text-lg text-earth-brown leading-relaxed">
                Our mission is to fuel your passion for sports by offering
                carefully curated products from trusted brands, ensuring quality,
                durability, and performance in every purchase.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glossy-card overflow-hidden"
            >
              <img
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800"
                alt="Athletes"
                className="w-full h-64 sm:h-96 object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-12 sm:py-20 bg-forest-green text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="font-nunito font-extrabold text-3xl sm:text-4xl md:text-5xl mb-4">
              OUR <span className="text-sunset-orange">VALUES</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                title: 'Quality',
                description:
                  'We source only the finest products from reputable brands, ensuring durability and performance.',
              },
              {
                title: 'Innovation',
                description:
                  'We stay ahead of the curve, offering the latest in sports technology and design.',
              },
              {
                title: 'Community',
                description:
                  'We support athletes at every level, from beginners to professionals, building a stronger sports community.',
              },
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white text-forest-green p-6 sm:p-8 glossy-card"
              >
                <h3 className="font-nunito font-extrabold text-2xl sm:text-3xl text-sunset-orange mb-4">
                  {value.title}
                </h3>
                <p className="font-lato text-earth-brown leading-relaxed text-sm sm:text-base">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-nunito font-extrabold text-3xl sm:text-4xl md:text-5xl text-forest-green mb-4 sm:mb-6">
              READY TO ELEVATE YOUR <span className="text-sunset-orange">GAME</span>?
            </h2>
            <p className="font-lato text-base sm:text-lg text-earth-brown mb-6 sm:mb-8">
              Explore our collection of premium sports equipment and find the
              perfect gear for your next challenge.
            </p>
            <Link to="/shop">
              <Button variant="primary" size="xl">
                Shop Now
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
