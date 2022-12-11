import React, {useMemo, useState} from 'react';
import styled from "styled-components";
import theme from "../styles/theme";
import Header from "../elements/Header";
import UserTitle from "../components/user/UserTitle";
import MonthlyMoodsBox from "../components/user/MonthlyMoodsBox";
import useToday from "../hooks/useToday";
import useYearlyMoodsQuery from "../hooks/query/useYearlyMoodsQuery";
import MonthlyMoodsList from "../components/user/MonthlyMoodsList";
import {useAppSelector} from "../redux/store";
import Modal from "../elements/Modal";
import useWithdrawalQuery from "../hooks/query/useWithdrawalQuery";

type MoodListType = { date: number; color: string; moodText: string; }[]

interface StylePropsType {
    color: string;
}

const UserPage = () => {
    const today = useToday();
    const [year, setYear] = useState<number>(today.year);
    const [month, setMonth] = useState<number>(0);
    const {date, day} = useAppSelector(state => state.modalSlice.dateState);
    const isModalOpen = useAppSelector(state => state.modalSlice.modalState);
    const query = useYearlyMoodsQuery(year);

    const [message, setMessage] = useState<boolean>(false);
    const withdrawalQuery = useWithdrawalQuery()


    const {userId, moodCnt} = useMemo(() => ({
        userId: query.data?.data.id,
        moodCnt: query.data?.data.moodCount
    }), [query])

    return (
        <Container>
            {isModalOpen &&
                <Modal year={year} month={month} date={date} day={day}/>
            }
            <Header isMyPage={true}/>
            <UserTitle year={year} userId={userId} moodCnt={moodCnt}/>
            <Years>
                <button
                    onClick={() => setYear(year - 1)}
                >
                    {year - 1}
                </button>
                <Year>{year}</Year>
                <button
                    onClick={() => setYear(year + 1)}
                >
                    {year + 1}
                </button>
            </Years>
            <Months>
                {
                    monthArr.map((item, idx) =>
                        (
                            <MonthButton
                                onClick={() => setMonth(idx)}
                                key={idx}
                                color={month === idx ? theme.main : theme.gray200}
                            >
                                {item}
                            </MonthButton>))
                }
            </Months>
            {
                month === 0 ?
                    <MoodWrapper>
                        {
                            query.data?.data.data.map((list: MoodListType, idx: number) => (
                                <MonthlyMoodsBox key={idx} year={2022} month={idx + 1} moodList={list}/>))
                        }
                    </MoodWrapper> :
                    <MonthlyMoodsList year={year} month={month}/>
            }
            <WithDrawalButton
                onClick={() => setMessage(true)}>
                회원 탈퇴
            </WithDrawalButton>
            {
                message &&
                <WithDrawalMsg>정말 탈퇴하시나요?
                    <button onClick={() => withdrawalQuery.mutate()}>네</button>
                    <button onClick={() => setMessage(false)}>아니오</button>
                </WithDrawalMsg>
            }

        </Container>
    );
};

export default UserPage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 80px;
`

const Years = styled.div`
  width: 273px;
  display: flex;
  justify-content: center;
  gap: 30px;
  font-size: ${props => props.theme.fs15};
  margin-top: 30px;

  button {
    color: ${props => props.theme.gray200};

    :hover {
      color: ${props => props.theme.main};
    }
  }
`

const Year = styled.p`
  text-align: center;
  font-weight: 700;
`

const Months = styled.div`
  width: 210px;
  display: flex;
  justify-content: center;
  gap: 10px;
  font-size: ${props => props.theme.fs13};
  flex-wrap: wrap;
  margin: 20px;
`

const MonthButton = styled.button`
  color: ${(props: StylePropsType) => props.color};

  :hover {
    color: ${props => props.theme.main};
  }
`

const MoodWrapper = styled.div`
  display: flex;
  width: 273px;
  gap: 3px;
`

const WithDrawalButton = styled.button`
  padding-top: 80px;
  font-size: ${props => props.theme.fs11};
`

const WithDrawalMsg = styled.span`
  margin-top: 10px;
  display: flex;
  gap: 15px;
  font-size: ${props => props.theme.fs11};
`

const monthArr = ['전체', '1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월']