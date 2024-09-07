import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import testimonials from "../../data/testimonial-data";

const TestimonialComponent = () => {
  const [current, setCurrent] = useState(0);

  const nextTestimonial = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrent(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  useEffect(() => {
    const testimonial = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(testimonial);
  }, [current]);

  return (
    <div className="flex justify-center items-center w-full h-screen bg-gray-900">
      <div className="relative flex items-start justify-between w-full max-w-5xl px-8">
        {/* Left side - Text Section */}
        <div className="text-white w-1/3">
          <h4 className="text-red-500 mb-2 text-sm">Our Testimonial</h4>
          <h2 className="text-4xl font-bold leading-tight mb-4">
            What they are talking about Us
          </h2>
          <button className="mt-4 px-4 py-2 bg-red-500 text-white text-sm rounded-md">
            ALL TESTIMONIALS
          </button>
        </div>

        {/* Testimonial Card */}
        <div className="relative w-2/3 bg-white text-gray-900 p-6 rounded-lg shadow-lg">
          <div className="absolute -top-6 -left-6 rounded-full overflow-hidden h-16 w-16 border-4 border-white shadow-lg">
            <img
              src={testimonials[current].image}
              alt={testimonials[current].name}
              className="h-full w-full object-cover"
            />
          </div>
          <p className="mt-8 text-lg leading-relaxed">
            {testimonials[current].review}
          </p>
          <div className="mt-4">
            <h4 className="font-bold text-xl text-red-500">
              {testimonials[current].name}
            </h4>
          </div>
          <div className="absolute -bottom-4 -right-4 bg-blue-600 rounded-full p-2">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20 12L4 12"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M20 12L14 18"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M20 12L14 6"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevTestimonial}
          className="absolute top-1/2 -left-12 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextTestimonial}
          className="absolute top-1/2 -right-12 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2"
        >
          <ChevronRight size={24} />
        </button>

        {/* Profile Images */}
        <div className="absolute -top-8 right-0 flex space-x-2">
          <img
            src="/assets/stuti.png"
            alt="Profile 1"
            className="w-10 h-10 rounded-full"
          />
          <img
            src="/api/placeholder/40/40"
            alt="Profile 2"
            className="w-10 h-10 rounded-full"
          />
          <img
            src="/api/placeholder/40/40"
            alt="Profile 3"
            className="w-10 h-10 rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default TestimonialComponent;
