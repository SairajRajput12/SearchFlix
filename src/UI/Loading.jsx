import React from 'react';
import Lottie from 'lottie-react';
import myAnimation from '../Animation/Loading.json';
import './Loading.css'; 

const LoadingComponent = () => {
  return (
    <div className="loading-overlay">
      <div className="loading-container">
        <Lottie 
          animationData={myAnimation} 
          loop={true}
          className="loading-animation"
        />
        <p className="loading-text">Loading...</p>
      </div>
    </div>
  );
};

export default LoadingComponent;
