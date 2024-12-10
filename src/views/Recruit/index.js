import React, { useState } from 'react';
import TopBar from '../../components/TopBar';
import {
  RecruitContainer,
  ContentContainer,
  SubTitleText,
  Text
} from './style';
import Button from '../../components/Button';
import TitleText from '../../components/Text';
import RecruitList from './RecruitList';

const Recruit = () => {
  const [isScroll, setIsScroll] = useState(false);
  const handleScroll = () => {
    if (window.scrollY > 300) {
      setIsScroll(true);
    } else {
      setIsScroll(false);
    }
  }

  window.addEventListener('scroll', handleScroll);

  const openLink = () => {
    window.open('https://forms.gle/Toqc3jxz1ged8hPG9', '_blank');
  }

  return (
    <RecruitContainer>
      <TopBar />
      <Button
        onClick={() => openLink()}
        text="지원하기"
        position={true}
        isScroll={isScroll}
      />
      <ContentContainer>
        <TitleText
          content="하반기 공개모집 일정"
          color="white"
          fontSize="64px"
          fontWeight="bold"
          animation={true}
        />
        <SubTitleText>2024년 12월 12일 ~ 2024년 12월 27일</SubTitleText>
        <RecruitList />
      </ContentContainer>
      <ContentContainer background={true}>
        <Text>투빅스와 함께 성장해나가는 여정</Text>
        <Text color>지금 시작해보세요!</Text>
        <Button
          onClick={() => openLink()}
          text="지원하기"
        />
      </ContentContainer>
    </RecruitContainer>
  );
}

export default Recruit;
