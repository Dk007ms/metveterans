import React, { useRef, useEffect, useState } from "react";
import { easeIn, motion, useAnimation, useMotionValue } from "framer-motion";
import "../../styles/ImageCarousel.css";
import galleryImageLinks from "../../data/gallery-images";

const ImageCarousel = () => {
  const carouselRef = useRef(null);
  const x = useMotionValue(0);
  const controls = useAnimation();
  const [constraints, setConstraints] = useState({ left: 0, right: 0 });
  const [isDragging, setIsDragging] = useState(false); // State to track dragging

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const updateConstraints = () => {
      const scrollWidth = carousel.scrollWidth;
      const viewportWidth = carousel.offsetWidth;
      setConstraints({
        left: -(scrollWidth - viewportWidth),
        right: 0,
      });
    };

    updateConstraints();
    window.addEventListener("resize", updateConstraints);

    // Animate with alternating fill mode
    const animateCarousel = async () => {
      await controls.start({
        x: [0, -(carousel.scrollWidth - carousel.offsetWidth)], // From 0 to max left
        transition: {
          x: {
            repeat: Infinity,
            repeatType: "mirror", // Alternates direction
            duration: 50, // Adjust the duration for speed
            ease: easeIn,
          },
        },
      });
    };

    if (!isDragging) {
      animateCarousel(); // Only animate when not dragging
    }

    return () => window.removeEventListener("resize", updateConstraints);
  }, [controls, isDragging]);

  const handleDragStart = () => {
    setIsDragging(true);
    controls.stop(); // Stop the animation during drag
  };

  const handleDragEnd = (event, info) => {
    setIsDragging(false);
    const carousel = carouselRef.current;
    if (!carousel) return;

    const scrollWidth = carousel.scrollWidth;
    const viewportWidth = carousel.offsetWidth;
    const currentX = x.get();

    // Ensure the carousel stays within bounds
    if (currentX > 0) {
      controls.start({ x: 0, transition: { type: "spring", stiffness: 300 } });
    } else if (currentX < -(scrollWidth - viewportWidth)) {
      controls.start({
        x: -(scrollWidth - viewportWidth),
        transition: { type: "spring", stiffness: 300 },
      });
    }
  };

  return (
    <div className="overflow-clip w-[75%]">
      <motion.div
        ref={carouselRef}
        className="flex"
        style={{ x }}
        drag="x"
        dragConstraints={constraints}
        onDragStart={handleDragStart} // Handle drag start
        onDragEnd={handleDragEnd} // Handle drag end
        animate={controls} // Controlled animation
      >
        {galleryImageLinks.map((image, index) => (
          <div key={index} className="flex-shrink-0 w-64 h-48 m-2">
            <img
              src={image}
              alt={`Carousel item ${index}`}
              className="w-full h-full object-cover rounded-lg shadow-md"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default ImageCarousel;
