import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import images from "../../data/hero-Section-Images";
import cardData from "../../data/card-data";
import SectionCard from "../comman/SectionCard";
import SocialCauseCard from "../comman/socialCauseCard";
import socialCauses from "../../data/social-causes";
import ImageCarousel from "../comman/Image-carousel";

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
    <>
      <div className="flex items-center justify-evenly p-12 bg-gray-50 min-h-screen relative pb-56">
        {/* <-------------------------------------------------------------------------------------------HeroSection----------------------------------------------------------------------------------------------------------> */}
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
      {/* <-------------------------------------------------------------------------------------------secondSection----------------------------------------------------------------------------------------------------------> */}
      <div></div>
      {/* <-------------------------------------------------------------------------------------------facilities-and-social-Section----------------------------------------------------------------------------------------------------------> */}

      <div className="flex flex-col justify-center items-center bg-gray-100">
        <div>
          {" "}
          <div className="py-10">
            <div className="container mx-auto px-28 flex flex-wrap justify-center">
              <h2 className="text-3xl font-bold text-center mb-10">
                Our Facilities
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
                {cardData.map((section) => (
                  <SectionCard key={section.id} section={section} />
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* <-------------------------------------------------------------------------------------------social-causes----------------------------------------------------------------------------------------------------------> */}
        <div className="py-10">
          <div className="container mx-auto px-28">
            <h2 className="text-3xl font-bold text-center mb-10">
              Our Social Causes
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {socialCauses.map((cause) => (
                <SocialCauseCard key={cause.id} cause={cause} />
              ))}
            </div>
          </div>
        </div>

        <button className="text-white bg-red-500 hover:bg-red-600 font-semibold px-4 py-2 w-28 h-10 rounded mb-16">
          View More
        </button>
        {/* <-------------------------------------------------------------------------------------------joining-and-donation----------------------------------------------------------------------------------------------------------> */}

        <div className="flex justify-center gap-16 mb-16">
          <div className="w-[530px] h-[293px] bg-[#1B3A8A] rounded-[20px]">
            <img src="/assets/div-cutout.png" alt="div-cutout" />
          </div>
          <div className="w-[530px] h-[293px] bg-[#DE2A1B] rounded-[20px]">
            <img src="/assets/div-cutout.png" alt="div-cutout" />
          </div>
        </div>

        {/* <-------------------------------------------------------------------------------------------gallery-slider----------------------------------------------------------------------------------------------------------> */}
        <div className="mb-8">Our Photo Gallery</div>
        <ImageCarousel/>
      </div>
    </>
  );
};

export default Home;
