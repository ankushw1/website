import React from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  const words = ["University", "Travel", "Easier", "Than", "Ever"];

  return (
    <div
      className="bg-gradient-to-r from-blue-500 to-blue-700 text-white min-h-screen flex flex-col justify-center py-16"
      style={{
        backgroundImage: "url('https://s3.amazonaws.com/www.lucidtravel.com/assets/img/field.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto px-6">
        {/* Centered Heading */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 mt-8">
            {words.map((word, index) => (
              <motion.span
                key={index}
                className="mr-3 inline-block text-black"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
              >
                {word}
              </motion.span>
            ))}
          </h1>

          <motion.p
            className="text-lg md:text-xl mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            <a
              href="https://www.lucidtravel.com/user/registration-step-1"
              className="underline text-white hover:text-blue-200"
            >
              Create your free team travel link
            </a>{" "}
            and see how easy team hotels & travel can be.
          </motion.p>
        </motion.div>

        {/* Search Widget */}
        <motion.div
          className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex flex-wrap -mx-4">
            <motion.div
              className="w-full md:w-1/3 px-4 mb-4 md:mb-0"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              <label className="block text-gray-600 font-bold mb-2">Destination</label>
              <input
                type="text"
                placeholder="Enter City, Hotel Name, or Venue"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              />
            </motion.div>

            <motion.div
              className="w-1/3 px-4 mb-4 md:mb-0"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <label className="block text-gray-600 font-bold mb-2">Check-In</label>
              <input
                type="date"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              />
            </motion.div>

            <motion.div
              className="w-1/3 px-4 mb-4 md:mb-0"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
            >
              <label className="block text-gray-600 font-bold mb-2">Check-Out</label>
              <input
                type="date"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              />
            </motion.div>
          </div>

          <motion.div
            className="mt-6 flex justify-between items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.6 }}
          >
            <div className="w-full md:w-1/4">
              <label className="block text-gray-600 font-bold mb-2">Rooms</label>
              <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4+</option>
              </select>
            </div>
            <button className="bg-blue-500 text-white px-8 py-3 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition transform hover:scale-105">
              Find Hotels
            </button>
          </motion.div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <a
            href="https://www.lucidhotels.us/Res/"
            className="inline-block bg-green-500 text-white py-3 px-6 rounded-lg hover:bg-green-600 transition transform hover:scale-105"
          >
            Voted 2021 Best Sports Travel Business
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
