import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Button from '../components/Button';
import Input from '../components/Input';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.subject) newErrors.subject = 'Subject is required';
    if (!formData.message) newErrors.message = 'Message is required';

    if (Object.keys(newErrors).length === 0) {
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 5000);
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className="min-h-screen bg-mountain-gray py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h1 className="font-nunito font-extrabold text-4xl sm:text-5xl md:text-6xl text-forest-green mb-4">
            GET IN <span className="text-sunset-orange">TOUCH</span>
          </h1>
          <p className="font-lato text-base sm:text-lg text-earth-brown">
            Have a question? We'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white glossy-card p-6 sm:p-8 order-2 lg:order-1"
          >
            <h2 className="font-nunito font-extrabold text-xl sm:text-2xl text-forest-green mb-4 sm:mb-6">
              SEND US A MESSAGE
            </h2>

            {isSubmitted && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mb-6 p-4 bg-green-100 text-green-800 font-lato text-sm sm:text-base rounded-md"
              >
                Thank you! Your message has been sent successfully.
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <Input
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                error={errors.name}
                placeholder="Your name"
              />
              <Input
                label="Email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                error={errors.email}
                placeholder="your@email.com"
              />
              <Input
                label="Subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                error={errors.subject}
                placeholder="What's this about?"
              />
              <div>
                <label className="block text-sm font-lato font-semibold mb-2 text-forest-green">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="6"
                  className={`
                    w-full px-4 py-3 border-2 border-mountain-gray rounded-md
                    font-lato focus:outline-none focus:border-sunset-orange
                    transition-colors duration-300 bg-white resize-none
                    ${errors.message ? 'border-sunset-orange' : ''}
                  `}
                  placeholder="Your message..."
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-sunset-orange font-lato">
                    {errors.message}
                  </p>
                )}
              </div>
              <Button type="submit" variant="primary" size="lg" className="w-full">
                Send Message
              </Button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6 lg:space-y-8 order-1 lg:order-2"
          >
            <div className="bg-white glossy-card p-6 sm:p-8">
              <h2 className="font-nunito font-extrabold text-xl sm:text-2xl text-forest-green mb-4 sm:mb-6">
                CONTACT INFORMATION
              </h2>
              <div className="space-y-4 sm:space-y-6">
                <div>
                  <h3 className="font-nunito font-extrabold text-base sm:text-lg text-sunset-orange mb-2">
                    Address
                  </h3>
                  <p className="font-lato text-sm sm:text-base text-earth-brown">
                    123 Sports Avenue<br />
                    Athletic City, AC 12345<br />
                    United States
                  </p>
                </div>
                <div>
                  <h3 className="font-nunito font-extrabold text-base sm:text-lg text-sunset-orange mb-2">
                    Phone
                  </h3>
                  <p className="font-lato text-sm sm:text-base text-earth-brown">
                    +1 (555) 123-4567
                  </p>
                </div>
                <div>
                  <h3 className="font-nunito font-extrabold text-base sm:text-lg text-sunset-orange mb-2">
                    Email
                  </h3>
                  <p className="font-lato text-sm sm:text-base text-earth-brown">
                    info@sportsequip.com
                  </p>
                </div>
                <div>
                  <h3 className="font-nunito font-extrabold text-base sm:text-lg text-sunset-orange mb-2">
                    Hours
                  </h3>
                  <p className="font-lato text-sm sm:text-base text-earth-brown">
                    Monday - Friday: 9:00 AM - 6:00 PM<br />
                    Saturday: 10:00 AM - 4:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-sunset-orange text-white p-6 sm:p-8 glossy-card">
              <h3 className="font-nunito font-extrabold text-xl sm:text-2xl mb-4">
                FOLLOW US
              </h3>
              <p className="font-lato mb-4 text-sm sm:text-base">
                Stay connected with us on social media for the latest updates,
                new arrivals, and exclusive offers.
              </p>
              <div className="flex flex-wrap gap-3 sm:gap-4">
                {['Facebook', 'Twitter', 'Instagram'].map((social) => (
                  <motion.a
                    key={social}
                    href="#"
                    className="bg-white text-sunset-orange px-4 py-2 font-nunito font-bold uppercase text-xs sm:text-sm hover:bg-gray-100 transition-colors rounded-md"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {social}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
