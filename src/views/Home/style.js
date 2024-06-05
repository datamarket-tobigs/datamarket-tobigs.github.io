import styled, { css, keyframes } from 'styled-components';

const blink = keyframes`
  0% { opacity: 1; }
  50% { opacity: 0.5; }
  100% { opacity: 1; }
`

const TitleBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  margin-bottom: 24px;
  &::before {
    position: absolute;
    top: 0;
    bottom: 0;
    left: -28px;
    content: '';
    width: 12px;
    background-color: #5B7CFA;
  }
  &::after {
    position: absolute;
    top: 0;
    bottom: 0;
    right: -28px;
    content: '';
    width: 12px;
    background-color: #5B7CFA;
  }
  @media (max-width: 768px) {
    margin-bottom: 32px;
    &::before {
      left: 50%;
      transform: translateX(-50%);
      width: 80px;
      height: 4px;
      top: -8px;
    }
    &::after {
      left: 50%;
      transform: translateX(-50%);
      width: 80px;
      height: 4px;
      bottom: -8px;
      top: unset;
    }
  }
`
const ColorText = styled.span`
  color: #5B7CFA;
`;

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 160px;
`;

const ContentContainer = styled.div`
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
      height: 50%;
      transform: translateY(-50%);
      
      background-color: #5B7CFA;
      border-radius: 50%;
      filter: blur(120px);
      animation: ${blink} 4s infinite ease-in-out;
    }
  `}
`;

const Image = styled.img`
  width: 382px;
  height: 328px;
  margin-bottom: 40px;
  @media (max-width: 768px) {
    width: 240px;
    height: 208px;
    margin-bottom: 24px;
  }
`;

const TitleText = styled.div`
  color: #FFFFFF;
  font-size: 64px;
  font-weight: bold;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 32px;
  }
  ${(props) => props.color && css`
    color: #5B7CFA;
  `}
  ${(props) => props.gradient && css`
    background: linear-gradient(90deg, #5EB2FF 0%, #75F 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  `}
`

const SubTitleText = styled.div`
  color: #FFFFFF;
  font-size: 32px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 8px;
  @media (max-width: 768px) {
    font-size: 18px;
  }
  ${(props) => props.subcolor && css`
    color: #CAD5FF;
  `}
`

export {
  TitleBox,
  ColorText,
  HomeContainer,
  ContentContainer,
  Image,
  TitleText,
  SubTitleText,
};
