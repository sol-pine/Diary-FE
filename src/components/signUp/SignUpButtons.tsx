import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import styled from "styled-components";
import RoundButton from "../../elements/RoundButton";
import useSignUpQuery from "../../hooks/query/useSignUpQuery";

interface PropsType {
    id: string,
    pwd: string,
    code: string
}

const SignUpButtons = ({id, pwd, code}: PropsType) => {
    const navigate = useNavigate();
    const [isDisabled, setIsDisabled] = useState<boolean>(true);
    // 회원가입
    const query = useSignUpQuery(id, pwd, code)

    return (
        <Container>
            <Wrapper>
                <HiddenCheck
                    onChange={e => setIsDisabled(!e.target.checked)}
                    type='checkbox'
                    defaultChecked={false}
                    id='agree-term-checkbox'/>
                <Check className='check' htmlFor='agree-term-checkbox'/>
                <Label htmlFor='agree-term-checkbox'>무드다이어리 회원가입에 동의합니다.</Label>
            </Wrapper>
            <RoundButton
                onClick={() => query.mutate()}
                isDisabled={isDisabled}>
                회원가입
            </RoundButton>
            <LogInButton
                onClick={() => navigate(`/login`)}
            >
                이미 계정이 있으면? <span>로그인하기</span>
            </LogInButton>
        </Container>
    );
};

export default SignUpButtons;

const Container = styled.div`
  margin-top: 35px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  margin-left: 10px;
`

const HiddenCheck = styled.input`
  display: none;

  :checked + .check {
    background: ${props => props.theme.main};
  }
`

const Check = styled.label`
  width: 14px;
  height: 14px;
  background: ${props => props.theme.gray200};
  cursor: pointer;
`

const Label = styled.label`
  font-size: ${props => props.theme.fs11};
  cursor: pointer;
`

const LogInButton = styled.button`
  color: ${props => props.theme.main};
  font-size: ${props => props.theme.fs13};

  span {
    font-weight: 700;
  }
`