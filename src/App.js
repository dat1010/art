import React from 'react';
import Carousel from 'react-gallery-carousel';
import 'react-gallery-carousel/dist/index.css';

const App = () => {
  const images = ["babyYoda.jpg", "fett.jpg", "lion.jpg"].map((size) => ({
    src: `${size}`
  }));

  return (
    <Carousel images={images} />
  );
};

export default App;