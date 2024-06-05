import styled from 'styled-components';

const StyledCurriculumList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const CurriculumItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 24px;
  border-radius: 24px;
  border: 1px solid #FFFFFF80;
  @media (max-width: 768px) {
    width: auto;
    padding: 16px;
    border-radius: 16px;
    margin: 0 24px;
  }
`;

const StepText = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: #5B7CFA;
  font-family: 'Noto Sans KR', sans-serif;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const StepTitle = styled.div`
  font-size: 40px;
  font-weight: 500;
  color: #FFFFFF;
  font-family: 'Noto Sans KR', sans-serif;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

const WeekList = styled.div`
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  @media (max-width: 768px) {
    margin-top: 12px;
  }
`;

const WeekItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;

const WeekNumber = styled.div`
  font-size: 16px;
  font-weight: bold;
  color: #CAD5FF;
  padding: 4px 8px;
  background-color: #5B7CFA;
  border-radius: 24px;
  font-family: 'Noto Sans KR', sans-serif;
  @media (max-width: 768px) {
    padding: 2px 6px;
    font-size: 12px;
  }
`;

const WeekTitle = styled.div`
  font-size: 24px;
  font-weight: 500;
  color: #CAD5FF;
  font-family: 'Noto Sans KR', sans-serif;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export {
  StyledCurriculumList,
  CurriculumItem,
  StepText,
  StepTitle,
  WeekList,
  WeekItem,
  WeekNumber,
  WeekTitle,
};
