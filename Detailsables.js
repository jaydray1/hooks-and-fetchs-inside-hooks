import * as React from 'react';
import styled from "styled-components";

const StyledDetails = styled.div`
display: flex;
height: 100%;
width: 75%;
border: 2px solid red;
`;

const Detailsables = ({ oneAlien }) => {

  React.useEffect(() => {
    console.log('this is the one alien', oneAlien);
  }, [oneAlien])
  return (
    <StyledDetails>
      <h3>{oneAlien.birth_year}</h3>
      <h3>{oneAlien.eye_color}</h3>
      <h3>{oneAlien.eye_color}</h3>
    </StyledDetails>
  )
}

export default Detailsables;