import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './CakePage.css';

function CakePage() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      document.querySelector('.confetti-container').classList.add('show');
    }, 4000); // Trigger confetti effect after cake animation

    const navigateTimer = setTimeout(() => {
      navigate('/text');
    }, 8000); // Navigate after confetti effect

    return () => {
      clearTimeout(timer);
      clearTimeout(navigateTimer);
    };
  }, [navigate]);

  return (
    <div className="cake-container">
      <div className="animated-background"></div>
      <div className="cake">
        <div className="layer layer5">
          <span className="layer-text">Celebrate</span>
        </div>
        <div className="layer layer4">
          <span className="layer-text">Joy</span>
        </div>
        <div className="layer layer3">
          <span className="layer-text">Happiness</span>
        </div>
        <div className="layer layer2">
          <span className="layer-text">Love</span>
        </div>
        <div className="layer layer1">
          <span className="layer-text">Cheers</span>
        </div>
        <div className="candles">
          <div className="candle">
            <div className="flame"></div>
          </div>
          <div className="candle">
            <div className="flame"></div>
          </div>
          <div className="candle">
            <div className="flame"></div>
          </div>
        </div>
      </div>
      <div className="confetti-container">
        <div className="confetti">
          {Array.from({ length: 50 }).map((_, index) => (
            <i
              key={index}
              style={{
                '--speed': Math.random() * 50 + 10,
                '--bg': `hsl(${Math.random() * 360}, 100%, 50%)`,
                left: `${Math.random() * 100}%`,
              }}
              className={`confetti-piece ${['square', 'rectangle', 'hexagram', 'pentagram', 'dodecagram', 'wavy-line'][Math.floor(Math.random() * 6)]}`}
            ></i>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CakePage;
