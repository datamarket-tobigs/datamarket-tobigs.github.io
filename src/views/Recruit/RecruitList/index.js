import React from 'react';
import {
  RecruitList,
  RecruitRow,
  RecruitItem,
  RecruitTitle,
  RecruitDescription,
} from './style';
import { RecruitData } from '../../../data/RecruitData';

const RecruitListContainer = () => {
  return (
    <RecruitList>
      {RecruitData.map((row, index) => (
        <RecruitRow key={index}>
          {row.map((item, idx) => (
            <RecruitItem key={idx}>
              <RecruitTitle>{item.title}</RecruitTitle>
              <RecruitDescription>{item.description}</RecruitDescription>
            </RecruitItem>
          ))}
        </RecruitRow>
      ))}
    </RecruitList>
  );
}

export default RecruitListContainer;
