import React from 'react';
import {useNavigate} from "react-router-dom";
import RoundButton from "../../elements/RoundButton";
import styled from "styled-components";
import useLogInQuery from "../../hooks/useLogInQuery";

interface PropsType {
    id: string;
    pwd: string;
}

const LogInButtons = ({id, pwd}: PropsType) => {
    const navigate = useNavigate();
    const isDisabled = !(id && pwd);
    // 로그인
    const query = useLogInQuery(id, pwd)

    return (
        <Container>
            <SignUpButton
                onClick={() => navigate(`/signup`)}
            >
                아직 회원이 아니라면? <span>가입하기</span>
            </SignUpButton>
            <RoundButton
                onClick={() => query.mutate()}
                isDisabled={isDisabled}>
                로그인
            </RoundButton>
            <ResetButton
                onClick={() => navigate(`/reset`)}
            >
                비밀번호 재설정
            </ResetButton>
        </Container>
    );
};

export default LogInButtons;

const Container = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`

const SignUpButton = styled.button`
  text-align: right;
  font-size: ${props => props.theme.fs13};
  color: ${props => props.theme.main};

  span {
    font-weight: 700;
  }
`

const ResetButton = styled.button`
  color: ${props => props.theme.main};
  font-size: ${props => props.theme.fs13};
  font-weight: 700;
`