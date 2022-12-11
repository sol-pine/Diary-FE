import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import bannerGraphic from "../../assets/banner-graphic.svg";
import bannerText from "../../assets/banner-text.svg";
import RoundButton from "../../elements/RoundButton";
import {useAppDispatch} from "../../redux/store";
import {setModalState, setDateState} from "../../redux/modules/modalSlice";
import useToday from "../../hooks/useToday";

const Banner = () => {
    const dispatch = useAppDispatch();

    const [viewport, setViewport] = useState<number>(window.innerWidth);
    
    useEffect(() => {
        const resizeListener = () => {
            setViewport(window.innerWidth);
        };
        window.addEventListener("resize", resizeListener);
    });

    const {year, month, date} = useToday();
    const openTodayModal = () => {
        dispatch(setDateState({year: year, month: month, date: date}))
        dispatch(setModalState(true))
    }

    return (
        <Base>
            {
                viewport >710 ?
                    <Wrapper>
                        <ButtonWrapper>
                            <BannerText src={bannerText} alt='매일매일의 기분을 무드 다이어리로 기록해보세요.'/>
                            <RoundButton
                                isDisabled={false}
                                onClick={() => openTodayModal()}>
                                오늘의 기분 기록하기
                            </RoundButton>
                        </ButtonWrapper>
                        <BannerGraphic src={bannerGraphic} alt='배너 그래픽'/>
                    </Wrapper>:
                    <Wrapper className='small'>
                        <ButtonWrapper>
                            <BannerText src={bannerText} alt='매일매일의 기분을 무드 다이어리로 기록해보세요.'/>
                            <RoundButton
                                isDisabled={false}
                                onClick={() => openTodayModal()}>
                                오늘의 기분 기록하기
                            </RoundButton>
                        </ButtonWrapper>
                        <BannerGraphic src={bannerGraphic} alt='배너 그래픽'/>
                    </Wrapper>
            }
        </Base>
    );
};

export default Banner;

const Base = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${props => props.theme.lightPurple};
`

const Wrapper = styled.div`
  width: 660px;
  display: flex;
  justify-content: space-between;
  padding: 50px 0;

  &.small {
    flex-direction: column-reverse;
    align-items: center;
    gap: 30px;
  }
`

const ButtonWrapper = styled.div`
  width: 320px;
  display: flex;
  flex-direction: column;
  gap:75px;
`

const BannerText = styled.img`
  width: 320px;
  object-fit: contain;
`

const BannerGraphic = styled.img`
  width: 255px;
  object-fit: contain;
`