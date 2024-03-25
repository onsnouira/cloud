import React from 'react'
import styled from 'styled-components';

// style for the heading h1
const Titlle = styled.h1` text-align: center;
    margin-bottom: 3rem;
    margin-top: 3rem;
    color:#2EFF2E; 
    font-style: italic;
    text-shadow: 0 0 5px #433aa8, 3px -1px 5px #271c6c;`
;
// Title component displaying the title for the website
const Title = () => {
  return (
    <div>
      <Titlle>INTERIOR DESIGN FOR YOUR HOUSE</Titlle>
    </div>
  )
}

export default Title
