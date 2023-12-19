import React from 'react';
import styled from 'styled-components';
import Color from '../constants/Color';
import Piece from '../constants/Piece';

const StyledBoardSquare = styled.div`
  background: ${(props) => (props.$squarecolor == Color.Black ? 'black' : 'white')};
  height: 100%;
  max-width: 12.5%;
  aspect-ratio: 1/1;

  &.selected {
    position: relative;

    &:after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      background-color: rgba(90, 237, 120, 0.5);
    }
  }

  &.valid-move {
    position: relative;

    &:after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      background-color: rgba(245, 208, 122, 0.5);
    }
  }

  &.capture-move {
    position: relative;

    &:after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      background-color: rgba(252, 112, 96, 0.5);
    }
  }
`;

const BoardSquare = (props) => (
  <StyledBoardSquare
    className={generateClassName(props.square, props.activeMoveset, props.activeSquare)}
    $squarecolor={props.squareColor}
    onClick={(event) => {
      event.stopPropagation();
      props.handleClick();
    }}>
    {props.children}
  </StyledBoardSquare>
);

const generateClassName = (square, activeMoveset, activeSquare) => {
  if (activeSquare === square) {
    return 'selected';
  }

  for (let i = 0; i < activeMoveset.length; i++) {
    if (activeMoveset[i].to === square) {
      if (activeMoveset[i].flags.includes('c') || activeMoveset[i].flags.includes('e')) {
        return 'capture-move';
      }
      return 'valid-move';
    }
  }
};

export default BoardSquare;
