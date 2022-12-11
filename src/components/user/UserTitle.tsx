import React from 'react';
import styled from "styled-components";
import moa from "../../assets/moa.svg"
import useToday from "../../hooks/useToday";

interface PropsType {
    year: number;
    userId: string;
    moodCnt: number;
}

const UserTitle = ({year, userId, moodCnt}: PropsType) => {
    const today = useToday();
    const weekLabel = ['일', '월', '화', '수', '목', '금', '토'];

    return (
        <Container>
            <Title src={moa} alt='타이틀'/>
            <div>
                <SubTitle>오늘은 <span>{today.month}월 {today.date}일 {weekLabel[today.day]}요일</span> 입니다.</SubTitle>
                <SubTitle>{year}년 <span>{userId}</span>님이 모은 무드는 <span>{moodCnt}개</span> 입니다.</SubTitle>
            </div>
        </Container>
    );
};

export default UserTitle;

const Container = styled.div`
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`

const Title = styled.img`
  width: 115px;
  object-fit: contain;
`

const SubTitle = styled.p`
  font-size: ${props => props.theme.fs15};
  text-align: center;
  line-height: 25px;

  span {
    font-weight: 700;
  }
`