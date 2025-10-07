import { motion } from 'framer-motion';
import {
  Award,
  Heart,
  Users,
  Star,
  Clock,
  Globe,
  ChefHat,
  Sparkles,
  Target,
  Zap,
  Shield,
  TrendingUp
} from 'lucide-react';

const About = () => {
  const teamMembers = [
    {
      name: "Marco Rossi",
      role: "Executive Chef",
      image: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=800",
      specialty: "Italian Cuisine",
      experience: "15+ years",
    },
    {
      name: "Sarah Chen",
      role: "Head Pastry Chef",
      image: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=800",
      specialty: "Desserts & Pastries",
      experience: "12+ years",
    },
    {
      name: "James Wilson",
      role: "Sous Chef",
      image: "https://images.unsplash.com/photo-1583394293214-28ded15ee548?w=800",
      specialty: "Modern Fusion",
      experience: "10+ years",
    },
    {
      name: "Maria Garcia",
      role: "Sushi Master",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800",
      specialty: "Japanese Cuisine",
      experience: "18+ years",
    },
  ];

  const values = [
    {
      icon: Heart,
      title: "Passion",
      description: "We pour our hearts into every dish we create",
      color: "from-red-500 to-pink-500"
    },
    {
      icon: Award,
      title: "Quality",
      description: "Only the finest ingredients make it to your plate",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: Users,
      title: "Community",
      description: "Building connections through exceptional food",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Sparkles,
      title: "Innovation",
      description: "Constantly evolving and creating new experiences",
      color: "from-purple-500 to-pink-500"
    },
  ];

  const stats = [
    { icon: Users, number: "50K+", label: "Happy Customers" },
    { icon: ChefHat, number: "25+", label: "Expert Chefs" },
    { icon: Award, number: "15+", label: "Awards Won" },
    { icon: Globe, number: "5", label: "Locations" },
  ];

  const milestones = [
    { year: "2015", title: "The Beginning", description: "Started with a small kitchen and big dreams" },
    { year: "2017", title: "First Award", description: "Won Best New Restaurant in the city" },
    { year: "2019", title: "Expansion", description: "Opened 3 new locations" },
    { year: "2021", title: "Going Digital", description: "Launched online delivery service" },
    { year: "2024", title: "Excellence", description: "Serving 500+ dishes daily with 4.9★ rating" },
  ];

  const principles = [
    {
      icon: Target,
      title: "Fresh Ingredients",
      description: "We source locally and prioritize freshness in every ingredient"
    },
    {
      icon: Zap,
      title: "Fast Service",
      description: "Quick preparation without compromising on quality"
    },
    {
      icon: Shield,
      title: "Food Safety",
      description: "Highest standards of hygiene and safety protocols"
    },
    {
      icon: TrendingUp,
      title: "Sustainability",
      description: "Eco-friendly practices and sustainable sourcing"
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920"
            alt="Restaurant"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-orange-900/90 to-red-900/80" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6">
              Our Story
            </h1>
            <p className="text-xl sm:text-2xl text-white/90 max-w-3xl mx-auto">
              A journey of passion, flavor, and culinary excellence
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800"
                  alt="Restaurant Interior"
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl -z-10" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                Where It All
                <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
                  {" "}Started
                </span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Founded in 2015, FoodieDelight began as a small family kitchen with a simple mission: 
                to bring people together through extraordinary food. What started as a passion project 
                has grown into a beloved dining destination.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Today, we serve thousands of happy customers, combining traditional recipes with 
                modern culinary techniques. Every dish tells a story, every meal creates a memory.
              </p>
              <div className="flex items-center space-x-4 pt-4">
                <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-red-600 rounded-full" />
                <span className="text-gray-400 font-semibold">Since 2015</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-red-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="text-center text-white"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full mb-4">
                  <stat.icon className="w-8 h-8" />
                </div>
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-white/90 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <div className="bg-gradient-to-b from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 text-center">
                  <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br ${value.color} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <value.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600">
              Milestones that shaped our story
            </p>
          </motion.div>

          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="relative"
              >
                <div className="flex items-center gap-8">
                  <div className="flex-shrink-0 w-24 text-right">
                    <span className="text-3xl font-bold bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
                      {milestone.year}
                    </span>
                  </div>
                  <div className="flex-shrink-0">
                    <div className="w-4 h-4 bg-gradient-to-br from-orange-500 to-red-600 rounded-full ring-4 ring-orange-100" />
                  </div>
                  <div className="flex-1 bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-gray-600">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Meet Our
              <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
                {" "}Master Chefs
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The talented team behind your favorite dishes
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
                  <div className="relative h-80 overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <div className="inline-flex items-center space-x-1 bg-orange-500 px-3 py-1 rounded-full text-xs font-semibold mb-3">
                        <ChefHat className="w-3 h-3" />
                        <span>{member.experience}</span>
                      </div>
                      <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
                      <p className="text-white/90 text-sm font-medium">{member.role}</p>
                      <p className="text-white/70 text-sm mt-2">{member.specialty}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Principles Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              What Sets Us Apart
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our commitment to excellence in every aspect
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {principles.map((principle, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center mb-4">
                  <principle.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {principle.title}
                </h3>
                <p className="text-gray-600">
                  {principle.description}
                </p>
              </motion.div>
            ))}
          </div>
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
            Join Our Culinary Journey
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Experience the passion, taste the quality, feel the difference
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-orange-600 px-8 py-4 rounded-full font-bold text-lg shadow-2xl hover:shadow-white/20 transition-shadow"
            >
              Visit Us Today
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-orange-600 transition-colors"
            >
              View Our Menu
            </motion.button>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default About;