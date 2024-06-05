import styled, { css, keyframes } from 'styled-components';

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

const blink = keyframes`
  0% { opacity: 1; }
  50% { opacity: 0.5; }
  100% { opacity: 1; }
`

const RecruitContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    padding-top: 80px;
  }
`

const ContentContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  ${(props) => props.background && css`
    &:before {
      z-index: -1;
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      
      animation: ${blink} 4s infinite ease-in-out;
      background-image: radial-gradient(circle at bottom, #5B7CFA, #0B0C15 57%)
    }
  `}
`;

const SubTitleText = styled.div`
  animation: ${fadeIn} 1s 0.2s ease forwards;
  opacity: 0;
  font-size: 32px;
  font-weight: 500;
  color: #94AAFF;
  margin-bottom: 80px;
  @media (max-width: 768px) {
    font-size: 16px;
    margin-bottom: 40px;
  }
`;

const Text = styled.div`
  font-size: 48px;
  font-weight: bold;
  color: ${(props) => props.color ? '#5B7CFA' : '#FFFFFF'};
  @media (max-width: 768px) {
    font-size: 24px;
  }
`

export {
  RecruitContainer,
  ContentContainer,
  SubTitleText,
  Text,
};
