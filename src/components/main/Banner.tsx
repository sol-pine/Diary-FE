import React from 'react';
import styled from "styled-components";
import banner from "../../assets/banner.svg";
import RoundButton from "../../elements/RoundButton";
import {useAppDispatch} from "../../redux/store";
import {setModalState} from "../../redux/modules/modalSlice";

const Banner = () => {
  const dispatch = useAppDispatch();

    return (
        <Base>
            <Wrapper>
                <img src={banner} alt='배너'/>
                <ButtonWrapper>
                    <RoundButton
                        isDisabled={false}
                        onClick={() => dispatch(setModalState(true))}>
                        오늘의 기분 기록하기
                    </RoundButton>
                </ButtonWrapper>
            </Wrapper>
        </Base>
    );
};

export default Banner;

const Base = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${props => props.theme.lightPurple};

`

const Wrapper = styled.div`
  width: 928px;
  height: 333px;
  position: relative;

  img {
    width: 928px;
    object-fit: contain;
  }
`

const ButtonWrapper = styled.div`
  position: absolute;
  top: 270px;
  left: 0;
`