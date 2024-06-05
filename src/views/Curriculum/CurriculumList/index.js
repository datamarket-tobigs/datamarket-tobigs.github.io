import { CurriculumData } from '../../../data/CurriculumTextData';
import {
  StyledCurriculumList,
  CurriculumItem,
  StepText,
  StepTitle,
  WeekList,
  WeekItem,
  WeekNumber,
  WeekTitle,
} from './style';

const CurriculumList = () => {
  return (
  <StyledCurriculumList>
    {CurriculumData.map((curriculum, index) => (
      <CurriculumItem key={index}>
        <StepText>{curriculum.step}</StepText>
        {curriculum.title.split('\n').map((line, index) => (
          <StepTitle key={index}>{line}</StepTitle>
        ))}
        <WeekList>
          {curriculum.week.map((week, index) => (
            <WeekItem key={index}>
              <WeekNumber>{week.number}</WeekNumber>
              <WeekTitle>{week.title}</WeekTitle>
            </WeekItem>
          ))}
        </WeekList>
      </CurriculumItem>
    ))}
  </StyledCurriculumList>
  );
};

export default CurriculumList;
