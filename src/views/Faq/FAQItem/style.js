import styled from 'styled-components';

const StyledFAQItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const Question = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  cursor: pointer;
  padding: 16px;
  border-bottom: 1px solid #FFFFFF40;
  &:hover {
    background-color: #FFFFFF10;
  }
  &:active {
    background-color: #FFFFFF20;
  }
  @media (max-width: 768px) {
    padding: 16px 0px;
  }
`;

const Wrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const QuestionQMark = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: #5B7CFA;
  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const QuestionText = styled.div`
  font-size: 24px;
  font-weight: 500;
  color: #FFFFFF;
  margin-left: 8px;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const Icon = styled.img`
  width: 32px;
  height: 32px;
  transform: ${(props) => props.isOpen ? 'rotate(90deg)' : 'rotate(0deg)'};
  @media (max-width: 768px) {
    width: 24px;
    height: 24px;
  }
`;

const Answer = styled.div`
  width: 100%;
  padding-left: 16px;
  margin-top: ${(props) => props.isOpen ? '16px' : '0px'};
  height: ${(props) => props.isOpen ? 'auto' : '0px'};
  opacity: ${(props) => props.isOpen ? '1' : '0'};
  overflow: hidden;
  @media (max-width: 768px) {
    padding-left: 0px;
  }
`;

const AnswerText = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: #CAD5FF;
  margin-bottom: 8px;
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export { StyledFAQItem, Question, Wrap, QuestionQMark, QuestionText, Icon, Answer, AnswerText };
