import React, { useState } from "react"; 

const Techstack = () => {
  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>Developers &lt;/&gt;</h2>
      <div style={cardContainerStyle}>
        {DevelopersData.map((data, index) => (
          <DeveloperCard key={index} data={data} />
        ))}
      </div>
    </div>
  );
};

// DeveloperCard Component
const DeveloperCard = ({ data }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);
  const handleClick = () => alert(`You clicked on ${data.name}`);

  return (
    <div
      style={{
        ...testimonialWrapperStyle,
        cursor: "pointer",
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      <div
        style={{
          ...testimonialCardStyle,
          transform: isHovered ? "scale(1.05)" : "scale(1)",
          boxShadow: isHovered
            ? "0 8px 24px rgba(0, 0, 0, 0.2)"
            : "0 4px 16px rgba(0, 0, 0, 0.1)",
        }}
      >
        <p style={cardTextStyle}>
          "Coding is the closest thing we have to magic."
        </p>
        <div style={profileStyle}>
          <img
            src={data.img}
            alt={`Developer ${data.name}`}
            style={{
              ...imageCardStyle,
              transform: isHovered ? "scale(1.1)" : "scale(1)",
            }}
          />
          <div>
            <h6 style={nameStyle}>{data.name}</h6>
            <span style={nameSubtitleStyle}>{data.title}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const DevelopersData = [
  { img: 'https://randomuser.me/api/portraits/men/1.jpg', name: 'John Doe', title: 'Full-Stack Developer' },
  { img: 'https://randomuser.me/api/portraits/women/2.jpg', name: 'Jane Smith', title: 'UI/UX Designer' },
  { img: 'https://randomuser.me/api/portraits/men/3.jpg', name: 'Mike Johnson', title: 'Backend Developer' },
];

// Styles
const containerStyle = {
  marginTop: '80px',
  padding: '40px 16px',
  fontFamily: 'Poppins, sans-serif',
};

const headingStyle = {
  fontSize: '4rem',
  textAlign: 'center',
  margin: '40px 0',
  color: 'white',
  letterSpacing: '0.07em',
  fontFamily: 'TT Neoris, sans-serif',
  fontWeight: 'bold',
  fontStyle: 'italic',
};

const cardContainerStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
};

const testimonialWrapperStyle = {
  width: '100%',
  maxWidth: '33%',
  padding: '16px',
  boxSizing: 'border-box',
};

const testimonialCardStyle = {
  backgroundColor: '#f9f9f9',
  borderRadius: '16px',
  padding: '32px',
  border: '1px solid #ddd',
  fontWeight: '300',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
};

const cardTextStyle = {
  fontSize: '1.125rem',
  fontStyle: 'italic',
  color: '#555',
  marginBottom: '16px',
};

const profileStyle = {
  display: 'flex',
  marginTop: '32px',
  alignItems: 'center',
  flexDirection: 'row', // Default to row
};

const imageCardStyle = {
  width: '64px',
  height: '64px',
  borderRadius: '50%',
  marginRight: '16px',
  border: '1px solid #3b82f6',
  boxShadow: '0px 0px 10px rgba(59, 130, 246, 0.5)',
  transition: 'transform 0.3s ease',
};

const nameStyle = {
  fontSize: '1rem',
  fontWeight: '600',
  color: '#333',
  marginBottom: '4px',
};

const nameSubtitleStyle = {
  fontSize: '0.875rem',
  fontStyle: 'italic',
  color: '#777',
};

// Inline Media Query Styles
const mediaQueryStyles = `
  @media (max-width: 768px) {
    h2 {
      font-size: 2.5rem;
    }
    ${testimonialWrapperStyle.maxWidth = '100%'};
    ${profileStyle.flexDirection = 'column'}; // Stack image and text vertically
    ${imageCardStyle.marginRight = '0'}; // Remove margin when stacked
    ${imageCardStyle.marginBottom = '12px'}; // Add spacing between image and text
  }
`;

// Inject media query styles into <style> tag
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = mediaQueryStyles;
document.head.appendChild(styleSheet);

export default Techstack;
