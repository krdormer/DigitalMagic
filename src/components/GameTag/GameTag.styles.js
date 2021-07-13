import styled from 'styled-components';

export const GameTagStyles = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const GameTagImageStyles = styled.img`
  width: 18vw;
  height: 30vh;
  background-color: #023e8a;
  color: #03045e;
  border: 2px solid black;
  border-radius: 10px;
  box-shadow: 4px 8px rgb(200, 200, 200);
  opacity: 0.75;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0px 0px 0px black;
    cursor: pointer;
  }
`;
