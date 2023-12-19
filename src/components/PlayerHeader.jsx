import React from 'react';
import styled from 'styled-components';

const PlayerHeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 15vh;
  overflow: hidden;
`;

const PlayerImageWrapper = styled.div`
  width: 2vw;
  height: 2vw;
`;

const PlayerImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const PlayerDetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const TurnIndicator = styled.div`
  background: ${(props) => (props.$playing ? 'lime' : 'white')};
  border: 5px solid black;
  width: 20px;
  height: 20px;
`;

export default PlayerHeader = (props) => {
  return (
    <PlayerHeaderWrapper>
      <PlayerImageWrapper>
        <PlayerImage />
      </PlayerImageWrapper>
      <PlayerDetailsWrapper>
        <p>Player Name</p>
        <p>color</p>
        <p>rank</p>
      </PlayerDetailsWrapper>
      <TurnIndicator $playing={props.isPlaying}></TurnIndicator>
    </PlayerHeaderWrapper>
  );
};
