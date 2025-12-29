import React, { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import Button from '../components/Button';
import productsData from '../data/products.json';

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  const product = productsData.find((p) => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="min-h-screen bg-mountain-gray flex items-center justify-center py-12 px-4">
        <div className="text-center">
          <h2 className="font-nunito font-extrabold text-3xl sm:text-4xl text-forest-green mb-4">
            Product Not Found
          </h2>
          <Link to="/shop">
            <Button variant="primary">Back to Shop</Button>
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, quantity);
    navigate('/cart');
  };

  const relatedProducts = productsData
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="min-h-screen bg-mountain-gray py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-6 sm:mb-8">
          <div className="flex items-center flex-wrap space-x-2 text-xs sm:text-sm font-lato text-earth-brown">
            <Link to="/" className="hover:text-sunset-orange transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link to="/shop" className="hover:text-sunset-orange transition-colors">
              Shop
            </Link>
            <span>/</span>
            <span className="text-forest-green truncate">{product.name}</span>
          </div>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12 sm:mb-20">
          {/* Product Images */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-4"
          >
            <div className="glossy-card overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 sm:h-80 lg:h-96 object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-2 sm:gap-4">
              {[product.image, product.image, product.image, product.image].map(
                (img, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`glossy-card overflow-hidden ${
                      selectedImage === index ? 'ring-2 ring-sunset-orange' : ''
                    }`}
                  >
                    <img
                      src={img}
                      alt={`${product.name} ${index + 1}`}
                      className="w-full h-16 sm:h-20 object-cover"
                    />
                  </button>
                )
              )}
            </div>
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-4 sm:space-y-6"
          >
            <div>
              <span className="font-nunito font-extrabold text-sunset-orange text-sm sm:text-lg uppercase tracking-wider">
                {product.brand}
              </span>
              <h1 className="font-nunito font-extrabold text-3xl sm:text-4xl md:text-5xl text-forest-green mt-2 mb-4">
                {product.name}
              </h1>
              <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className="flex items-center">
                  <span className="text-sunset-orange text-lg sm:text-xl mr-1">★</span>
                  <span className="font-lato text-base sm:text-lg text-earth-brown font-semibold">{product.rating}</span>
                </div>
                <span className="text-mountain-gray hidden sm:inline">|</span>
                <span className="font-lato text-sm sm:text-base text-earth-brown">
                  Category: {product.category}
                </span>
              </div>
            </div>

            <div className="border-t border-b border-mountain-gray py-4 sm:py-6">
              <div className="flex flex-wrap items-baseline gap-3 sm:gap-4">
                <span className="font-nunito font-extrabold text-3xl sm:text-4xl text-sunset-orange">
                  ${product.price.toFixed(2)}
                </span>
                {product.inStock ? (
                  <span className="font-lato text-green-600 font-semibold text-sm sm:text-base">
                    In Stock
                  </span>
                ) : (
                  <span className="font-lato text-sunset-orange font-semibold text-sm sm:text-base">
                    Out of Stock
                  </span>
                )}
              </div>
            </div>

            <p className="font-lato text-earth-brown leading-relaxed text-sm sm:text-base">
              {product.description}
            </p>

            {product.inStock && (
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                  <label className="font-nunito font-extrabold text-base sm:text-lg text-forest-green">
                    Quantity:
                  </label>
                  <div className="flex items-center border-2 border-mountain-gray rounded-md">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-4 py-2 hover:bg-mountain-gray transition-colors"
                    >
                      -
                    </button>
                    <span className="px-6 py-2 font-lato min-w-[3rem] text-center">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-4 py-2 hover:bg-mountain-gray transition-colors"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Button
                    variant="primary"
                    size="lg"
                    className="w-full sm:flex-1"
                    onClick={handleAddToCart}
                  >
                    Add to Cart
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full sm:w-auto"
                    onClick={() => toggleWishlist(product)}
                  >
                    <div className="flex items-center justify-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={`h-5 w-5 ${isInWishlist(product.id) ? 'text-red-500 fill-current' : 'text-sunset-orange'}`}
                        viewBox="0 0 20 20"
                        fill={isInWishlist(product.id) ? 'currentColor' : 'none'}
                        stroke="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>{isInWishlist(product.id) ? 'In Wishlist' : 'Add to Wishlist'}</span>
                    </div>
                  </Button>
                </div>
              </div>
            )}
          </motion.div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div>
            <h2 className="font-nunito font-extrabold text-3xl sm:text-4xl text-forest-green mb-6 sm:mb-8 text-center sm:text-left">
              RELATED <span className="text-sunset-orange">PRODUCTS</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {relatedProducts.map((relatedProduct) => (
                <motion.div
                  key={relatedProduct.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <Link to={`/product/${relatedProduct.id}`}>
                    <div className="glossy-card group cursor-pointer h-full flex flex-col">
                      <img
                        src={relatedProduct.image}
                        alt={relatedProduct.name}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="p-4 flex flex-col flex-grow">
                        <h3 className="font-nunito font-extrabold text-base sm:text-lg text-forest-green group-hover:text-sunset-orange transition-colors mb-2 line-clamp-2">
                          {relatedProduct.name}
                        </h3>
                        <p className="font-nunito font-extrabold text-sunset-orange mt-auto">
                          ${relatedProduct.price.toFixed(2)}
                        </p>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
