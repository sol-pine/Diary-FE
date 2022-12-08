import React from 'react';
import RoundButton from "../../elements/RoundButton";
import styled from "styled-components";
import {useNavigate} from "react-router-dom";
import usePwdResetQuery from "../../hooks/usePwdResetQuery";

interface PropsType {
    id: string;
    code: string;
    newPwd: string;
    rePwd:string;
}

const ResetButtons = ({id, code, newPwd, rePwd}: PropsType) => {
    const navigate = useNavigate();
    const isDisabled = !(id && code && newPwd && rePwd);
    // 비밀번호 재설정
    const query = usePwdResetQuery(id, code, newPwd);

    return (
        <Container>
            <RoundButton
                onClick={() => query.mutate()}
                isDisabled={isDisabled}>
                재설정
            </RoundButton>
            <ResetButton
                onClick={() => navigate(`/login`)}
            >
                로그인으로 돌아가기
            </ResetButton>
        </Container>
    );
};

export default ResetButtons;

const Container = styled.div`
  margin-top: 55px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`

const ResetButton = styled.button`
  color: ${props => props.theme.main};
  font-size: ${props => props.theme.fs13};
  font-weight: 700;
`