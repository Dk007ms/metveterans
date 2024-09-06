import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import images from "../../data/hero-Section-Images";

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showFirstText, setShowFirstText] = useState(true);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const textInterval = setInterval(() => {
      setShowFirstText((prevText) => !prevText);
    }, 8000);

    return () => clearInterval(textInterval);
  }, []);

  return (
    <div className="flex items-center justify-evenly p-12 bg-gray-50 min-h-screen relative pb-56">
      <div className="flex flex-col gap-12 w-1/3">
        <AnimatePresence mode="wait">
          <motion.h1
            key={showFirstText ? "first" : "second"}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="text-5xl font-bold text-blue-900 h-32 flex flex-col gap-2"
          >
            {showFirstText ? (
              <>
                <span className="font-Caveat text-[#e57f78]">Met</span>
                <span className="font-Nunito">Veterans</span>
                <span className="font-Nunito">Association</span>
              </>
            ) : (
              <>
                <span className="font-Nunito">Old Age</span>
                <span className="font-Nunito">Home</span>
              </>
            )}
          </motion.h1>
        </AnimatePresence>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-red-600 text-white w-48 py-3 px-6 rounded-full hover:bg-red-700 transition-colors duration-300 shadow-lg font-semibold text-lg"
        >
          Discover More
        </motion.button>
      </div>

      <div className="relative w-2/3 max-w-3xl aspect-video rounded-xl shadow-2xl overflow-hidden">
        <motion.div
          animate={{ x: `-${currentIndex * 100}%` }}
          transition={{ type: "tween", ease: "easeInOut", duration: 0.5 }}
          className="flex h-full"
        >
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Image ${index + 1}`}
              className="w-full h-full object-cover flex-shrink-0"
            />
          ))}
        </motion.div>
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <motion.div
              key={index}
              className={`w-3 h-3 rounded-full ${
                currentIndex === index ? "bg-white" : "bg-white/50"
              }`}
              animate={{ scale: currentIndex === index ? 1.2 : 1 }}
            />
          ))}
        </div>
      </div>

      <div className="flex flex-col items-center space-y-4 absolute right-8">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={handlePrev}
          className="w-12 h-12 bg-white/80 text-red-600 rounded-full hover:bg-red-600 hover:text-white transition-colors duration-300 flex items-center justify-center shadow-md"
        >
          <ChevronLeft size={24} />
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleNext}
          className="w-12 h-12 bg-white/80 text-red-600 rounded-full hover:bg-red-600 hover:text-white transition-colors duration-300 flex items-center justify-center shadow-md"
        >
          <ChevronRight size={24} />
        </motion.button>
      </div>
    </div>
  );
};

export default Home;
