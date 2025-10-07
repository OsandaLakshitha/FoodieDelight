import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Star,
  Heart,
  ShoppingBag,
  Flame,
  Search,
  Filter,
  Clock,
  Leaf,
  X
} from 'lucide-react';

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const categories = [
    { name: 'All', icon: '🍽️' },
    { name: 'Main Course', icon: '🍔' },
    { name: 'Italian', icon: '🍝' },
    { name: 'Japanese', icon: '🍣' },
    { name: 'Healthy', icon: '🥗' },
    { name: 'Dessert', icon: '🍰' },
    { name: 'Beverages', icon: '🥤' },
  ];

  const menuItems = [
    {
      id: 1,
      name: "Gourmet Burger",
      description: "Juicy beef patty with premium toppings and special sauce",
      price: 12.99,
      category: "Main Course",
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800",
      rating: 4.8,
      reviews: 245,
      prepTime: "15-20 min",
      calories: 650,
      popular: true,
      spicy: false,
      vegetarian: false,
    },
    {
      id: 2,
      name: "Margherita Pizza",
      description: "Classic Italian pizza with fresh mozzarella and basil",
      price: 15.99,
      category: "Italian",
      image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800",
      rating: 4.9,
      reviews: 389,
      prepTime: "20-25 min",
      calories: 780,
      popular: true,
      spicy: false,
      vegetarian: true,
    },
    {
      id: 3,
      name: "Caesar Salad",
      description: "Crisp romaine lettuce with parmesan and croutons",
      price: 9.99,
      category: "Healthy",
      image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?w=800",
      rating: 4.6,
      reviews: 156,
      prepTime: "10-15 min",
      calories: 320,
      popular: false,
      spicy: false,
      vegetarian: true,
    },
    {
      id: 4,
      name: "Sushi Platter",
      description: "Assorted fresh sushi with wasabi and soy sauce",
      price: 24.99,
      category: "Japanese",
      image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=800",
      rating: 4.9,
      reviews: 412,
      prepTime: "25-30 min",
      calories: 520,
      popular: true,
      spicy: false,
      vegetarian: false,
    },
    {
      id: 5,
      name: "Pasta Carbonara",
      description: "Creamy pasta with bacon, egg, and parmesan cheese",
      price: 13.99,
      category: "Italian",
      image: "https://images.unsplash.com/photo-1612874742237-6526221588e3?w=800",
      rating: 4.7,
      reviews: 298,
      prepTime: "18-22 min",
      calories: 720,
      popular: false,
      spicy: false,
      vegetarian: false,
    },
    {
      id: 6,
      name: "Chocolate Cake",
      description: "Rich chocolate cake with ganache frosting",
      price: 7.99,
      category: "Dessert",
      image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800",
      rating: 4.8,
      reviews: 267,
      prepTime: "5-8 min",
      calories: 450,
      popular: false,
      spicy: false,
      vegetarian: true,
    },
    {
      id: 7,
      name: "Grilled Steak",
      description: "Premium ribeye steak with seasonal vegetables",
      price: 28.99,
      category: "Main Course",
      image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=800",
      rating: 4.9,
      reviews: 523,
      prepTime: "25-30 min",
      calories: 820,
      popular: true,
      spicy: false,
      vegetarian: false,
    },
    {
      id: 8,
      name: "Smoothie Bowl",
      description: "Acai berry smoothie bowl topped with fresh fruits",
      price: 8.99,
      category: "Healthy",
      image: "https://images.unsplash.com/photo-1590301157890-4810ed352733?w=800",
      rating: 4.5,
      reviews: 187,
      prepTime: "8-12 min",
      calories: 280,
      popular: false,
      spicy: false,
      vegetarian: true,
    },
    {
      id: 9,
      name: "Ramen Bowl",
      description: "Authentic Japanese ramen with pork belly and egg",
      price: 14.99,
      category: "Japanese",
      image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800",
      rating: 4.8,
      reviews: 356,
      prepTime: "20-25 min",
      calories: 680,
      popular: true,
      spicy: true,
      vegetarian: false,
    },
    {
      id: 10,
      name: "Tiramisu",
      description: "Classic Italian dessert with espresso and mascarpone",
      price: 8.99,
      category: "Dessert",
      image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=800",
      rating: 4.7,
      reviews: 234,
      prepTime: "5-8 min",
      calories: 380,
      popular: false,
      spicy: false,
      vegetarian: true,
    },
    {
      id: 11,
      name: "Fresh Lemonade",
      description: "Homemade lemonade with fresh mint",
      price: 4.99,
      category: "Beverages",
      image: "https://images.unsplash.com/photo-1523677011781-c91d1bbe2f9c?w=800",
      rating: 4.6,
      reviews: 189,
      prepTime: "3-5 min",
      calories: 120,
      popular: false,
      spicy: false,
      vegetarian: true,
    },
    {
      id: 12,
      name: "Avocado Toast",
      description: "Smashed avocado on sourdough with cherry tomatoes",
      price: 10.99,
      category: "Healthy",
      image: "https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?w=800",
      rating: 4.7,
      reviews: 298,
      prepTime: "10-12 min",
      calories: 340,
      popular: true,
      spicy: false,
      vegetarian: true,
    },
  ];

  const filteredItems = menuItems.filter((item) => {
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const removeFromCart = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-600" />
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }} />
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6">
              Our Menu
            </h1>
            <p className="text-xl sm:text-2xl text-white/90 max-w-3xl mx-auto">
              Explore our delicious selection of carefully crafted dishes
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 sticky top-20 z-40 bg-white/80 backdrop-blur-md shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search Bar */}
            <div className="relative w-full md:w-96">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search dishes..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-full border-2 border-gray-200 focus:border-orange-500 focus:outline-none transition-colors"
              />
            </div>

            {/* Cart Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowCart(!showCart)}
              className="relative bg-gradient-to-r from-orange-500 to-red-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg flex items-center space-x-2"
            >
              <ShoppingBag className="w-5 h-5" />
              <span>Cart</span>
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 w-7 h-7 bg-white text-orange-500 text-sm rounded-full flex items-center justify-center font-bold">
                  {cart.length}
                </span>
              )}
            </motion.button>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto pb-4 gap-4 scrollbar-hide">
            {categories.map((category) => (
              <motion.button
                key={category.name}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category.name)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold whitespace-nowrap transition-all ${
                  selectedCategory === category.name
                    ? 'bg-gradient-to-r from-orange-500 to-red-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-50 shadow'
                }`}
              >
                <span className="text-2xl">{category.icon}</span>
                <span>{category.name}</span>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Items Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            <AnimatePresence>
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ delay: index * 0.05, duration: 0.3 }}
                  layout
                  className="group"
                >
                  <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
                    {/* Image Container */}
                    <div className="relative h-56 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      {/* Badges */}
                      <div className="absolute top-3 left-3 flex flex-col gap-2">
                        {item.popular && (
                          <div className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center space-x-1">
                            <Flame className="w-3 h-3" />
                            <span>Popular</span>
                          </div>
                        )}
                        {item.vegetarian && (
                          <div className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center space-x-1">
                            <Leaf className="w-3 h-3" />
                            <span>Veg</span>
                          </div>
                        )}
                      </div>

                      {/* Quick Add Button */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => addToCart(item)}
                          className="bg-white text-gray-900 px-6 py-2 rounded-full font-semibold flex items-center space-x-2 shadow-lg"
                        >
                          <ShoppingBag className="w-4 h-4" />
                          <span>Add to Cart</span>
                        </motion.button>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-semibold text-orange-500 bg-orange-50 px-3 py-1 rounded-full">
                          {item.category}
                        </span>
                        <div className="flex items-center space-x-1">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm font-semibold text-gray-700">
                            {item.rating}
                          </span>
                          <span className="text-xs text-gray-500">({item.reviews})</span>
                        </div>
                      </div>

                      <h3 className="text-lg font-bold text-gray-900 mb-2">
                        {item.name}
                      </h3>
                      <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                        {item.description}
                      </p>

                      <div className="flex items-center space-x-3 text-xs text-gray-500 mb-4">
                        <div className="flex items-center space-x-1">
                          <Clock className="w-3 h-3" />
                          <span>{item.prepTime}</span>
                        </div>
                        <div className="w-1 h-1 bg-gray-300 rounded-full" />
                        <span>{item.calories} cal</span>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-orange-500">
                          ${item.price.toFixed(2)}
                        </span>
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="w-10 h-10 bg-orange-50 rounded-full flex items-center justify-center text-orange-500 hover:bg-orange-500 hover:text-white transition-colors"
                        >
                          <Heart className="w-5 h-5" />
                        </motion.button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {filteredItems.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">No items found</h3>
              <p className="text-gray-600">Try adjusting your search or filter</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Cart Sidebar */}
      <AnimatePresence>
        {showCart && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowCart(false)}
              className="fixed inset-0 bg-black/50 z-50"
            />

            {/* Cart Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 h-full w-full sm:w-96 bg-white shadow-2xl z-50 flex flex-col"
            >
              {/* Cart Header */}
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold text-gray-900">Your Cart</h2>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setShowCart(false)}
                    className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </motion.button>
                </div>
              </div>

              {/* Cart Items */}
              <div className="flex-1 overflow-y-auto p-6">
                {cart.length === 0 ? (
                  <div className="text-center py-20">
                    <div className="text-6xl mb-4">🛒</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Your cart is empty
                    </h3>
                    <p className="text-gray-600">Add some delicious items!</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {cart.map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="flex items-center space-x-4 bg-gray-50 rounded-xl p-4"
                      >
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-20 h-20 object-cover rounded-lg"
                        />
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900">{item.name}</h4>
                          <p className="text-orange-500 font-bold">${item.price.toFixed(2)}</p>
                        </div>
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => removeFromCart(index)}
                          className="w-8 h-8 bg-red-100 text-red-500 rounded-full flex items-center justify-center hover:bg-red-500 hover:text-white transition-colors"
                        >
                          <X className="w-4 h-4" />
                        </motion.button>
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>

              {/* Cart Footer */}
              {cart.length > 0 && (
                <div className="p-6 border-t border-gray-200 space-y-4">
                  <div className="flex items-center justify-between text-lg">
                    <span className="font-semibold text-gray-900">Total:</span>
                    <span className="font-bold text-2xl text-orange-500">
                      ${totalPrice.toFixed(2)}
                    </span>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-orange-500 to-red-600 text-white py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-shadow"
                  >
                    Proceed to Checkout
                  </motion.button>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Menu;