import * as React from 'react';
import axios from 'axios';
import styled from "styled-components";

const StarButton = styled.button`
width: 20em;
height: 5em;
background: black;
`;

const StarText = styled.span`
color: #FFE81F;
font-size: 20px;
`

const Buttonables = ({ request }) => {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
      axios.get(request).then(response => {
        setData(response.data.results)
      });
  }, []);

  return (
    <>
      <h1>The Aliens</h1>
      <div>
      {
        data && data.map((alien) => (
          <StarButton key={alien.name}>
            <StarText> {alien.name} </StarText>       
          </StarButton>
        ))
      }
      </div>
    </>
  )
}

export default Buttonables;