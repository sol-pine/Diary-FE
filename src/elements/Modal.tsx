import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import theme from "../styles/theme";
import x from "../assets/ic-x.svg";
import RoundButton from "./RoundButton";
import {useAppDispatch} from "../redux/store";
import {setModalState} from "../redux/modules/modalSlice";
import usePostQuery from "../hooks/query/usePostQuery";
import useMoodQuery from "../hooks/query/useMoodQuery";
import useUpdateQuery from "../hooks/query/useUpdateQuery";
import useDeleteQuery from "../hooks/query/useDeleteQuery";

interface StylePropsType {
    background: string;
}
interface PropsType {
 year:number;
 month:number;
 date:number;
 day:number;
}

const Modal = ({year, month, date, day}:PropsType) => {
    const dispatch = useAppDispatch();
    const weekLabel = ['일', '월', '화', '수', '목', '금', '토'];

    // 무드 조회
    const getQuery = useMoodQuery(year, month, date);

    const [mood, setMood] = useState<string>('');
    const [color, setColor] = useState<string>('');
    const [isModified, setIsModified] = useState<boolean>(false);

    // 버튼 활성화
    const isPostButtonDisabled = !(mood && color);
    const isUpdateButtonDisabled = !(mood || color);

    // 무드 기록
    const postQuery = usePostQuery(mood, color);
    // 무드 수정
    const updateQuery = useUpdateQuery(year, month, date, mood ? mood : getQuery.data?.data.moodText, color ? color : getQuery.data?.data.color);

    // 무드 삭제
    const deleteQuery = useDeleteQuery(year, month, date);

    useEffect(() => {
        setMood('')
        setColor('')
    }, [deleteQuery.isSuccess])

    return (
        <><Shadow/>
        <Base>
            <CloseButton
                onClick={() => dispatch(setModalState(false))}
            >
                <img src={x} alt='닫기 아이콘'/>
            </CloseButton>
            <p>오늘 날짜는 <span>{month}월 {date}일 {weekLabel[day]}요일</span> 입니다.</p>
            <MoodInput
                onChange={e => {
                    setMood(e.target.value)
                    setIsModified(true)
                }}
                placeholder='오늘을 기록하세요 (띄어쓰기 포함 140자)'
                value={mood || isModified ? mood : getQuery.data?.data.moodText}
                maxLength={140}
            />
            {
                mood && <Length>{mood.length}/140</Length>
            }
            <Wrapper>
                <label htmlFor='mood-color-input'>오늘의 기분과 어울리는 색</label>
                <ColorLabel htmlFor='mood-color-input' background={color ? color : getQuery.data?.data.color}/>
                <ColorInput
                    onChange={e => setColor(e.target.value)}
                    type='color'
                    id='mood-color-input'
                />
            </Wrapper>
            {
                getQuery.data?.data.isMood ?
                    <Buttons>
                        <RoundButton
                            isDisabled={isUpdateButtonDisabled}
                            onClick={() => updateQuery.mutate()}>
                            수정하기
                        </RoundButton>
                        <DeleteButton
                            onClick={() => deleteQuery.mutate()}
                        >삭제하기
                        </DeleteButton>
                    </Buttons> :
                    <Buttons>
                        <RoundButton
                            isDisabled={isPostButtonDisabled}
                            onClick={() => postQuery.mutate()}>
                            기록하기
                        </RoundButton>
                    </Buttons>
            }
        </Base>
        </>
    );
};

export default Modal;

const Shadow = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  position: absolute;
  top: 0;
  left: 0;
  z-index: 50;
`

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

  p, label {
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

const Length = styled.span`
  font-size: 9px;
  color: ${props => props.theme.gray200};
  position: absolute;
  top: 300px;
  right: 35px;
`

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`

const ColorLabel = styled.label`
  width: 14px;
  height: 14px;
  cursor: pointer;
  background: ${(props: StylePropsType) => props.background ? props.background : theme.gray200};
`

const ColorInput = styled.input`
  visibility: hidden;
`

const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 18px;
`

const DeleteButton = styled.button`
  font-size: ${props => props.theme.fs11};
  margin-top: 10px;
`