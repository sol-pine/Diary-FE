import React from 'react';
import styled from "styled-components";
import theme from "../../styles/theme";

interface StylePropsType {
    background: string;
}
interface PropsType {
    year: number;
    month:number;
    moodList:{
        date:number;
        color:string;
        moodText:string;
    }[];
}

const MonthlyMoodsBox = ({year, month, moodList}:PropsType) => {
    // 일 수
    const dayCnt = new Date(year, month, 0).getDate()

    // 무드 컬러 처리
    const findColor = (id: number) => {
        const mood = moodList.find(data => data.date - 1 === id);
        // 저장한 무드가 있으면 해당 무드 컬러로 처리
        return mood ? mood.color : theme.gray100
    }

    return (
            <Moods>
                {
                    Array.from({length:dayCnt}).map((item, idx) => (<Mood background={findColor(idx)}></Mood>))
                }
            </Moods>
    );
};

export default MonthlyMoodsBox;

const Moods = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
  margin-top: 3px;
`

const Mood = styled.div`
  width: 20px;
  height: 20px;
  background: ${(props: StylePropsType) => props.background};
  font-size: ${props => props.theme.fs11};
  color : ${props => props.theme.gray100};
`