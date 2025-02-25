import React, { useState, useRef } from 'react';

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [dragging, setDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [offsetX, setOffsetX] = useState(0);
  const totalImages = 12; 
  const imagesPerSlide = 2;
  const totalSlides = Math.ceil(totalImages / imagesPerSlide);

  const slides = Array.from({ length: totalImages }, (_, index) => ({
    id: index + 1,
    image: `/assets/career/career-client${index + 1}.svg`,
  }));

  const sliderWrapperRef = useRef(null);

  const handleMouseDown = (e) => {
    setDragging(true);
    setStartX(e.clientX);
    sliderWrapperRef.current.style.transition = 'none';
  };

  const handleMouseMove = (e) => {
    if (!dragging) return;
    setOffsetX(e.clientX - startX);
  };

  const handleMouseUp = () => {
    if (dragging) {
      if (offsetX > 100) {
        setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
      } else if (offsetX < -100) {
        setCurrentIndex((prev) => (prev + 1) % totalSlides);
      }
      setDragging(false);
      setOffsetX(0);
      sliderWrapperRef.current.style.transition = 'transform 0.5s ease';
    }
  };

  const goToPage = (index) => setCurrentIndex(index);

  const paginationRange = () => {
    const range = [];
    if (totalSlides <= 3) {
      return Array.from({ length: totalSlides }, (_, i) => i);
    }

    if (currentIndex === 0) {
      range.push(0, 1, 2);
    } else if (currentIndex === totalSlides - 1) {
      range.push(totalSlides - 3, totalSlides - 2, totalSlides - 1);
    } else {
      range.push(currentIndex - 1, currentIndex, currentIndex + 1);
    }

    return range;
  };

  return (
    <div className="slider-container">
      <div
        className="slider-wrapper"
        ref={sliderWrapperRef}
        style={{ transform: `translateX(-${(currentIndex * 336)}px)` }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        {Array.from({ length: totalSlides }).map((_, slideIndex) => (
          <div key={slideIndex} className="slide-item">
            <div className="slide-images">
              {slides.slice(slideIndex * imagesPerSlide, (slideIndex + 1) * imagesPerSlide).map((slide) => (
                <img key={slide.id} src={slide.image} alt={`Slide ${slide.id}`} className="slide-image" />
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="pagination">
        {paginationRange().map((index) => (
          <button
            key={index}
            className={`pagination-button ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToPage(index)}
          >
            &#8226;
          </button>
        ))}
      </div>
    </div>
  );
};

export default Slider;
