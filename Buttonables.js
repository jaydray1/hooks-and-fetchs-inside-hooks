import * as React from 'react';
import axios from 'axios';
import styled from "styled-components";

const StarButton = styled.button`
width: 20em;
height: 5em;
background: black;
margin-bottom: 2em;
`;

const StarText = styled.span`
color: #FFE81F;
font-size: 20px;
`

const Buttonables = ({ request }) => {
  const [data, setData] = React.useState([]);
  const [activeStarPerson, setActiveStarPerson] = React.useState(false);

  React.useEffect(() => {
      axios.get(request).then(response => {
        setData(response.data.results)
      });
  }, []);

const handleToggle = () => {
  setActiveStarPerson(!activeStarPerson)
}

  return (
    <div>
      <h1>The Aliens</h1>
      {data && data.map((alien, index) => (
        <div>
          <StarButton key={index} onClick={handleToggle}>
            <StarText> {alien.name}</StarText>       
          </StarButton>
          <div>
            {activeStarPerson && (
              <p>{alien.birth_year}</p>
            )}
          </div>
        </div>
        ))
        }
    </div>
  )
}

export default Buttonables;