import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  Truck, 
  Clock, 
  Award, 
  UtensilsCrossed, 
  Star,
  ChevronRight,
  Flame,
  Heart,
  ShoppingBag
} from 'lucide-react';
import { useRef } from 'react';

const Home = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  // Food Items Data
  const foodItems = [
    {
      id: 1,
      name: "Gourmet Burger",
      price: "$12.99",
      category: "Main Course",
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800",
      rating: 4.8,
      popular: true,
    },
    {
      id: 2,
      name: "Margherita Pizza",
      price: "$15.99",
      category: "Italian",
      image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800",
      rating: 4.9,
      popular: true,
    },
    {
      id: 3,
      name: "Caesar Salad",
      price: "$9.99",
      category: "Healthy",
      image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?w=800",
      rating: 4.6,
      popular: false,
    },
    {
      id: 4,
      name: "Sushi Platter",
      price: "$24.99",
      category: "Japanese",
      image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=800",
      rating: 4.9,
      popular: true,
    },
    {
      id: 5,
      name: "Pasta Carbonara",
      price: "$13.99",
      category: "Italian",
      image: "https://images.unsplash.com/photo-1612874742237-6526221588e3?w=800",
      rating: 4.7,
      popular: false,
    },
    {
      id: 6,
      name: "Chocolate Cake",
      price: "$7.99",
      category: "Dessert",
      image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800",
      rating: 4.8,
      popular: false,
    },
    {
      id: 7,
      name: "Grilled Steak",
      price: "$28.99",
      category: "Main Course",
      image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=800",
      rating: 4.9,
      popular: true,
    },
    {
      id: 8,
      name: "Smoothie Bowl",
      price: "$8.99",
      category: "Healthy",
      image: "https://images.unsplash.com/photo-1590301157890-4810ed352733?w=800",
      rating: 4.5,
      popular: false,
    },
  ];

  const features = [
    {
      icon: Truck,
      title: "Fast Delivery",
      description: "Get your food delivered in 30 minutes or less",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Clock,
      title: "24/7 Service",
      description: "Order anytime, we're always here for you",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Award,
      title: "Premium Quality",
      description: "Fresh ingredients, expertly prepared dishes",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: UtensilsCrossed,
      title: "Dine-In Available",
      description: "Reserve your table for an amazing experience",
      color: "from-green-500 to-emerald-500"
    },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section
        id="home"
        ref={heroRef}
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Background Image with Parallax */}
        <motion.div
          style={{ y }}
          className="absolute inset-0 z-0"
        >
          <div
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1920')",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
        </motion.div>

        {/* Hero Content */}
        <motion.div
          style={{ opacity }}
          className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="inline-flex items-center space-x-2 bg-orange-500/20 backdrop-blur-sm px-6 py-3 rounded-full border border-orange-500/50"
            >
              <Flame className="w-5 h-5 text-orange-500" />
              <span className="text-white font-semibold">Now Open for Delivery!</span>
            </motion.div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-tight">
              Delicious Food
              <br />
              <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                Delivered Fast
              </span>
            </h1>

            <p className="text-xl sm:text-2xl text-gray-200 max-w-3xl mx-auto">
              Experience culinary excellence with every bite. Order now and get your favorite meals delivered to your doorstep.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-8 py-4 rounded-full font-bold text-lg shadow-2xl hover:shadow-orange-500/50 transition-shadow flex items-center space-x-2 group"
              >
                <a href="/menu">Order Now</a>
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-full font-bold text-lg border-2 border-white/30 hover:bg-white/20 transition-colors"
              >
                <a href="/menu"> View Menu </a>
              </motion.button>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        >
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Why Choose Us?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We're committed to providing the best dining experience
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
                  <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Our <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">Signature Menu</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Handcrafted dishes made with love and the finest ingredients
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {foodItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -10 }}
                className="group cursor-pointer"
              >
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
                  {/* Image Container */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {item.popular && (
                      <div className="absolute top-4 right-4 bg-gradient-to-r from-orange-500 to-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center space-x-1">
                        <Flame className="w-4 h-4" />
                        <span>Popular</span>
                      </div>
                    )}
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-white text-gray-900 px-6 py-2 rounded-full font-semibold flex items-center space-x-2 shadow-lg"
                      >
                        <ShoppingBag className="w-4 h-4" />
                        <span>Add to Cart</span>
                      </motion.button>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-semibold text-orange-500 bg-orange-50 px-3 py-1 rounded-full">
                        {item.category}
                      </span>
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-semibold text-gray-700">{item.rating}</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {item.name}
                    </h3>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-orange-500">
                        {item.price}
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
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-shadow inline-flex items-center space-x-2"
            >
              <a href="/menu">View Full Menu</a>
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920"
            alt="Restaurant"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-orange-900/90 to-red-900/90" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Ready to Experience
            <br />
            Culinary Excellence?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join thousands of satisfied customers and taste the difference today
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-orange-600 px-8 py-4 rounded-full font-bold text-lg shadow-2xl hover:shadow-white/20 transition-shadow"
            >
              <a href="/order">Order Online</a>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-orange-600 transition-colors"
            >
              <a href="reserve">Reserve a Table</a>
            </motion.button>
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "10K+", label: "Happy Customers" },
              { number: "500+", label: "Dishes Served Daily" },
              { number: "50+", label: "Expert Chefs" },
              { number: "4.9", label: "Average Rating" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;