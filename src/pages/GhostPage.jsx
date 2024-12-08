import React from 'react';
import { useNavigate } from 'react-router-dom';
import './GhostPage.css';

function GhostPage() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/stars');
  };

  return (
    <div className="ghost-container" onClick={handleClick}>
      <div className="ghost">👻</div>
      <button className="glow-on-hover" type="button">HAANJii, Click Click!🖱️</button>
    </div>
  );
}

export default GhostPage;
