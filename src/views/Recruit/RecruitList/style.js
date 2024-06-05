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

const RecruitList = styled.div`
  animation: ${fadeIn} 1s 0.5s ease forwards;
  opacity: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 32px;
  @media (max-width: 768px) {
    gap: 24px;
  }
`;

const RecruitRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 32px;
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 24px;
  }
`;

const RecruitItem = styled.div`
  min-width: 280px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  overflow: hidden;
  background-color: #FFFFFF;
  @media (max-width: 768px) {
    min-width: 180px;
  }
`;

const RecruitTitle = styled.div`
  padding: 16px 0;
  background-color: #5B7CFA;
  color: #FFFFFF;
  font-size: 28px;
  font-weight: 500;
  width: 100%;
  text-align: center;
  @media (max-width: 768px) {
    padding: 12px 0;
    font-size: 18px;
  }
`
const RecruitDescription = styled.div`
  color: #1C1C1C;
  font-size: 24px;
  padding: 32px 0;
  @media (max-width: 768px) {
    padding: 16px 0;
    font-size: 16px;
  }
`

export {
  RecruitList,
  RecruitRow,
  RecruitItem,
  RecruitTitle,
  RecruitDescription,
};
