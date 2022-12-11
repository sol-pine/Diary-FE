import React from 'react';
import styled from "styled-components";
import {useAppDispatch} from "../../redux/store";
import {setModalState, setDateState} from "../../redux/modules/modalSlice";
import useMonthlyMoodsQuery from "../../hooks/query/useMonthlyMoodsQuery";

interface StylePropsType {
    background: string;
}

interface PropsType {
    year: number;
    month: number;
}

const MonthlyMoodsList = ({year, month}: PropsType) => {
    const dispatch = useAppDispatch();

    const openModal = (selectedDate: number) => {
        dispatch(setDateState({year: year, month: month, date: selectedDate}))
        dispatch(setModalState(true))
    }

    const query = useMonthlyMoodsQuery(year, month)

    return (
        <>
            {
                query.data?.data.data.length ?
                        query.data?.data.data.map(({date, color, moodText}) => (
                            <Mood
                                onClick={() => openModal(date)}
                            >
                                <Date>{month}월 {date}일</Date>
                                <Wrapper>
                                    <MoodColor background={color}/>
                                    <MoodText>{moodText}</MoodText>
                                </Wrapper>
                            </Mood>
                        ))
                    :
                    <Mood className='no-mood'>
                            <MoodText >저장된 기록이 없습니다.</MoodText>
                    </Mood>
            }
        </>
    );
};

export default MonthlyMoodsList;

const Mood = styled.div`
  width: 280px;
  flex-direction: column;
  padding: 5px;
  margin: 3px;
  background: ${props => props.theme.gray100};
  cursor: pointer;
`

const Date = styled.p`
  font-size: ${props => props.theme.fs11};
`

const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  margin-top: 8px;
`

const MoodColor = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  border: 1px solid ${props => props.theme.gray200};
  background: ${(props: StylePropsType) => props.background};
`

const MoodText = styled.p`
  width: 235px;
  font-size: ${props => props.theme.fs13};
`