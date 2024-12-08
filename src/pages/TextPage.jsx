import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './TextPage.css';

function TextPage() {
  const navigate = useNavigate();
  const [displayedText, setDisplayedText] = useState(''); // state to hold displayed text

  useEffect(() => {
    const aText = [
      "Tumhari Har Aarzoo POORI Ho😍, Tumhari Har Dua QUBOOL Ho",
      "Tumhari Zindagi Khushiyon Se Bharpoor Ho, Aapki Umr Daraz Ho Aur HAR KHUSHI NASEEB Ho",
      "Saalgirah Mubarak Ho(˶˃ ᵕ ˂˶)˚.🎀༘⋆",
      "chal bohot chaap liya Internet se mudde par aate hai..⛇☃︎",
      "Khush rahe, Jyaada Socha nahh kar࣪ ִֶָ☾...Ohkayiee??😒",
      "Sab accha hoga kyunki sir bohot acche hai hamare𓂃 ࣪˖ ִֶָ🐇་༘࿐, Yeh yaad rakhna bohot aage badhega kisi mahan MAHILA ne kaha haiִֶָ..*evil smile👧🏾",
      "Aapke mayar pe to pura nahi utraa hoga..!", 
      "but still",
      "BOLEGA TO PITEGAA(¬`‸´¬)💀..HAHAHA(˶˃ ᵕ ˂˶)👻",
      "😍May you be HAPPY EVERYDAYYYY🤗"
    ];
    
    const iSpeed = 100;
    let iIndex = 0;
    let iTextPos = 0;
    let sContents = '';
    let iRow;
    
    function typewriter() {
      sContents = '';
      iRow = Math.max(0, iIndex - 20); // Scroll effect
      const currentText = aText[iIndex];
      
      while (iRow < iIndex) {
        sContents += aText[iRow++] + '\n';
      }

      // Append the current line being typed to the displayed text, adding <br /> for a new line
      setDisplayedText(sContents + currentText.substring(0, iTextPos) + "_");

      if (iTextPos++ === currentText.length) {
        iTextPos = 0;
        iIndex++;
        if (iIndex !== aText.length) {
          setTimeout(typewriter, 500);
        } else {
          setTimeout(() => navigate('/thankyou'), 2000); // Navigate to ThankYouPage
        }
      } else {
        setTimeout(typewriter, iSpeed);
      }
    }

    typewriter();
  }, [navigate]);

  return (
    <div className="text-container">
      <div className="stars-container">
        <div className="stars"></div>
        <div className="twinkling"></div>
        <div className="clouds"></div>
      </div>
      <div id="typedtext">
        {displayedText.split("\n").map((line, index) => (
          <div key={index}>{line}</div>  // Each line will be wrapped in a <div> for display
        ))}
      </div>
      <div className="bubbles">
        {Array.from({ length: 50 }).map((_, index) => (
          <div key={index} className="bubble"></div>
        ))}
      </div>
    </div>
  );
}

export default TextPage;
