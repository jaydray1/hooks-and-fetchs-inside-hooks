import * as React from 'react';
import axios from 'axios';
import styled from "styled-components";
import Loader from 'react-loader-spinner'
import Detailsables from './Detailsables';

const StarButton = styled.button`
width: 20em;
height: 5em;
background: black;
margin-bottom: 2em;
`;

const StarText = styled.span`
color: #FFE81F;
font-size: 20px;
`;

const BigContainer = styled.div`
display: flex;
border: 2px solid red;
`;

const LeftSideStrongSide = styled.div`
display: flex;
flex-direction: column;
`;
const RightSideJustSide = styled.div`
display: flex;
border: 2px solid blue;
`;

const Buttonables = ({ request }) => {
  const [data, setData] = React.useState([]);
  const [activeStarPerson, setActiveStarPerson] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const [oneAlien, setOneAlien] = React.useState({});

  React.useEffect(() => {
      axios.get(request).then(response => {
        setData(response.data.results);
        setLoading(false);
      });
  }, []);

const handleToggle = (event, index) => {
  setActiveStarPerson(!activeStarPerson);
  setOneAlien(data[index]);
}

  return (
    <BigContainer>
      <h1>The Aliens</h1>
      <LeftSideStrongSide>
        { loading ?
        <Loader
          type="Puff"
          color="#00BFFF"
          height={100}
          width={100}
        />
        :
          <div>
            {data && data.map((alien, index) => (
              <ul>
              <li style={{listStyle: 'none'}}  key={index}>
                <StarButton key={index} onClick={(event) => handleToggle(event, index)}>
                  <StarText> {alien.name}</StarText>       
                </StarButton>
                <div> 
                {
                  activeStarPerson && 
                    <p>{activeStarPerson.birth_year}</p>
                }
                </div>
              </li>
              </ul>
              ))}
          </div>
        }
      </LeftSideStrongSide>
      <RightSideJustSide>
        <Detailsables
          oneAlien={oneAlien}/>
      </RightSideJustSide>
    </BigContainer>
  )
}

export default Buttonables;