import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';


import ExampleCarouselImage from '../../../components/Example';
import './style.css';

function ControlledCarousel(props) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className='sld'>
      <Carousel className='Cards' activeIndex={index} onSelect={handleSelect}>
        {props.images.map((image, idx) => (
          <Carousel.Item key={idx} className='Cards-box'>
            <ExampleCarouselImage src={image} />
            <Carousel.Caption>
              {/* Add any captions or content here */}
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default ControlledCarousel;
