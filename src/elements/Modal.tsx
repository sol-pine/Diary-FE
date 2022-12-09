import React, {useState} from 'react';
import styled from "styled-components";
import x from "../assets/ic-x.svg";
import RoundButton from "./RoundButton";
import {useAppDispatch} from "../redux/store";
import {setModalState} from "../redux/modules/modalSlice";
import useToday from "../hooks/useToday";

const Modal = () => {
    const dispatch = useAppDispatch();
    const [mood, setMood] = useState<string>("");
    const [color, setColor] = useState<string>("");
    const isDisabled = !(mood && color)

    const today = useToday();

    return (
        <Base>
            <CloseButton
                onClick={() => dispatch(setModalState(false))}
            >
                <img src={x} alt='닫기 아이콘'/>
            </CloseButton>
            <p>오늘 날짜는 <span>{today.month}월 {today.date}일 {today.day}요일</span> 입니다.</p>
            <MoodInput
                onChange={e => setMood(e.target.value)}
                placeholder='오늘을 기록하세요 (띄어쓰기 포함 140자)'
            />
            <Wrapper>
                <label htmlFor='mood-color-input'>오늘의 기분과 어울리는 색</label>
                <ColorInput
                    onChange={e => setColor(e.target.value)}
                    type='color'
                    id ='mood-color-input'
                />
            </Wrapper>
            <Buttons>
                <RoundButton
                    isDisabled={isDisabled}
                    onClick={() => {
                    }}>
                    기록하기
                </RoundButton>
            </Buttons>
        </Base>
    );
};

export default Modal;

const Base = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
  width: 300px;
  height: 500px;
  background: ${props => props.theme.white};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 17px 25px 0 25px;
  gap: 10px;

  p,label {
    font-size: ${props => props.theme.fs13};
    padding-left: 10px;

    span {
      font-weight: 700;
    }
  }
`

const CloseButton = styled.button`
  width: 12px;
  height: 12px;
  padding-left: 238px;

  img {
    width: 12px;
    object-fit: contain;
  }
`

const MoodInput = styled.textarea`
  width: 250px;
  height: 258px;
  background: ${props => props.theme.gray100};
  padding: 12px 10px;
  border-radius: 5px;
  resize: none;
  font-size: ${props => props.theme.fs11};

  ::placeholder {
    color: ${props => props.theme.gray200};
  }

  :focus {
    outline: none;
  }
`

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`

const ColorInput = styled.input`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border: none;
  width: 14px;
  height: 14px;
  background: transparent;
  cursor: pointer;

  ::-webkit-color-swatch-wrapper {
    padding: 0;
  }

  ::-webkit-color-swatch {
    border: none;
  }

  :focus {
    outline: none;
  }
`

const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 18px;
`
