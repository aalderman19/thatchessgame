import React from 'react';
import styled from 'styled-components';
import Color from '../constants/Color';
import Piece from '../constants/Piece';
import BlackPawn from '../../assets/img/pieces/black/chess-pawn.png';
import BlackBishop from '../../assets/img/pieces/black/chess-bishop.png';
import BlackKing from '../../assets/img/pieces/black/chess-king.png';
import BlackKnight from '../../assets/img/pieces/black/chess-knight.png';
import BlackQueen from '../../assets/img/pieces/black/chess-queen.png';
import BlackRook from '../../assets/img/pieces/black/chess-rook.png';
import WhitePawn from '../../assets/img/pieces/white/chess-pawn.png';
import WhiteBishop from '../../assets/img/pieces/white/chess-bishop.png';
import WhiteKing from '../../assets/img/pieces/white/chess-king.png';
import WhiteKnight from '../../assets/img/pieces/white/chess-knight.png';
import WhiteQueen from '../../assets/img/pieces/white/chess-queen.png';
import WhiteRook from '../../assets/img/pieces/white/chess-rook.png';

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
`;

const StyledButton = styled.button`
  width: 100%;
  height: 100%;
  background: none;
  border: none;
`;

export default ChessPiece = (props) => {
  return (
    <StyledButton
      onClick={(event) => {
        event.stopPropagation();
        props.handleClick();
      }}>
      <StyledImage
        src={boardPieceImage(props.piece, props.color)}
        alt={boardPieceAltText(props.piece, props.color)}
      />
    </StyledButton>
  );
};

const boardPieceImage = (piece, color) => {
  if (color === Color.Black) {
    switch (piece) {
      case Piece.Pawn:
        return BlackPawn;
      case Piece.Rook:
        return BlackRook;
      case Piece.Bishop:
        return BlackBishop;
      case Piece.Knight:
        return BlackKnight;
      case Piece.Queen:
        return BlackQueen;
      case Piece.King:
        return BlackKing;
    }
  }

  if (color === Color.White) {
    switch (piece) {
      case Piece.Pawn:
        return WhitePawn;
      case Piece.Rook:
        return WhiteRook;
      case Piece.Bishop:
        return WhiteBishop;
      case Piece.Knight:
        return WhiteKnight;
      case Piece.Queen:
        return WhiteQueen;
      case Piece.King:
        return WhiteKing;
    }
  }
};

const boardPieceAltText = (piece, color) => {
  if (color === Color.Black) {
    switch (piece) {
      case Piece.Pawn:
        return 'Black Pawn';
      case Piece.Rook:
        return 'Black Rook';
      case Piece.Bishop:
        return 'Black Bishop';
      case Piece.Knight:
        return 'Black Knight';
      case Piece.Queen:
        return 'Black Queen';
      case Piece.King:
        return 'Black King';
    }
  }

  if (color === Color.White) {
    switch (piece) {
      case Piece.Pawn:
        return 'White Pawn';
      case Piece.Rook:
        return 'White Rook';
      case Piece.Bishop:
        return 'White Bishop';
      case Piece.Knight:
        return 'White Knight';
      case Piece.Queen:
        return 'White Queen';
      case Piece.King:
        return 'White King';
    }
  }
};
