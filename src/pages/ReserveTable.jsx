import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Calendar,
  Clock,
  Users,
  MapPin,
  Phone,
  Mail,
  Check,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Wine,
  UtensilsCrossed,
  Heart,
  Star,
  Gift,
  Cake,
  PartyPopper,
  X,
  AlertCircle,
  Info,
} from 'lucide-react';

const ReserveTable = () => {
  const [step, setStep] = useState(1); // 1: Details, 2: Time Selection, 3: Confirmation
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [guests, setGuests] = useState(2);
  const [occasion, setOccasion] = useState('');
  const [tablePreference, setTablePreference] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    specialRequests: '',
  });

  // Generate next 14 days
  const generateDates = () => {
    const dates = [];
    const today = new Date();
    for (let i = 0; i < 14; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      dates.push(date);
    }
    return dates;
  };

  const dates = generateDates();

  // Available time slots
  const timeSlots = {
    lunch: ['11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM', '2:00 PM'],
    dinner: ['5:00 PM', '5:30 PM', '6:00 PM', '6:30 PM', '7:00 PM', '7:30 PM', '8:00 PM', '8:30 PM', '9:00 PM'],
  };

  const occasions = [
    { value: 'birthday', label: 'Birthday', icon: Cake, color: 'from-pink-500 to-rose-500' },
    { value: 'anniversary', label: 'Anniversary', icon: Heart, color: 'from-red-500 to-pink-500' },
    { value: 'date', label: 'Date Night', icon: Wine, color: 'from-purple-500 to-pink-500' },
    { value: 'business', label: 'Business Meal', icon: UtensilsCrossed, color: 'from-blue-500 to-cyan-500' },
    { value: 'celebration', label: 'Celebration', icon: PartyPopper, color: 'from-orange-500 to-red-500' },
    { value: 'other', label: 'Just Dining', icon: Sparkles, color: 'from-green-500 to-emerald-500' },
  ];

  const tablePreferences = [
    { value: 'window', label: 'Window Seat', icon: '🪟' },
    { value: 'outdoor', label: 'Outdoor Patio', icon: '🌿' },
    { value: 'private', label: 'Private Area', icon: '🚪' },
    { value: 'bar', label: 'Bar Area', icon: '🍷' },
    { value: 'booth', label: 'Booth', icon: '🛋️' },
    { value: 'any', label: 'No Preference', icon: '✨' },
  ];

  const restaurantFeatures = [
    { icon: Star, text: '4.9 Star Rating', color: 'text-yellow-500' },
    { icon: Users, text: 'Accommodates Groups', color: 'text-blue-500' },
    { icon: Wine, text: 'Full Bar Available', color: 'text-purple-500' },
    { icon: Gift, text: 'Special Occasion Packages', color: 'text-pink-500' },
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
      // Reset form or redirect
    }, 4000);
  };

  const formatDate = (date) => {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return {
      day: days[date.getDay()],
      date: date.getDate(),
      month: months[date.getMonth()],
      full: date.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }),
    };
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920"
            alt="Restaurant Interior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-orange-900/90 to-red-900/85" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6">
              Reserve Your Table
            </h1>
            <p className="text-xl sm:text-2xl text-white/90 max-w-3xl mx-auto mb-8">
              Join us for an unforgettable dining experience
            </p>

            {/* Features */}
            <div className="flex flex-wrap items-center justify-center gap-6 mt-8">
              {restaurantFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  className="flex items-center space-x-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full"
                >
                  <feature.icon className={`w-5 h-5 ${feature.color}`} />
                  <span className="text-white font-semibold text-sm">{feature.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Reservation Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column - Restaurant Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              {/* Restaurant Card */}
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
                <img
                  src="https://images.unsplash.com/photo-1592861956120-e524fc739696?w=800"
                  alt="Restaurant"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      FoodieDelight Restaurant
                    </h3>
                    <div className="flex items-center space-x-1 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                      <span className="text-sm text-gray-600 ml-2">(1,234 reviews)</span>
                    </div>
                  </div>

                  <div className="space-y-3 text-sm">
                    <div className="flex items-start space-x-3">
                      <MapPin className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">123 Food Street, Culinary City, FC 12345</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-orange-500 flex-shrink-0" />
                      <span className="text-gray-600">+1 (555) 123-4567</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="w-5 h-5 text-orange-500 flex-shrink-0" />
                      <span className="text-gray-600">reservations@foodiedelight.com</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Opening Hours */}
              <div className="bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl shadow-xl p-6 text-white">
                <div className="flex items-center space-x-2 mb-4">
                  <Clock className="w-6 h-6" />
                  <h3 className="text-xl font-bold">Opening Hours</h3>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span className="font-semibold">11:00 AM - 10:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="font-semibold">10:00 AM - 11:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="font-semibold">10:00 AM - 10:00 PM</span>
                  </div>
                </div>
              </div>

              {/* Important Info */}
              <div className="bg-blue-50 rounded-2xl p-6 border-2 border-blue-200">
                <div className="flex items-start space-x-3">
                  <Info className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                  <div className="text-sm text-blue-900">
                    <p className="font-semibold mb-2">Please Note:</p>
                    <ul className="space-y-1 text-blue-800">
                      <li>• Reservations held for 15 minutes</li>
                      <li>• Groups of 8+ please call ahead</li>
                      <li>• Smart casual dress code</li>
                      <li>• Free parking available</li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Reservation Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
                {/* Progress Steps */}
                <div className="bg-gradient-to-r from-orange-500 to-red-600 p-6">
                  <div className="flex items-center justify-between max-w-md mx-auto">
                    {[1, 2, 3].map((s) => (
                      <div key={s} className="flex items-center">
                        <div className="flex flex-col items-center">
                          <motion.div
                            animate={{
                              scale: step >= s ? 1 : 0.8,
                              backgroundColor: step >= s ? '#ffffff' : 'rgba(255,255,255,0.3)',
                            }}
                            className="w-12 h-12 rounded-full flex items-center justify-center font-bold mb-2"
                            style={{ color: step >= s ? '#f97316' : '#ffffff' }}
                          >
                            {step > s ? <Check className="w-6 h-6" /> : s}
                          </motion.div>
                          <span className="text-white text-xs font-semibold">
                            {s === 1 ? 'Details' : s === 2 ? 'Time' : 'Confirm'}
                          </span>
                        </div>
                        {s < 3 && (
                          <div
                            className={`w-16 md:w-24 h-1 mx-2 mb-6 transition-colors ${
                              step > s ? 'bg-white' : 'bg-white/30'
                            }`}
                          />
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Form Content */}
                <div className="p-8">
                  <AnimatePresence mode="wait">
                    {/* Step 1: Guest Details & Occasion */}
                    {step === 1 && (
                      <motion.div
                        key="step1"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="space-y-6"
                      >
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">
                          Reservation Details
                        </h2>

                        {/* Number of Guests */}
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-3">
                            Number of Guests *
                          </label>
                          <div className="flex items-center space-x-4">
                            <motion.button
                              whileTap={{ scale: 0.9 }}
                              onClick={() => setGuests(Math.max(1, guests - 1))}
                              className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                            >
                              <ChevronLeft className="w-5 h-5" />
                            </motion.button>
                            <div className="flex-1 text-center">
                              <div className="text-4xl font-bold text-orange-500">{guests}</div>
                              <div className="text-sm text-gray-500">
                                {guests === 1 ? 'Guest' : 'Guests'}
                              </div>
                            </div>
                            <motion.button
                              whileTap={{ scale: 0.9 }}
                              onClick={() => setGuests(Math.min(20, guests + 1))}
                              className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-full flex items-center justify-center hover:shadow-lg transition-shadow"
                            >
                              <ChevronRight className="w-5 h-5" />
                            </motion.button>
                          </div>
                          {guests >= 8 && (
                            <div className="mt-2 flex items-start space-x-2 text-sm text-orange-600 bg-orange-50 p-3 rounded-lg">
                              <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                              <span>For groups of 8 or more, please call us directly for better service.</span>
                            </div>
                          )}
                        </div>

                        {/* Personal Information */}
                        <div className="grid sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                              First Name *
                            </label>
                            <input
                              type="text"
                              name="firstName"
                              value={formData.firstName}
                              onChange={handleInputChange}
                              className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-orange-500 focus:outline-none transition-colors"
                              placeholder="John"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                              Last Name *
                            </label>
                            <input
                              type="text"
                              name="lastName"
                              value={formData.lastName}
                              onChange={handleInputChange}
                              className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-orange-500 focus:outline-none transition-colors"
                              placeholder="Doe"
                            />
                          </div>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                              Email *
                            </label>
                            <input
                              type="email"
                              name="email"
                              value={formData.email}
                              onChange={handleInputChange}
                              className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-orange-500 focus:outline-none transition-colors"
                              placeholder="john@example.com"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                              Phone Number *
                            </label>
                            <input
                              type="tel"
                              name="phone"
                              value={formData.phone}
                              onChange={handleInputChange}
                              className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-orange-500 focus:outline-none transition-colors"
                              placeholder="+1 (555) 000-0000"
                            />
                          </div>
                        </div>

                        {/* Occasion */}
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-3">
                            What's the Occasion? (Optional)
                          </label>
                          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                            {occasions.map((occ) => (
                              <motion.button
                                key={occ.value}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setOccasion(occ.value)}
                                className={`p-4 rounded-xl border-2 transition-all ${
                                  occasion === occ.value
                                    ? `border-orange-500 bg-gradient-to-br ${occ.color} text-white shadow-lg`
                                    : 'border-gray-200 hover:border-gray-300 bg-white'
                                }`}
                              >
                                <occ.icon
                                  className={`w-6 h-6 mx-auto mb-2 ${
                                    occasion === occ.value ? 'text-white' : 'text-gray-400'
                                  }`}
                                />
                                <span className="text-sm font-semibold">{occ.label}</span>
                              </motion.button>
                            ))}
                          </div>
                        </div>

                        {/* Table Preference */}
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-3">
                            Table Preference (Optional)
                          </label>
                          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                            {tablePreferences.map((pref) => (
                              <motion.button
                                key={pref.value}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setTablePreference(pref.value)}
                                className={`p-4 rounded-xl border-2 transition-all ${
                                  tablePreference === pref.value
                                    ? 'border-orange-500 bg-orange-50 text-orange-600 shadow-lg'
                                    : 'border-gray-200 hover:border-gray-300'
                                }`}
                              >
                                <div className="text-2xl mb-2">{pref.icon}</div>
                                <span className="text-sm font-semibold">{pref.label}</span>
                              </motion.button>
                            ))}
                          </div>
                        </div>

                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => setStep(2)}
                          className="w-full bg-gradient-to-r from-orange-500 to-red-600 text-white py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-shadow"
                        >
                          Continue to Date & Time
                        </motion.button>
                      </motion.div>
                    )}

                    {/* Step 2: Date & Time Selection */}
                    {step === 2 && (
                      <motion.div
                        key="step2"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="space-y-6"
                      >
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">
                          Select Date & Time
                        </h2>

                        {/* Date Selection */}
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-3">
                            Choose a Date *
                          </label>
                          <div className="grid grid-cols-7 gap-2">
                            {dates.map((date, index) => {
                              const formatted = formatDate(date);
                              const isSelected = selectedDate?.getTime() === date.getTime();
                              return (
                                <motion.button
                                  key={index}
                                  whileTap={{ scale: 0.95 }}
                                  onClick={() => setSelectedDate(date)}
                                  className={`p-3 rounded-xl border-2 transition-all ${
                                    isSelected
                                      ? 'border-orange-500 bg-gradient-to-br from-orange-500 to-red-600 text-white shadow-lg'
                                      : 'border-gray-200 hover:border-gray-300'
                                  }`}
                                >
                                  <div className="text-xs font-semibold mb-1">
                                    {formatted.day}
                                  </div>
                                  <div className="text-lg font-bold">{formatted.date}</div>
                                  <div className="text-xs">{formatted.month}</div>
                                </motion.button>
                              );
                            })}
                          </div>
                          {selectedDate && (
                            <div className="mt-3 text-sm text-gray-600 flex items-center space-x-2">
                              <Calendar className="w-4 h-4 text-orange-500" />
                              <span className="font-semibold">{formatDate(selectedDate).full}</span>
                            </div>
                          )}
                        </div>

                        {/* Time Selection */}
                        {selectedDate && (
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                          >
                            <label className="block text-sm font-semibold text-gray-700 mb-3">
                              Choose a Time *
                            </label>

                            {/* Lunch */}
                            <div className="mb-4">
                              <h4 className="text-sm font-semibold text-gray-600 mb-2 flex items-center">
                                <span className="mr-2">☀️</span> Lunch (11 AM - 2 PM)
                              </h4>
                              <div className="grid grid-cols-4 gap-2">
                                {timeSlots.lunch.map((time) => (
                                  <motion.button
                                    key={time}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => setSelectedTime(time)}
                                    className={`p-3 rounded-lg border-2 text-sm font-semibold transition-all ${
                                      selectedTime === time
                                        ? 'border-orange-500 bg-orange-50 text-orange-600'
                                        : 'border-gray-200 hover:border-gray-300'
                                    }`}
                                  >
                                    {time}
                                  </motion.button>
                                ))}
                              </div>
                            </div>

                            {/* Dinner */}
                            <div>
                              <h4 className="text-sm font-semibold text-gray-600 mb-2 flex items-center">
                                <span className="mr-2">🌙</span> Dinner (5 PM - 9 PM)
                              </h4>
                              <div className="grid grid-cols-4 gap-2">
                                {timeSlots.dinner.map((time) => (
                                  <motion.button
                                    key={time}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => setSelectedTime(time)}
                                    className={`p-3 rounded-lg border-2 text-sm font-semibold transition-all ${
                                      selectedTime === time
                                        ? 'border-orange-500 bg-orange-50 text-orange-600'
                                        : 'border-gray-200 hover:border-gray-300'
                                    }`}
                                  >
                                    {time}
                                  </motion.button>
                                ))}
                              </div>
                            </div>
                          </motion.div>
                        )}

                        {/* Special Requests */}
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Special Requests (Optional)
                          </label>
                          <textarea
                            name="specialRequests"
                            value={formData.specialRequests}
                            onChange={handleInputChange}
                            placeholder="Any allergies, dietary restrictions, or special requests?"
                            className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-orange-500 focus:outline-none resize-none transition-colors"
                            rows="4"
                          />
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-3">
                          <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => setStep(1)}
                            className="flex-1 border-2 border-gray-300 text-gray-700 py-4 rounded-full font-bold text-lg hover:bg-gray-50 transition-colors"
                          >
                            Back
                          </motion.button>
                          <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => setStep(3)}
                            disabled={!selectedDate || !selectedTime}
                            className={`flex-1 py-4 rounded-full font-bold text-lg shadow-lg transition-all ${
                              selectedDate && selectedTime
                                ? 'bg-gradient-to-r from-orange-500 to-red-600 text-white hover:shadow-xl'
                                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                            }`}
                          >
                            Review Reservation
                          </motion.button>
                        </div>
                      </motion.div>
                    )}

                    {/* Step 3: Confirmation */}
                    {step === 3 && (
                      <motion.div
                        key="step3"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="space-y-6"
                      >
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">
                          Confirm Your Reservation
                        </h2>

                        {/* Summary Card */}
                        <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-6 border-2 border-orange-200">
                          <div className="grid sm:grid-cols-2 gap-6">
                            <div className="flex items-start space-x-3">
                              <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                                <Users className="w-5 h-5 text-white" />
                              </div>
                              <div>
                                <div className="text-sm text-gray-600">Party Size</div>
                                <div className="text-lg font-bold text-gray-900">
                                  {guests} {guests === 1 ? 'Guest' : 'Guests'}
                                </div>
                              </div>
                            </div>

                            <div className="flex items-start space-x-3">
                              <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                                <Calendar className="w-5 h-5 text-white" />
                              </div>
                              <div>
                                <div className="text-sm text-gray-600">Date</div>
                                <div className="text-lg font-bold text-gray-900">
                                  {selectedDate && formatDate(selectedDate).full}
                                </div>
                              </div>
                            </div>

                            <div className="flex items-start space-x-3">
                              <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                                <Clock className="w-5 h-5 text-white" />
                              </div>
                              <div>
                                <div className="text-sm text-gray-600">Time</div>
                                <div className="text-lg font-bold text-gray-900">
                                  {selectedTime}
                                </div>
                              </div>
                            </div>

                            <div className="flex items-start space-x-3">
                              <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                                <Mail className="w-5 h-5 text-white" />
                              </div>
                              <div>
                                <div className="text-sm text-gray-600">Contact</div>
                                <div className="text-lg font-bold text-gray-900">
                                  {formData.firstName} {formData.lastName}
                                </div>
                                <div className="text-sm text-gray-600">{formData.email}</div>
                              </div>
                            </div>
                          </div>

                          {occasion && (
                            <div className="mt-4 pt-4 border-t border-orange-200">
                              <div className="flex items-center space-x-2">
                                <Sparkles className="w-5 h-5 text-orange-500" />
                                <span className="font-semibold text-gray-900">
                                  Special Occasion:{' '}
                                  {occasions.find((o) => o.value === occasion)?.label}
                                </span>
                              </div>
                            </div>
                          )}

                          {tablePreference && (
                            <div className="mt-2">
                              <div className="flex items-center space-x-2">
                                <UtensilsCrossed className="w-5 h-5 text-orange-500" />
                                <span className="font-semibold text-gray-900">
                                  Table Preference:{' '}
                                  {tablePreferences.find((p) => p.value === tablePreference)?.label}
                                </span>
                              </div>
                            </div>
                          )}

                          {formData.specialRequests && (
                            <div className="mt-4 pt-4 border-t border-orange-200">
                              <div className="text-sm text-gray-600 mb-1">Special Requests:</div>
                              <div className="text-gray-900">{formData.specialRequests}</div>
                            </div>
                          )}
                        </div>

                        {/* Terms */}
                        <div className="bg-gray-50 rounded-xl p-4 text-sm text-gray-600">
                          <p className="font-semibold text-gray-900 mb-2">Cancellation Policy:</p>
                          <p>
                            Please cancel at least 2 hours before your reservation time. Late
                            cancellations may affect future bookings.
                          </p>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-3">
                          <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => setStep(2)}
                            className="flex-1 border-2 border-gray-300 text-gray-700 py-4 rounded-full font-bold text-lg hover:bg-gray-50 transition-colors"
                          >
                            Back
                          </motion.button>
                          <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={handleSubmit}
                            className="flex-1 bg-gradient-to-r from-orange-500 to-red-600 text-white py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-shadow"
                          >
                            Confirm Reservation
                          </motion.button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Success Modal */}
      <AnimatePresence>
        {showSuccess && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-50"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="fixed inset-4 md:inset-auto md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:w-full md:max-w-md bg-white rounded-2xl shadow-2xl z-50 p-8"
            >
              <div className="text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                  className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
                >
                  <Check className="w-12 h-12 text-green-500" />
                </motion.div>

                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  Reservation Confirmed!
                </h3>

                <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-6 mb-6">
                  <p className="text-gray-700 mb-4">
                    We've sent a confirmation email to{' '}
                    <span className="font-semibold">{formData.email}</span>
                  </p>
                  <div className="text-sm text-gray-600 space-y-1">
                    <p>
                      <strong>Confirmation #:</strong> RES{Math.floor(Math.random() * 100000)}
                    </p>
                    <p>
                      <strong>Date:</strong> {selectedDate && formatDate(selectedDate).full}
                    </p>
                    <p>
                      <strong>Time:</strong> {selectedTime}
                    </p>
                    <p>
                      <strong>Guests:</strong> {guests}
                    </p>
                  </div>
                </div>

                <p className="text-gray-600 text-sm mb-6">
                  We look forward to serving you! If you need to make changes, please call us
                  at +1 (555) 123-4567
                </p>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowSuccess(false)}
                  className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-8 py-3 rounded-full font-semibold"
                >
                  Done
                </motion.button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Gallery Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Dining
              <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
                {' '}Experience
              </span>
            </h2>
            <p className="text-xl text-gray-600">
              A glimpse of what awaits you
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800',
              'https://images.unsplash.com/photo-1592861956120-e524fc739696?w=800',
              'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800',
              'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800',
            ].map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="aspect-square rounded-2xl overflow-hidden shadow-lg"
              >
                <img src={img} alt={`Restaurant ${index + 1}`} className="w-full h-full object-cover" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ReserveTable;