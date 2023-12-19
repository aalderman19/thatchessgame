import React, { useState } from 'react';
import styled from 'styled-components';
import PlayerHeader from '../components/PlayerHeader';
import Board from '../components/Board';
import chessGame from '../utils/ChessGame';

const GameScreenWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export default GameScreen = (props) => {
  let [activeSquare, setActiveSquare] = useState('');
  let [activeMoveset, setActiveMoveset] = useState([]);
  let [showPromotionPrompt, setShowPromotionPrompt] = useState(false);
  let [isGameActive, setIsGameActive] = useState(true);

  let handleBoardClick = (square) => {
    if (activeSquare) {
      // Check to see if the user clicked a square that is a move.
      for (let i = 0; i < activeMoveset.length; i++) {
        if (activeMoveset[i].to === square) {
          // TODO: Pop Up promotion screen if move would result in a promotion.
          if (activeMoveset[i].flags.includes('p')) {

          };
          chessGame.move(activeMoveset[i]);
          break;
        }
      }

      setActiveSquare('');
      setActiveMoveset([]);
    }

    const moves = chessGame.moves({ square, verbose: true });

    console.log(moves);

    if (moves.length > 0) {
      setActiveSquare(square);
      setActiveMoveset(moves);
    }
  };

  return (
    <GameScreenWrapper>
      <PlayerHeader isPlaying={false} />
      <Board
        boardState={chessGame.board()}
        handleBoardClick={handleBoardClick}
        activeMoveset={activeMoveset}
        activeSquare={activeSquare}
      />
      <PlayerHeader isPlaying={true} />
    </GameScreenWrapper>
  );
};
