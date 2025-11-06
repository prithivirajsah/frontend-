import React, { useState } from "react";
import Button from "../components/base/Button";
import Input from "../components/base/Input";
import Header from "../components/Header";
import Footer from '../components/Footer';
import { Phone, Mail, MapPin, Clock, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import contact from "../assets/contact.png";


export default function ContactPage() {
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setIsSuccess(true);
      setFormData({ full_name: "", email: "", message: "" });
      
      setTimeout(() => {
        setIsSuccess(false);
      }, 3000);
    } catch (error) {
      console.error("Error submitting form:", error);
    }

    setIsSubmitting(false);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            Contact Us
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-600"
          >
            Have questions about renting? We're here to help you with your rental needs.
          </motion.p>
        </div>

        {/* Main Content */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid lg:grid-cols-2 gap-8 items-start"
        >
          {/* Left Section - Illustration & Contact Info */}
          <div className="space-y-6">
            {/* Illustration */}
            
              <div className="relative h-80 w-50 flex items-center justify-center">
                <img
                  src={contact}
                  alt="Contact illustration"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            

            {/* Contact Details */}
            <div className="bg-[#4B32C3] rounded-3xl shadow-lg p-8 text-white">
              <div className="space-y-6">
                {/* Phone */}
                <motion.div 
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-4"
                >
                  <div className="bg-white/20 p-3 rounded-full backdrop-blur-sm">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-white/80">Phone</p>
                    <p className="text-lg font-semibold">+977 9815836412</p>
                  </div>
                </motion.div>

                {/* Email */}
                <motion.div 
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-4"
                >
                  <div className="bg-white/20 p-3 rounded-full backdrop-blur-sm">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-white/80">Email</p>
                    <p className="text-lg font-semibold">prithivirajsah584@gmail.com</p>
                  </div>
                </motion.div>

                {/* Address */}
                <motion.div 
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-4"
                >
                  <div className="bg-white/20 p-3 rounded-full backdrop-blur-sm">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-white/80">Address</p>
                    <p className="text-lg font-semibold">44600 Kathmandu, Nepal</p>
                  </div>
                </motion.div>

                {/* Working Hours */}
                <motion.div 
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-4"
                >
                  <div className="bg-white/20 p-3 rounded-full backdrop-blur-sm">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-white/80">Working Hours</p>
                    <p className="text-base font-semibold">Mon - Fri: 9:00 AM - 6:00 PM</p>
                    <p className="text-base font-semibold">Sat: 10:00 AM - 4:00 PM</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Right Section - Contact Form */}
          <div className="bg-[#4B32C3] rounded-3xl shadow-lg p-8 text-white">
            <h2 className="text-3xl font-bold mb-2">Send us a Message</h2>
            <p className="text-white/80 mb-8">We'll get back to you as soon as possible</p>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Full Name */}
              <div>
                <label htmlFor="full_name" className="block text-sm font-medium mb-2">
                  Full Name
                </label>
                <Input
                  id="full_name"
                  name="full_name"
                  type="text"
                  placeholder="Your Name"
                  value={formData.full_name}
                  onChange={handleChange}
                  required
                  className="bg-white text-gray-900 border-none rounded-xl h-12 px-4 focus:ring-2 focus:ring-[#FFA83D]"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Your@gmail.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-white text-gray-900 border-none rounded-xl h-12 px-4 focus:ring-2 focus:ring-[#FFA83D]"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Your message....."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full bg-white text-gray-900 border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#FFA83D] resize-none focus:border-transparent outline-none transition-all"
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isSubmitting || isSuccess}
                className="w-full h-14 bg-[#FFA83D] hover:bg-[#FF9520] text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-none"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white" />
                    Sending...
                  </span>
                ) : isSuccess ? (
                  <span className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    Message Sent!
                  </span>
                ) : (
                  "Send Message"
                )}
              </Button>
            </form>
          </div>
        </motion.div>

        {/* Success Message */}
        {isSuccess && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="mt-8 bg-green-50 border border-green-200 rounded-2xl p-6 text-center"
          >
            <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-3" />
            <h3 className="text-xl font-bold text-green-900 mb-2">Thank you for contacting us!</h3>
            <p className="text-green-700">We'll get back to you shortly.</p>
          </motion.div>
        )}
        <Footer />
      </div>
    </div>
    </>
  );
}