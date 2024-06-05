import React from 'react';
import {
  FAQContainer,
  ContentContainer,
  QuestionList,
} from './style';
import TopBar from '../../components/TopBar';
import FAQItem from './FAQItem';
import { faqData } from '../../data/FAQTextData';
import Button from '../../components/Button';
import Text from '../../components/Text';

const FAQ = () => {
  const openLink = () => {
    window.open('http://pf.kakao.com/_QyxiDxb', '_blank');
  }
  return (
    <FAQContainer>
      <TopBar />
      <ContentContainer>
        <Text
          content="자주 묻는 질문"
          color="secondary"
          fontSize="64px"
          fontWeight="bold"
          animation={true}
          marginBottom="64px"
        />
        <QuestionList>
          { faqData.map((item, index) => (
            <FAQItem key={index} question={item.question} answer={item.answer} />
          )) }
        </QuestionList>
      </ContentContainer>
      <Button
        description="더 궁금한 점이 있으신가요?"
        onClick={() => openLink()}
        text="문의하기"
      />
    </FAQContainer>
  );
}

export default FAQ;
