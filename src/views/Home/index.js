import React from 'react';
import TopBar from '../../components/TopBar';
import tobigsBear from '../../assets/tobigs-bear.png';
import {
  TitleBox,
  ColorText,
  HomeContainer,
  ContentContainer,
  Image,
  TitleText,
  SubTitleText,
} from './style';

const Home = () => {
  return (
    <HomeContainer>
      <TopBar />
      <ContentContainer background={true}>
        <Image src={tobigsBear} />
        <SubTitleText>
          인공지능&데이터 분석을 배우고 싶은데 막막하신가요?
        </SubTitleText>
        <TitleText gradient>
          투빅스와 함께 인공지능&데이터 분석을 배워보세요!
        </TitleText>
      </ContentContainer>
      <ContentContainer>
        <TitleBox>
          <TitleText>
            빅데이터 연합동아리 <ColorText>TOBIG'S</ColorText>
          </TitleText>
        </TitleBox>
        <SubTitleText subcolor>
          빅데이터를 공부하고 큰 사람이 되기 위한<br/>
          투빅스에서 함께 나아갈 큰 사람을 찾고 있습니다.
        </SubTitleText>
      </ContentContainer>
    </HomeContainer>
  );
}

export default Home;
