import React, { useState } from 'react';
import {
  StyledFAQItem,
  Question,
  Wrap,
  QuestionQMark,
  QuestionText,
  Icon,
  Answer,
  AnswerText
} from './style';
import ArrowIcon from '../../../assets/arrow-icon.svg';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleOpen = () => {
    setIsOpen(!isOpen);
  }

  return (
    <StyledFAQItem isOpen={isOpen}>
      <Question onClick={toggleOpen}>
        <Wrap>
          <QuestionQMark>Q.</QuestionQMark>
          <QuestionText>{question}</QuestionText>
        </Wrap>
        <Icon src={ArrowIcon} isOpen={isOpen} />
      </Question>
      <Answer isOpen={isOpen}>
      {answer.split('\n').map((line, index) => (
        <AnswerText key={index}>{line}</AnswerText>
      ))}
      </Answer>
    </StyledFAQItem>
  );
}

export default FAQItem;
