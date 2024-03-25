import React from 'react';
import '../App.css';
import styled from 'styled-components';

// styling for the  heading h2
const Textt = styled.h2`
  margin-bottom: 40px;
  margin-top: 100px;
  color: rgb(83, 168, 101);
`;

// Text component for the last pargraphe
const Text = () => {
  return (
    <div>
        <Textt>ABOUT US</Textt>
      <p>Welcome to our Company <h6> DESIGN INTERIOR</h6> where we transform spaces into exquisite havens of style, comfort <br/>
          and functionality. Our passion for interior design is reflected in every project we undertake,  <br/>
          as we strive to create personalized and stunning environments that resonate with our clients' unique tastes and lifestyles. <br/>
          From timeless elegance to contemporary flair, our team of skilled designers brings creativity and expertise to every corner of your home. <br/>
          Whether you're envisioning a chic modern living room, a cozy bedroom retreat, or a fully functional and aesthetically pleasing kitchen, <br/> 
          we are here to turn your dreams into reality. Explore our portfolio and discover how we blend artistry with functionality,  <br/>
          crafting interiors that not only captivate the eye but also enhance the way you live.  <br/>
        Your journey to a beautifully designed home begins here with <h6> DESIGN INTERIOR</h6></p>
    </div>
  )
}

export default Text ;
