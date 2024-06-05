import React from 'react';
import ArrowIcon from '../../assets/arrow-icon-16.svg';
import {
  ButtonContainer,
  Button,
  ButtonDescription,
  Icon
} from './style';

const ButtonComponent = ({ description, onClick, position, isScroll, text }) => {
  return (
    <ButtonContainer position={position} isScroll={isScroll}>
      {description && (
        <ButtonDescription>
          {description}
        </ButtonDescription>
      )}
      <Button onClick={onClick} position={position} isScroll={isScroll}>
        {text}
        <Icon src={ArrowIcon} style={{ marginLeft: '4px' }} />
      </Button>
    </ButtonContainer>
  )
};

export default ButtonComponent;
