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

const underLineAnimation = keyframes`
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
`

const CurriculumContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 160px;
  margin-bottom: 80px;
  @media (max-width: 768px) {
    padding-top: 80px;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;

const TitleTexts = styled.span`
  display: flex;
  flex-direcion: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 40px;
  gap: 12px;
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0;
  }
`;

const ColorText = styled.span`
  position: relative;
  color: #5B7CFA;
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    bottom: 0;
    display: block;
    background-color: #5B7CFA80;
    animation: ${underLineAnimation} 1s 0.3s ease forwards;
  }
`;

const TitleText = styled.div`
  animation: ${fadeIn} 1s ease forwards;
  font-size: 64px;
  font-weight: bold;
  color: #FFFFFF;
  @media (max-width: 768px) {
    font-size: 32px;
    text-align: center;
  }
`;

const DescriptionText = styled.div`
  animation: ${fadeIn} 1s 0.5s ease forwards;
  opacity: 0;
  font-size: 24px;
  font-weight: 500;
  color: #CAD5FF;
  margin-bottom: 40px;
  text-align: center;
  max-width: 800px;
  @media (max-width: 768px) {
    font-size: 18px;
    text-align: left;
    padding: 0 24px;
  }
`;

const StackContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 40px;
  @media (max-width: 768px) {
    gap: 24px;
  }
`;

const StackRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 40px;
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 24px;
  }
`;

const StackItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: #FFFFFF;
  border-radius: 16px;
  overflow: hidden;
  min-width: 240px;
`;

const StackImage = styled.img`
  width: 148px;
  height: 148px;
  padding: 16px 0;
`;

const StackName = styled.div`
  width: 100%;
  padding: 8px 0;
  text-align: center;
  color: #FFFFFF;
  background-color: #5B7CFA;
`;

const Wrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 80px;
  gap: 80px;
  ${(props) => props.reverse && `
    flex-direction: row-reverse;
  `};
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 40px;
    padding: 0 24px 40px 24px;
  }
`;

const TextWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 12px;
  max-width: 540px;
  ${(props) => props.reverse && `
    align-items: flex-end;
  `};
  @media (max-width: 768px) {
    align-items: center;
    max-width: 100%;
  }
`;

const WrapTitleText = styled.div`
  font-size: 48px;
  font-weight: bold;
  color: #5B7CFA;
  @media (max-width: 768px) {
    text-align: center;
    font-size: 32px;
  }
`;

const WrapDescription = styled.div`
  font-size: 28px;
  font-weight: 500;
  color: #CAD5FF;
  ${(props) => props.reverse && `
    text-align: right;
  `};

  @media (max-width: 768px) {
    font-size: 18px;
    text-align: center;
  }
`;

const ImageWrap = styled.img`
  background-color: #5B7CFA40;
  border: 1px solid #5B7CFA;
  border-radius: 24px;
  width: 40%;
  max-height: 280px;
  object-fit: cover;
  @media (max-width: 768px) {
    width: 100%;
    height: 240px;
  }
`;

export {
  CurriculumContainer,
  ContentContainer,
  TitleTexts,
  ColorText,
  TitleText,
  DescriptionText,
  StackContainer,
  StackRow,
  StackItem,
  StackImage,
  StackName,
  Wrap,
  TextWrap,
  WrapTitleText,
  WrapDescription,
  ImageWrap,
};
