import React from 'react';
import { Text } from './style';

const TextComponent = ({
  color,
  fontSize,
  fontWeight,
  marginBottom,
  animation,
  content }) => {
  return (
    <Text
      color={color}
      animation={animation}
      fontSize={fontSize}
      fontWeight={fontWeight}
      marginBottom={marginBottom}
    >
      {content}
    </Text>
  );
}

export default TextComponent;
