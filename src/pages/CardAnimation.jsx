import React from 'react';
import Tilt from 'react-tilt';
import { Parallax } from 'react-mouse-parallax';


const CardAnimation = () => {
  return (
    <Parallax
      className="custom-parallax"
      xFactor={-0.01}
      yFactor={0.01}
      styleInner={{
        background: 'linear-gradient(45deg, #4d74e6, #609ae6)',
      }}
    >
      <Tilt className="custom-tilt" options={{ max: 25, scale: 1.05 }}>
        <div className="custom-card">
          <div className="custom-content">
            <h2>Title</h2>
            <p>Description</p>
          </div>
        </div>
      </Tilt>
    </Parallax>
  );
};

export default CardAnimation;
