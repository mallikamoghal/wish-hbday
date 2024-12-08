import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./StarsPage.css";

const StarsPage = () => {
  const navigate = useNavigate();
  const [isTextDone, setIsTextDone] = useState(false);

  const texts = [
    "Heyy Champpp!😎",
    "OYYIEE🍾",
    "PARTTYY??🕶️",
    "Hello mitrr😎",
    "HOYYEE🥳",
    "OYIEE LOVELYY🎀",
    "SAB BADHIYAA??🤔",
    "GURUJIII🎓",    
    "ENJOYY!!🎊",
    "PRANAM🙏",  
    "Be Happy👶",
    "kya bolte sharmaajiii??🎀",
    "Cherss🥂 to another year",
    "SAKHTT Laundaa😼",
    
  ];

  useEffect(() => {
    const createStars = () => {
      const container = document.querySelector(".stars-container");
      if (!container) return;

      for (let i = 0; i < 150; i++) {
        const star = document.createElement("div");
        star.className = "star";
        star.style.top = `${Math.random() * 100}vh`;
        star.style.left = `${Math.random() * 100}vw`;
        star.style.width = `${Math.random() * 3 + 1}px`;
        star.style.height = `${Math.random() * 3 + 1}px`;
        star.style.animationDuration = `${Math.random() * 5 + 5}s`;
        container.appendChild(star);
      }
    };

    const displayText = () => {
      const textContainer = document.querySelector(".text-container");
      if (!textContainer) return;

      let currentIndex = 0;

      const interval = setInterval(() => {
        if (currentIndex >= texts.length) {
          clearInterval(interval);
          setIsTextDone(true);
          return;
        }

        const randomX = Math.random() * 90 + "%";
        const randomY = Math.random() * 90 + "%";

        const textElement = document.createElement("div");
        textElement.className = "random-text";
        textElement.style.left = randomX;
        textElement.style.top = randomY;
        textElement.innerText = texts[currentIndex];

        textContainer.appendChild(textElement);

        setTimeout(() => {
          textElement.style.opacity = 0; // Fade out
        }, 3000);

        currentIndex++;
      }, 1500);
    };

    createStars(); // Generate stars
    displayText(); // Display text
  }, [texts]);

  useEffect(() => {
    if (isTextDone) {
      setTimeout(() => navigate("/cake"), 2000); // Redirect to the next page
    }
  }, [isTextDone, navigate]);

  return (
    <div className="stars-page-container">
      <div className="stars-container"></div>
      <div className="text-container"></div>
    </div>
  );
};

export default StarsPage;
