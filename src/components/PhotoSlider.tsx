
import React, { useState, useEffect } from 'react';

const PhotoSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Placeholder images - replace with your actual photos
  const photos = [
  "/images/photo1.jpg", // EK FRAME TO LE HI SKTA HU

 "/images/photo2.jpg", // EK DO PHOTO'S BHI BHEJ DIYA KR ZALIM LADKI

  "/images/photo3.jpg",// PAGAL LADKI

  "/images/photo1.jpg", // BOLA THA NA PHOTOS KI KAMI HAI
  
  "/images/photo3.jpg",// AGAIN PAGAL
];


  const captions = [
    "EK FRAME TO LE HI SKTA HU",
    "EK DO PHOTOS BHI BHEJ DIYA KR ZALIM LADKI",
    "Pagal Ladki",
    "Bola THA NA PHOTOS KI KAMI HAI",
    "AGAIN PAGAL LADKI"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % photos.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [photos.length]);

  return (
    <div className="photo-slider-container">
      <h2 className="slider-title">Your Beautiful Memories</h2>
      <div className="slider-wrapper">
        <div className="slider-content">
          <div className="photo-frame">
            <img 
              src={photos[currentSlide]} 
              alt={captions[currentSlide]}
              className="slider-image slider-image-animated"
              key={currentSlide}
            />
            <div className="photo-overlay">
              <p className="photo-caption">{captions[currentSlide]}</p>
            </div>
          </div>
        </div>
        
        <div className="slider-dots">
          {photos.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`slider-dot ${currentSlide === index ? 'active' : ''}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PhotoSlider;
