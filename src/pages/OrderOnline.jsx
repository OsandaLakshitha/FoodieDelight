import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ShoppingCart,
  X,
  Plus,
  Minus,
  Truck,
  Store,
  Clock,
  Star,
  Search,
  ChevronRight,
  MapPin,
  CreditCard,
  Tag,
  Flame,
  Leaf,
  AlertCircle,
  Check,
} from 'lucide-react';

const OrderOnline = () => {
  const [orderType, setOrderType] = useState('delivery'); // 'delivery' or 'pickup'
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [showCheckout, setShowCheckout] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [promoCode, setPromoCode] = useState('');
  const [discount, setDiscount] = useState(0);

  const categories = [
    { name: 'All', icon: '🍽️', count: 24 },
    { name: 'Burgers', icon: '🍔', count: 8 },
    { name: 'Pizza', icon: '🍕', count: 6 },
    { name: 'Sushi', icon: '🍣', count: 5 },
    { name: 'Salads', icon: '🥗', count: 4 },
    { name: 'Desserts', icon: '🍰', count: 6 },
  ];

  const menuItems = [
    {
      id: 1,
      name: "Classic Beef Burger",
      description: "Juicy beef patty with lettuce, tomato, onion, and our special sauce",
      price: 12.99,
      category: "Burgers",
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800",
      rating: 4.8,
      reviews: 245,
      prepTime: "15-20 min",
      popular: true,
      vegetarian: false,
      spicy: false,
      customizations: {
        sizes: ['Regular', 'Large'],
        extras: ['Extra Cheese', 'Bacon', 'Avocado', 'Fried Egg'],
      },
    },
    {
      id: 2,
      name: "Margherita Pizza",
      description: "Classic Italian pizza with fresh mozzarella, basil, and tomato sauce",
      price: 15.99,
      category: "Pizza",
      image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800",
      rating: 4.9,
      reviews: 389,
      prepTime: "20-25 min",
      popular: true,
      vegetarian: true,
      spicy: false,
      customizations: {
        sizes: ['Small', 'Medium', 'Large', 'X-Large'],
        extras: ['Extra Cheese', 'Mushrooms', 'Olives', 'Pepperoni'],
      },
    },
    {
      id: 3,
      name: "Caesar Salad",
      description: "Crisp romaine lettuce with parmesan cheese, croutons, and Caesar dressing",
      price: 9.99,
      category: "Salads",
      image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?w=800",
      rating: 4.6,
      reviews: 156,
      prepTime: "10-15 min",
      popular: false,
      vegetarian: true,
      spicy: false,
      customizations: {
        sizes: ['Regular', 'Large'],
        extras: ['Grilled Chicken', 'Bacon', 'Extra Parmesan', 'Avocado'],
      },
    },
    {
      id: 4,
      name: "Sushi Combo Platter",
      description: "Assorted fresh sushi rolls with wasabi, ginger, and soy sauce",
      price: 24.99,
      category: "Sushi",
      image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=800",
      rating: 4.9,
      reviews: 412,
      prepTime: "25-30 min",
      popular: true,
      vegetarian: false,
      spicy: false,
      customizations: {
        sizes: ['Small (12 pcs)', 'Medium (18 pcs)', 'Large (24 pcs)'],
        extras: ['Extra Wasabi', 'Extra Ginger', 'Spicy Mayo', 'Eel Sauce'],
      },
    },
    {
      id: 5,
      name: "BBQ Chicken Pizza",
      description: "BBQ sauce base with grilled chicken, red onions, and cilantro",
      price: 17.99,
      category: "Pizza",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800",
      rating: 4.7,
      reviews: 298,
      prepTime: "20-25 min",
      popular: false,
      vegetarian: false,
      spicy: false,
      customizations: {
        sizes: ['Small', 'Medium', 'Large', 'X-Large'],
        extras: ['Extra Chicken', 'Bacon', 'Jalapeños', 'Extra Cheese'],
      },
    },
    {
      id: 6,
      name: "Chocolate Lava Cake",
      description: "Warm chocolate cake with molten center, served with vanilla ice cream",
      price: 7.99,
      category: "Desserts",
      image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800",
      rating: 4.8,
      reviews: 267,
      prepTime: "8-10 min",
      popular: true,
      vegetarian: true,
      spicy: false,
      customizations: {
        sizes: ['Regular'],
        extras: ['Extra Ice Cream', 'Whipped Cream', 'Chocolate Sauce', 'Berries'],
      },
    },
    {
      id: 7,
      name: "Spicy Chicken Burger",
      description: "Crispy fried chicken with spicy mayo, pickles, and coleslaw",
      price: 13.99,
      category: "Burgers",
      image: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=800",
      rating: 4.7,
      reviews: 203,
      prepTime: "15-20 min",
      popular: false,
      vegetarian: false,
      spicy: true,
      customizations: {
        sizes: ['Regular', 'Large'],
        extras: ['Extra Spicy Mayo', 'Jalapeños', 'Cheese', 'Bacon'],
      },
    },
    {
      id: 8,
      name: "California Roll",
      description: "Fresh crab, avocado, and cucumber wrapped in rice and seaweed",
      price: 12.99,
      category: "Sushi",
      image: "https://images.unsplash.com/photo-1617196034183-421b4917c92d?w=800",
      rating: 4.8,
      reviews: 178,
      prepTime: "15-20 min",
      popular: true,
      vegetarian: false,
      spicy: false,
      customizations: {
        sizes: ['8 pieces', '16 pieces'],
        extras: ['Spicy Mayo', 'Eel Sauce', 'Sesame Seeds', 'Tobiko'],
      },
    },
  ];

  // Filter items
  const filteredItems = menuItems.filter((item) => {
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Add to cart with customization
  const addToCart = (item, customization = {}) => {
    const cartItem = {
      ...item,
      cartId: Date.now(),
      quantity: 1,
      selectedSize: customization.size || item.customizations.sizes[0],
      selectedExtras: customization.extras || [],
      specialInstructions: customization.instructions || '',
    };
    setCart([...cart, cartItem]);
    setSelectedItem(null);
  };

  // Update quantity
  const updateQuantity = (cartId, change) => {
    setCart(
      cart.map((item) =>
        item.cartId === cartId
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      )
    );
  };

  // Remove from cart
  const removeFromCart = (cartId) => {
    setCart(cart.filter((item) => item.cartId !== cartId));
  };

  // Calculate totals
  const subtotal = cart.reduce((sum, item) => {
    const extrasPrice = item.selectedExtras.length * 1.5;
    return sum + (item.price + extrasPrice) * item.quantity;
  }, 0);

  const tax = subtotal * 0.08;
  const deliveryFee = orderType === 'delivery' ? (subtotal > 30 ? 0 : 4.99) : 0;
  const total = subtotal + tax + deliveryFee - discount;

  // Apply promo code
  const applyPromo = () => {
    if (promoCode.toUpperCase() === 'FOODIE10') {
      setDiscount(subtotal * 0.1);
    } else if (promoCode.toUpperCase() === 'WELCOME20') {
      setDiscount(subtotal * 0.2);
    } else {
      alert('Invalid promo code');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-600" />
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1920')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6">
              Order Online
            </h1>
            <p className="text-xl sm:text-2xl text-white/90 max-w-3xl mx-auto mb-8">
              Your favorite meals, delivered fresh to your doorstep
            </p>

            {/* Delivery/Pickup Toggle */}
            <div className="inline-flex items-center bg-white/20 backdrop-blur-md rounded-full p-2">
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => setOrderType('delivery')}
                className={`flex items-center space-x-2 px-8 py-3 rounded-full font-semibold transition-all ${
                  orderType === 'delivery'
                    ? 'bg-white text-orange-600 shadow-lg'
                    : 'text-white hover:bg-white/10'
                }`}
              >
                <Truck className="w-5 h-5" />
                <span>Delivery</span>
              </motion.button>
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => setOrderType('pickup')}
                className={`flex items-center space-x-2 px-8 py-3 rounded-full font-semibold transition-all ${
                  orderType === 'pickup'
                    ? 'bg-white text-orange-600 shadow-lg'
                    : 'text-white hover:bg-white/10'
                }`}
              >
                <Store className="w-5 h-5" />
                <span>Pickup</span>
              </motion.button>
            </div>

            {/* Info Banner */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-8 inline-flex items-center space-x-6 bg-white/20 backdrop-blur-md px-8 py-4 rounded-full"
            >
              <div className="flex items-center space-x-2 text-white">
                <Clock className="w-5 h-5" />
                <span className="font-semibold">30 min delivery</span>
              </div>
              <div className="w-1 h-6 bg-white/30" />
              <div className="flex items-center space-x-2 text-white">
                <Tag className="w-5 h-5" />
                <span className="font-semibold">Free delivery over $30</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Search Bar */}
      <section className="sticky top-20 z-40 bg-white/80 backdrop-blur-md shadow-md py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search for dishes..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-full border-2 border-gray-200 focus:border-orange-500 focus:outline-none transition-colors"
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowCart(true)}
              className="relative bg-gradient-to-r from-orange-500 to-red-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg flex items-center space-x-2"
            >
              <ShoppingCart className="w-5 h-5" />
              <span>View Cart</span>
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
      <section className="py-8 bg-white">
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
                    : 'bg-white text-gray-700 hover:bg-gray-50 shadow border border-gray-200'
                }`}
              >
                <span className="text-2xl">{category.icon}</span>
                <span>{category.name}</span>
                <span
                  className={`text-xs px-2 py-1 rounded-full ${
                    selectedCategory === category.name
                      ? 'bg-white/20'
                      : 'bg-gray-100'
                  }`}
                >
                  {category.count}
                </span>
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
                  transition={{ delay: index * 0.05 }}
                  layout
                  className="group"
                >
                  <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
                    {/* Image */}
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
                      {item.spicy && (
                        <div className="absolute top-3 right-3 bg-red-500 text-white w-8 h-8 rounded-full flex items-center justify-center">
                          🌶️
                        </div>
                      )}
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
                        </div>
                      </div>

                      <h3 className="text-lg font-bold text-gray-900 mb-2">
                        {item.name}
                      </h3>
                      <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                        {item.description}
                      </p>

                      <div className="flex items-center space-x-2 text-xs text-gray-500 mb-4">
                        <Clock className="w-3 h-3" />
                        <span>{item.prepTime}</span>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-orange-500">
                          ${item.price.toFixed(2)}
                        </span>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => setSelectedItem(item)}
                          className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-4 py-2 rounded-full font-semibold text-sm shadow-lg hover:shadow-xl transition-shadow flex items-center space-x-1"
                        >
                          <Plus className="w-4 h-4" />
                          <span>Add</span>
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
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                No items found
              </h3>
              <p className="text-gray-600">Try adjusting your search or filter</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Customization Modal */}
      <AnimatePresence>
        {selectedItem && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedItem(null)}
              className="fixed inset-0 bg-black/50 z-50"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="fixed inset-4 md:inset-auto md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:w-full md:max-w-2xl bg-white rounded-2xl shadow-2xl z-50 overflow-hidden max-h-[90vh] overflow-y-auto"
            >
              <CustomizationModal
                item={selectedItem}
                onClose={() => setSelectedItem(null)}
                onAdd={addToCart}
              />
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Cart Sidebar */}
      <AnimatePresence>
        {showCart && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowCart(false)}
              className="fixed inset-0 bg-black/50 z-50"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 h-full w-full sm:w-[480px] bg-white shadow-2xl z-50 flex flex-col"
            >
              {/* Cart Header */}
              <div className="p-6 border-b border-gray-200 bg-gradient-to-r from-orange-500 to-red-600 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-2xl font-bold">Your Cart</h2>
                    <p className="text-white/90 text-sm">{cart.length} items</p>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setShowCart(false)}
                    className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
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
                    <p className="text-gray-600 mb-6">
                      Add some delicious items to get started!
                    </p>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setShowCart(false)}
                      className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-6 py-3 rounded-full font-semibold"
                    >
                      Browse Menu
                    </motion.button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {cart.map((item) => (
                      <CartItem
                        key={item.cartId}
                        item={item}
                        onUpdateQuantity={updateQuantity}
                        onRemove={removeFromCart}
                      />
                    ))}
                  </div>
                )}
              </div>

              {/* Cart Footer */}
              {cart.length > 0 && (
                <div className="border-t border-gray-200 p-6 bg-gray-50 space-y-4">
                  {/* Promo Code */}
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Promo code"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      className="flex-1 px-4 py-2 rounded-lg border-2 border-gray-200 focus:border-orange-500 focus:outline-none"
                    />
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={applyPromo}
                      className="bg-gray-900 text-white px-6 py-2 rounded-lg font-semibold"
                    >
                      Apply
                    </motion.button>
                  </div>

                  {/* Summary */}
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between text-gray-600">
                      <span>Subtotal</span>
                      <span>${subtotal.toFixed(2)}</span>
                    </div>
                    {discount > 0 && (
                      <div className="flex justify-between text-green-600 font-semibold">
                        <span>Discount</span>
                        <span>-${discount.toFixed(2)}</span>
                      </div>
                    )}
                    <div className="flex justify-between text-gray-600">
                      <span>Tax (8%)</span>
                      <span>${tax.toFixed(2)}</span>
                    </div>
                    {orderType === 'delivery' && (
                      <div className="flex justify-between text-gray-600">
                        <span>Delivery Fee</span>
                        <span>
                          {deliveryFee === 0 ? (
                            <span className="text-green-600 font-semibold">FREE</span>
                          ) : (
                            `$${deliveryFee.toFixed(2)}`
                          )}
                        </span>
                      </div>
                    )}
                    <div className="border-t border-gray-300 pt-2 flex justify-between text-lg font-bold">
                      <span>Total</span>
                      <span className="text-orange-500">${total.toFixed(2)}</span>
                    </div>
                  </div>

                  {/* Checkout Button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      setShowCart(false);
                      setShowCheckout(true);
                    }}
                    className="w-full bg-gradient-to-r from-orange-500 to-red-600 text-white py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-shadow flex items-center justify-center space-x-2"
                  >
                    <span>Proceed to Checkout</span>
                    <ChevronRight className="w-5 h-5" />
                  </motion.button>

                  {subtotal < 30 && orderType === 'delivery' && (
                    <div className="flex items-start space-x-2 text-xs text-orange-600 bg-orange-50 p-3 rounded-lg">
                      <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                      <span>
                        Add ${(30 - subtotal).toFixed(2)} more for free delivery!
                      </span>
                    </div>
                  )}
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Checkout Modal */}
      <AnimatePresence>
        {showCheckout && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowCheckout(false)}
              className="fixed inset-0 bg-black/50 z-50"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="fixed inset-4 md:inset-auto md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:w-full md:max-w-3xl bg-white rounded-2xl shadow-2xl z-50 overflow-hidden max-h-[90vh] overflow-y-auto"
            >
              <CheckoutModal
                orderType={orderType}
                total={total}
                cart={cart}
                onClose={() => setShowCheckout(false)}
              />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

// Customization Modal Component
const CustomizationModal = ({ item, onClose, onAdd }) => {
  const [selectedSize, setSelectedSize] = useState(item.customizations.sizes[0]);
  const [selectedExtras, setSelectedExtras] = useState([]);
  const [instructions, setInstructions] = useState('');

  const toggleExtra = (extra) => {
    if (selectedExtras.includes(extra)) {
      setSelectedExtras(selectedExtras.filter((e) => e !== extra));
    } else {
      setSelectedExtras([...selectedExtras, extra]);
    }
  };

  const totalPrice = item.price + selectedExtras.length * 1.5;

  return (
    <div>
      {/* Header */}
      <div className="relative h-64">
        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg"
        >
          <X className="w-5 h-5" />
        </motion.button>
        <div className="absolute bottom-6 left-6 right-6 text-white">
          <h2 className="text-3xl font-bold mb-2">{item.name}</h2>
          <p className="text-white/90">{item.description}</p>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-6">
        {/* Size Selection */}
        <div>
          <h3 className="text-lg font-bold text-gray-900 mb-3">
            Choose Size <span className="text-red-500">*</span>
          </h3>
          <div className="grid grid-cols-2 gap-3">
            {item.customizations.sizes.map((size) => (
              <motion.button
                key={size}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedSize(size)}
                className={`p-4 rounded-xl border-2 font-semibold transition-all ${
                  selectedSize === size
                    ? 'border-orange-500 bg-orange-50 text-orange-600'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                {size}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Extras */}
        <div>
          <h3 className="text-lg font-bold text-gray-900 mb-3">
            Add Extras <span className="text-gray-400 text-sm font-normal">(+$1.50 each)</span>
          </h3>
          <div className="space-y-2">
            {item.customizations.extras.map((extra) => (
              <motion.button
                key={extra}
                whileTap={{ scale: 0.98 }}
                onClick={() => toggleExtra(extra)}
                className={`w-full p-4 rounded-xl border-2 font-semibold transition-all flex items-center justify-between ${
                  selectedExtras.includes(extra)
                    ? 'border-orange-500 bg-orange-50 text-orange-600'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <span>{extra}</span>
                {selectedExtras.includes(extra) && <Check className="w-5 h-5" />}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Special Instructions */}
        <div>
          <h3 className="text-lg font-bold text-gray-900 mb-3">
            Special Instructions <span className="text-gray-400 text-sm font-normal">(Optional)</span>
          </h3>
          <textarea
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
            placeholder="e.g., No onions, extra sauce..."
            className="w-full p-4 rounded-xl border-2 border-gray-200 focus:border-orange-500 focus:outline-none resize-none"
            rows="3"
          />
        </div>

        {/* Add to Cart Button */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() =>
            onAdd(item, {
              size: selectedSize,
              extras: selectedExtras,
              instructions,
            })
          }
          className="w-full bg-gradient-to-r from-orange-500 to-red-600 text-white py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-shadow flex items-center justify-center space-x-2"
        >
          <span>Add to Cart</span>
          <span className="text-xl">${totalPrice.toFixed(2)}</span>
        </motion.button>
      </div>
    </div>
  );
};

// Cart Item Component
const CartItem = ({ item, onUpdateQuantity, onRemove }) => {
  const itemTotal = (item.price + item.selectedExtras.length * 1.5) * item.quantity;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="bg-white rounded-xl p-4 shadow-md border border-gray-100"
    >
      <div className="flex gap-4">
        <img
          src={item.image}
          alt={item.name}
          className="w-20 h-20 object-cover rounded-lg"
        />
        <div className="flex-1">
          <div className="flex justify-between items-start mb-2">
            <div>
              <h4 className="font-bold text-gray-900">{item.name}</h4>
              <p className="text-sm text-gray-500">{item.selectedSize}</p>
            </div>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => onRemove(item.cartId)}
              className="w-7 h-7 bg-red-100 text-red-500 rounded-full flex items-center justify-center hover:bg-red-500 hover:text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </motion.button>
          </div>

          {item.selectedExtras.length > 0 && (
            <div className="mb-2">
              <p className="text-xs text-gray-500">
                + {item.selectedExtras.join(', ')}
              </p>
            </div>
          )}

          {item.specialInstructions && (
            <p className="text-xs text-gray-500 italic mb-2">
              Note: {item.specialInstructions}
            </p>
          )}

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => onUpdateQuantity(item.cartId, -1)}
                className="w-7 h-7 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
              >
                <Minus className="w-4 h-4" />
              </motion.button>
              <span className="font-semibold w-8 text-center">{item.quantity}</span>
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => onUpdateQuantity(item.cartId, 1)}
                className="w-7 h-7 bg-orange-500 text-white rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors"
              >
                <Plus className="w-4 h-4" />
              </motion.button>
            </div>
            <span className="font-bold text-orange-500">
              ${itemTotal.toFixed(2)}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// Checkout Modal Component
const CheckoutModal = ({ orderType, total, cart, onClose }) => {
  const [step, setStep] = useState(1); // 1: Details, 2: Payment, 3: Confirmation

  const handlePlaceOrder = () => {
    setStep(3);
    setTimeout(() => {
      onClose();
      // Reset or redirect
    }, 3000);
  };

  return (
    <div>
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-500 to-red-600 text-white p-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">Checkout</h2>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={onClose}
            className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center"
          >
            <X className="w-5 h-5" />
          </motion.button>
        </div>
        {/* Steps */}
        <div className="flex items-center justify-center space-x-4 mt-6">
          {[1, 2, 3].map((s) => (
            <div key={s} className="flex items-center">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                  step >= s ? 'bg-white text-orange-500' : 'bg-white/20'
                }`}
              >
                {s}
              </div>
              {s < 3 && (
                <div
                  className={`w-16 h-1 mx-2 ${
                    step > s ? 'bg-white' : 'bg-white/20'
                  }`}
                />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {step === 1 && (
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-gray-900">
              {orderType === 'delivery' ? 'Delivery' : 'Pickup'} Details
            </h3>
            
            {orderType === 'delivery' && (
              <>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Delivery Address *
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Enter your address"
                      className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-gray-200 focus:border-orange-500 focus:outline-none"
                    />
                  </div>
                </div>
              </>
            )}

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-orange-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-orange-500 focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Delivery Instructions
              </label>
              <textarea
                placeholder="e.g., Ring the doorbell, leave at door..."
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-orange-500 focus:outline-none resize-none"
                rows="3"
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setStep(2)}
              className="w-full bg-gradient-to-r from-orange-500 to-red-600 text-white py-4 rounded-full font-bold text-lg shadow-lg"
            >
              Continue to Payment
            </motion.button>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-gray-900">Payment Method</h3>

            <div className="space-y-3">
              {['Credit Card', 'Debit Card', 'Cash on Delivery'].map((method) => (
                <motion.button
                  key={method}
                  whileTap={{ scale: 0.98 }}
                  className="w-full p-4 rounded-xl border-2 border-gray-200 hover:border-orange-500 transition-all flex items-center justify-between"
                >
                  <div className="flex items-center space-x-3">
                    <CreditCard className="w-5 h-5 text-gray-400" />
                    <span className="font-semibold">{method}</span>
                  </div>
                  <div className="w-5 h-5 rounded-full border-2 border-gray-300" />
                </motion.button>
              ))}
            </div>

            <div className="bg-gray-50 rounded-xl p-4 space-y-2">
              <h4 className="font-bold text-gray-900">Order Summary</h4>
              <div className="text-sm space-y-1">
                <div className="flex justify-between">
                  <span className="text-gray-600">{cart.length} items</span>
                  <span className="font-semibold">${total.toFixed(2)}</span>
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setStep(1)}
                className="flex-1 border-2 border-gray-300 text-gray-700 py-4 rounded-full font-bold"
              >
                Back
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handlePlaceOrder}
                className="flex-1 bg-gradient-to-r from-orange-500 to-red-600 text-white py-4 rounded-full font-bold shadow-lg"
              >
                Place Order
              </motion.button>
            </div>
          </div>
        )}

        {step === 3 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-12"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
              className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <Check className="w-12 h-12 text-green-500" />
            </motion.div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Order Placed Successfully!
            </h3>
            <p className="text-gray-600 mb-2">
              Your order #{Math.floor(Math.random() * 10000)} has been confirmed
            </p>
            <p className="text-sm text-gray-500">
              Estimated {orderType} time: 30-40 minutes
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default OrderOnline;