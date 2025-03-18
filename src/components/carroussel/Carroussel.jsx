import '../carroussel/Carroussel.css';
import { useState } from 'react';

function Carroussel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const items = [
    "*ੈ✩‧₊˚༺☆༻*ੈ✩‧₊˚",
    "*ੈ✩‧₊˚༺☆༻*ੈ✩‧₊˚",
    "*ੈ✩‧₊˚༺☆༻*ੈ✩‧₊˚",
    "*ੈ✩‧₊˚༺☆༻*ੈ✩‧₊˚",
    "*ੈ✩‧₊˚༺☆༻*ੈ✩‧₊˚",
    "*ੈ✩‧₊˚༺☆༻*ੈ✩‧₊˚",
    "*ੈ✩‧₊˚༺☆༻*ੈ✩‧₊˚",
    "*ੈ✩‧₊˚༺☆༻*ੈ✩‧₊˚"
  ];

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };

  return (
    <div className="carousel-container">
      <div className="carousel-track" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {items.map((item, index) => (
          <div className="carousel-item" key={index}>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Carroussel;
