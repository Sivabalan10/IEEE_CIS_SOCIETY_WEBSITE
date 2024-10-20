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
    <div
      style={{
        marginTop: '80px',
        overflow: 'hidden',
        height: '100vh',
        fontFamily: 'Poppins, sans-serif',
        backgroundColor: 'transparent', // Changed to transparent
      }}
    >
      <h2
        style={{
          fontSize: '4rem',
          textAlign: 'center',
          margin: '24px 0',
          letterSpacing: '0.05em',
        }}
      >
        <span style={head}>Meet our </span><span style={gradientTextStyle}>Founder</span>
      </h2>

      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
        }}
      >
        <div
          className={`image-container ${scrollDirection === 'down' ? 'move-right' : 'move-left'}`}
          style={{
            width: '45%',
            maxWidth: '600px',
            padding: '0 8px',
          }}
        >
          <img
            src={codeImg}
            alt="Coding"
            style={{
              width: '100%',
              height: 'auto',
              display: 'block',
              margin: '0 auto',
            }}
          />
        </div>

        <div
          className={`text-container ${scrollDirection === 'down' ? 'move-left' : 'move-right'}`}
          style={{
            width: '45%',
            padding: '0 8px',
          }}
        >
          <h2 style={{ fontSize: '3rem', marginBottom: '8px', color: 'white' ,fontFamily: 'TT Neoris, sans-serif', // Apply the TT Neoris font
   // Ensure it is bold
  fontStyle: 'italic',}}>Weeknd</h2>
          
          <p style={{ fontSize: '1.5rem', color: '#999', marginBottom: '8px' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fermentum elit sed
            libero luctus fringilla. Fusce eget augue id nulla blandit maximus ut semper leo.
          </p>
        </div>
      </div>
    </div>
  );
};

const gradientTextStyle = {
  backgroundImage: 'linear-gradient(to right, #3b82f6, #1e40af)',
  WebkitBackgroundClip: 'text',
  color: 'transparent',
  fontFamily: 'TT Neoris, sans-serif', // Apply the TT Neoris font
  fontWeight: 'bold', // Ensure it is bold
  fontStyle: 'italic',
};

const head ={
  fontFamily: 'TT Neoris, sans-serif', // Apply the TT Neoris font
  fontWeight: 'bold', // Ensure it is bold
  fontStyle: 'italic',
}

export default Founder;
