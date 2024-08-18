import React, { useState, useEffect } from "react";

const Carousel = ({ images, autoScrollInterval = 4000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-scroll logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, autoScrollInterval);

    return () => clearInterval(interval);
  }, [images.length, autoScrollInterval]);

  // Manual navigation
  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="relative w-full squada-one-regular text-xl">
      <div className="overflow-hidden relative h-[50dvh]">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={image.src}
              alt={`Slide ${index}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 w-full bg-black bg-opacity-50 text-white p-2 text-center">
              {image.caption}
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={goToPrev}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 p-2 bg-white bg-opacity-25 shadow-lg rounded-full"
      >
        &#9664;
      </button>
      <button
        onClick={goToNext}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 p-2 bg-white bg-opacity-25 shadow-lg rounded-full"
      >
        &#9654;
      </button>

      
    </div>
  );
};

export default Carousel;
