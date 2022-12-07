import React, {useState} from 'react';
import styled from "styled-components";
import icEye from "../assets/ic-eye.svg";
import icEyeOff from "../assets/ic-eye-off.svg";

interface PropsType {
    name: string;
    placeholder: string;
    onChange:(e:React.ChangeEvent<HTMLInputElement>) => void;
}

const PwdInput = ({name, placeholder, onChange}: PropsType) => {
    const [isHide, setIsHide] = useState<boolean>(true);
    return (
        <div>
            <InputLabel>{name}</InputLabel>
            <Wrapper>
                <IconButton onClick={() => setIsHide(!isHide)}>
                    <PwdIcon src={isHide ? icEye : icEyeOff} alt={isHide ? '비밀번호 보기 아이콘' : '비밀번호 숨기기 아이콘'}/>
                </IconButton>
                <Input type={isHide ? "password" : "text"} placeholder={placeholder} maxLength={20} onChange={onChange}/>
            </Wrapper>
        </div>
    );
};

export default PwdInput;

const InputLabel = styled.label`
  width: 250px;
  font-size: ${props => props.theme.fs11};
  margin-left: 10px;
`

const IconButton = styled.button`
  position: absolute;
  top: 0;
  right: 10px;
  height: 40px;
  display: flex;
  align-items: center;
`

const Wrapper = styled.div`
  position: relative;
  width: 250px;
`

const PwdIcon = styled.img`
  width: 24px;
  height: 24px;
  object-fit: contain;
  cursor: pointer;
`

const Input = styled.input`
  width: 250px;
  height: 40px;
  padding: 12px 10px;
  box-sizing: border-box;
  background: ${props => props.theme.gray100};
  font-size: ${props => props.theme.fs11};
  border-radius: 5px;

  ::placeholder {
    color: ${props => props.theme.gray200};
  }
`