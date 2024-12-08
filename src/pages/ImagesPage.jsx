import React from 'react';
    import './ImagesPage.css';

    function ImagesPage() {
      const images = Array.from({ length: 9 }, (_, i) => `https://th.bing.com/th/id/OIP.EP9pXdqjf3W1nb-Xq2KjZQHaE8?rs=1&pid=ImgDetMain`);

      return (
        <div className="wrapper">
          <div className="container">
            {images.map((src, index) => (
              <figure key={index}>
                <a href="#">
                  <div className="img_wrapper">
                    <div className="img_container">
                      <img className="scan" src={src} alt="" />
                    </div>
                  </div>
                  <img className="raw" src={src} alt="" />
                </a>
              </figure>
            ))}
          </div>
        </div>
      );
    }

    export default ImagesPage;
