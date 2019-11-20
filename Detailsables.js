import * as React from 'react';
import styled from "styled-components";

const StyledDetails = styled.div`
display: flex;
flex-direction: column;
height: 100%;
width: 40em;
border: 2px solid orange;
`;

const Detailsables = ({ oneAlien }) => {

  return (
      <StyledDetails>
        <h3>Date of Birth:{oneAlien.birth_year}</h3>
        <h3>Height:{oneAlien.height}</h3>
        <h3>Eye Color:{oneAlien.eye_color}</h3>
      </StyledDetails>
  )
}

export default Detailsables;