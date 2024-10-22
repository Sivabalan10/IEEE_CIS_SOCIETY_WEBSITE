import { useEffect, useState } from 'react';
import codeImg from './assets/Group.png'; // Your image file
import './Founder.css'; // Import your CSS file for styles

const Founder = () => {
  const [scrollDirection, setScrollDirection] = useState(null);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setScrollDirection('down');
      } else {
        setScrollDirection('up');
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <div className="founder-container">
      <h2 className="founder-heading">
        <span className="head">Meet our </span>
        <span className="gradient-text">Founder</span>
      </h2>

      <div className="content-wrapper">
        <div
          className={`image-container ${
            scrollDirection === 'down' ? 'move-right' : 'move-left'
          }`}
        >
          <img src={codeImg} alt="Coding" className="code-image" />
        </div>

        <div
          className={`text-container ${
            scrollDirection === 'down' ? 'move-left' : 'move-right'
          }`}
        >
          <h2 className="founder-name">Weeknd</h2>
          <p className="founder-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
            fermentum elit sed libero luctus fringilla. Fusce eget augue id
            nulla blandit maximus ut semper leo.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Founder;
