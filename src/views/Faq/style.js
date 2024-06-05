import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(24px);
  }
  to {
    opacity: 1;
    transform: translateY(0px);
  }
`

const FAQContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 120px;
  margin-bottom: 80px;
  @media (max-width: 768px) {
    padding: 80px 24px 0 24px;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const QuestionList = styled.div`
  animation: ${fadeIn} 1s 0.5s ease forwards;
  opacity: 0;
  display: flex;
  flex-direction: column;
  gap: 24px;
  @media (max-width: 768px) {
    gap: 8px;
  }
`;

export { FAQContainer, ContentContainer, QuestionList };
