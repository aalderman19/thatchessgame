import React from 'react';
import styled from 'styled-components';
import BoardSquare from './BoardSquare';
import Color from '../constants/Color';
import Piece from '../constants/Piece';
import ChessPiece from './ChessPiece';

const BoardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 70vh;
  justify-content: center;
  align-items: center;
`;

const RankWrapper = styled.div`
  display: flex;
  flex-direction: row;
  max-height: 12.5%;
  width: 100%;
  aspect-ratio: 8/1;
  justify-content: center;
`;

export default Board = (props) => {
  return (
    <BoardWrapper>
      {buildBoard(
        props.boardState,
        props.handleBoardClick,
        props.activeMoveset,
        props.activeSquare
      )}
    </BoardWrapper>
  );
};

const buildBoard = (boardState, handleBoardClick, activeMoveset, activeSquare) => {
  const rank = [8, 7, 6, 5, 4, 3, 2, 1];
  const file = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
  const pieceType = {
    r: Piece.Rook,
    b: Piece.Bishop,
    n: Piece.Knight,
    q: Piece.Queen,
    k: Piece.King,
    p: Piece.Pawn
  };

  const colorType = {
    b: Color.Black,
    w: Color.White
  };

  let board = [];

  for (let i = 0; i < boardState.length; i++) {
    let currentRank = [];
    for (let j = 0; j < boardState[i].length; j++) {
      if (i % 2 === 0) {
        if (j % 2 === 0) {
          currentRank.push(
            <BoardSquare
              key={`${file[j]}${rank[i]}`}
              squareColor={Color.White}
              handleClick={() => {
                handleBoardClick(`${file[j]}${rank[i]}`);
              }}
              activeMoveset={activeMoveset}
              activeSquare={activeSquare}
              square={`${file[j]}${rank[i]}`}>
              {boardState[i][j] && (
                <ChessPiece
                  piece={boardState[i][j].type}
                  color={boardState[i][j].color}
                  handleClick={() => {
                    handleBoardClick(boardState[i][j].square);
                  }}
                />
              )}
            </BoardSquare>
          );
        } else {
          currentRank.push(
            <BoardSquare
              key={`${file[j]}${rank[i]}`}
              squareColor={Color.Black}
              handleClick={() => {
                handleBoardClick(`${file[j]}${rank[i]}`);
              }}
              activeMoveset={activeMoveset}
              activeSquare={activeSquare}
              square={`${file[j]}${rank[i]}`}>
              {boardState[i][j] && (
                <ChessPiece
                  piece={boardState[i][j].type}
                  color={boardState[i][j].color}
                  handleClick={() => {
                    handleBoardClick(boardState[i][j].square);
                  }}
                />
              )}
            </BoardSquare>
          );
        }
      } else {
        if (j % 2 === 0) {
          currentRank.push(
            <BoardSquare
              key={`${file[j]}${rank[i]}`}
              squareColor={Color.Black}
              handleClick={() => {
                handleBoardClick(`${file[j]}${rank[i]}`);
              }}
              activeMoveset={activeMoveset}
              activeSquare={activeSquare}
              square={`${file[j]}${rank[i]}`}>
              {boardState[i][j] && (
                <ChessPiece
                  piece={boardState[i][j].type}
                  color={boardState[i][j].color}
                  handleClick={() => {
                    handleBoardClick(boardState[i][j].square);
                  }}
                />
              )}
            </BoardSquare>
          );
        } else {
          currentRank.push(
            <BoardSquare
              key={`${file[j]}${rank[i]}`}
              squareColor={Color.White}
              handleClick={() => {
                handleBoardClick(`${file[j]}${rank[i]}`);
              }}
              activeMoveset={activeMoveset}
              activeSquare={activeSquare}
              square={`${file[j]}${rank[i]}`}>
              {boardState[i][j] && (
                <ChessPiece
                  piece={boardState[i][j].type}
                  color={boardState[i][j].color}
                  handleClick={() => {
                    handleBoardClick(boardState[i][j].square);
                  }}
                />
              )}
            </BoardSquare>
          );
        }
      }
    }
    board.push(<RankWrapper key={`rank-${rank[i]}`}>{currentRank}</RankWrapper>);
  }

  return board;
};
