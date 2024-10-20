import React from "react";
import myImage from "./assets/cv.jpg"; // Update with your image path
import anotherImage from "./assets/ML.jpg"; // Update with your second image path

const AboutCard = () => {
  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>
        IEEE <strong className="purple">CIS</strong>
      </h1>
      <p style={descriptionStyle}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fermentum elit sed libero luctus fringilla. Fusce eget augue id nulla blandit maximus ut semper leo.
      </p>

      <div style={contentWrapperStyle}>
        <img src={myImage} alt="Overview" style={imageStyle} />
        <div style={textBlockStyle}>
          <h2 style={subHeadingStyle}>Image 1 Overview</h2>
          <p style={textDescriptionStyle}>
            This image highlights the achievements of our computational society. Dive in to learn more about our projects and initiatives.
          </p>
        </div>
      </div>

      <div style={contentWrapperStyle}>
        <div style={textBlockStyle}>
          <h2 style={subHeadingStyle}>Image 2 Overview</h2>
          <p style={textDescriptionStyle}>
            Discover how our members are leveraging cutting-edge technologies in competitions and real-world problem-solving.
          </p>
        </div>
        <img src={anotherImage} alt="Another Visual" style={imageStyle} />
      </div>
    </div>
  );
};

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginTop: '80px',
  fontFamily: 'Poppins, sans-serif',
  padding: '0 16px', // Added padding for smaller screens
};

const headingStyle = {
  fontSize: '6.5em', // Increased font size
  textAlign: 'center',
  letterSpacing: '0.08em',
  fontFamily: 'TT Neoris, sans-serif', // Apply the TT Neoris font
  fontWeight: 'bold', // Ensure it is bold
  fontStyle: 'italic',
};

const descriptionStyle = {
  marginTop: '40px',
  fontSize: '1.125rem',
  textAlign: 'center',
  color: '#555',
  maxWidth: '800px',
};

const contentWrapperStyle = {
  display: 'flex',
  flexDirection: 'row', // Default for larger screens
  alignItems: 'center',
  justifyContent: 'space-around',
  margin: '40px 0',
  width: '100%',
  maxWidth: '1200px',
  flexWrap: 'wrap', // Allow wrapping for smaller screens
};

const textBlockStyle = {
  width: '45%', // Default width for larger screens
  padding: '0 16px',
  boxSizing: 'border-box', // Ensure padding is included in width
};

const subHeadingStyle = {
  fontSize: '1.5rem',
  color: '#1e40af',
  marginBottom: '8px',
};

const textDescriptionStyle = {
  fontSize: '1rem',
  color: '#666',
  lineHeight: '1.6',
};

const imageStyle = {
  width: '45%', // Default width for larger screens
  margin: '8px',
  borderRadius: '8px',
  border: '1px solid #3b82f6',
  boxShadow: '0px 0px 10px rgba(59, 130, 246, 0.5)',
};

export default AboutCard;
