import React from "react";
import myImage from "./assets/cv.jpg";
import anotherImage from "./assets/ML.jpg";

const AboutCard = () => {
  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>
        IEEE <strong className="purple">CIS</strong>
      </h1>
      <p style={descriptionStyle}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fermentum
        elit sed libero luctus fringilla.
      </p>

      <div style={contentWrapperStyle}>
        <img src={myImage} alt="Overview" style={imageStyle} />
        <div style={textBlockStyle}>
          <h2 style={subHeadingStyle}>Image 1 Overview</h2>
          <p style={textDescriptionStyle}>
            This image highlights the achievements of our computational society.
          </p>
        </div>
      </div>

      <div style={contentWrapperStyle}>
        <div style={textBlockStyle}>
          <h2 style={subHeadingStyle}>Image 2 Overview</h2>
          <p style={textDescriptionStyle}>
            Discover how our members leverage cutting-edge technologies.
          </p>
        </div>
        <img src={anotherImage} alt="Another Visual" style={imageStyle} />
      </div>
    </div>
  );
};

// Styles
const containerStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginTop: "80px",
  fontFamily: "Poppins, sans-serif",
  padding: "16px",
};

const headingStyle = {
  fontSize: "4rem",
  textAlign: "center",
  fontFamily: "TT Neoris, sans-serif",
  fontWeight: "bold",
  fontStyle: "italic",
};

const descriptionStyle = {
  marginTop: "20px",
  fontSize: "1.125rem",
  textAlign: "center",
  color: "#555",
  maxWidth: "800px",
};

const contentWrapperStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-around",
  margin: "20px 0",
  width: "100%",
  maxWidth: "1200px",
  flexWrap: "wrap",
};

const textBlockStyle = {
  width: "45%",
  padding: "8px",
  boxSizing: "border-box",
};

const imageStyle = {
  width: "45%",
  margin: "8px",
  borderRadius: "8px",
  border: "1px solid #3b82f6",
  boxShadow: "0px 0px 10px rgba(59, 130, 246, 0.5)",
};

const subHeadingStyle = {
  fontSize: "1.5rem",
  color: "#1e40af",
  marginBottom: "8px",
};

const textDescriptionStyle = {
  fontSize: "1rem",
  color: "#666",
  lineHeight: "1.6",
};

// Inline Media Query using JS Styles
const mediaQueryStyles = `
  @media (max-width: 768px) {
    h1 {
      font-size: 3rem;
    }
    .contentWrapperStyle {
      flex-direction: column; /* Stack content vertically */
    }
    .textBlockStyle, .imageStyle {
      width: 100%; /* Make image and text full-width */
      text-align: center; /* Center the text for smaller screens */
    }
    .textBlockStyle {
      margin-top: 16px; /* Add spacing between image and text */
    }
  }
`;

// Injecting Media Styles in <style> tag
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = mediaQueryStyles;
document.head.appendChild(styleSheet);

export default AboutCard;
