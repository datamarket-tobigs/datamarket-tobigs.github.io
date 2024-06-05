import React from 'react';
import TopBar from '../../components/TopBar';
import {
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
} from './style';
import Text from '../../components/Text';
import CurriculumList from './CurriculumList';
import { StackData } from '../../data/CurriculumTextData';
import photo1 from '../../assets/photo1.jpeg';
import photo2 from '../../assets/photo2.jpeg';
import photo3 from '../../assets/photo3.jpeg';

const Curriculum = () => {
  return (
    <CurriculumContainer>
      <TopBar />
      <div style={{
        margin: '160px 0px 40px 0',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
        <TitleTexts>
          <Text
            content="기본기를 넘어"
            color="white"
            fontSize="64px"
            fontWeight="bold"
            animation={true}
          />
          <TitleText>
           <ColorText>최신 트렌드</ColorText>까지
          </TitleText>
        </TitleTexts>
        <DescriptionText>
          투빅스의 커리큘럼은 데이터 분석부터 머신러닝, 딥러닝에 이르는 전 과정을
          체계적으로 다루며, 최신 기술 동향을 반영한 심화 세미나와 컨퍼런스를 통해 여러분의 역량을 극대화할 수 있습니다.<br /><br />
          기본적인 이론부터 최신 논문 리뷰, 이를 이용한 실전 프로젝트까지
          기본기를 넘어 최신 트렌드까지 아우를 수 있는 종합적인 경험을 할 수 있습니다.
        </DescriptionText>
      </div>
      <ContentContainer>
        <TitleTexts>
          <Text
            content="투빅스만의 커리큘럼"
            color="white"
            fontSize="64px"
            fontWeight="bold"
            animation={true}
          />
        </TitleTexts>
        <CurriculumList />
      </ContentContainer>
      <ContentContainer>
        <Wrap>
          <TextWrap>
            <WrapTitleText> 정규 세션 ✏️  </WrapTitleText>
            <WrapDescription> Algorithm, Linear Algebra, ... </WrapDescription>
          </TextWrap>
          <ImageWrap src={photo1} />
        </Wrap>
        <Wrap reverse>
          <TextWrap reverse>
            <WrapTitleText> 심화 세션 📖 </WrapTitleText>
            <WrapDescription reverse>
              추천 시스템, 시계열, 데이터 분석, 생성, 비전,
              자연어, 멀티모달 등 논문 리뷰 및 강의 스터디
            </WrapDescription>
          </TextWrap>
          <ImageWrap src={photo2} />
        </Wrap>
        <Wrap>
          <TextWrap>
            <WrapTitleText> 컨퍼런스 🔎 </WrapTitleText>
            <WrapDescription>
              멀티모달, 생성, 시계열, 데이터 분석,
              자연어, 비전 등 프로젝트 컨퍼런스
            </WrapDescription>
          </TextWrap>
          <ImageWrap src={photo3} />
        </Wrap>
      </ContentContainer>
      <ContentContainer>
        <TitleTexts>
          <TitleText>
            기술 스택
          </TitleText>
        </TitleTexts>
        <StackContainer>
          {StackData.map((stackRow, index) => (
            <StackRow key={index}>
              {stackRow.stack.map((stack, index) => (
                <StackItem key={index}>
                  <StackImage src={stack.image} />
                  <StackName>{stack.name}</StackName>
                </StackItem>
              ))}
            </StackRow>
          ))}
        </StackContainer>
      </ContentContainer>
    </CurriculumContainer>
  );
}

export default Curriculum;
