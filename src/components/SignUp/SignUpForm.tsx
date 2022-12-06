import React from 'react';
import styled from "styled-components";
import TextInput from "../../elements/TextInput";
import PwdInput from "../../elements/PwdInput";
import SignUpButtons from "./SignUpButtons";

const SignUpForm = () => {
    return (
        <>
        <Form>
            <TextInput name='아이디' placeholder='영문 소문자, 숫자 5자 ~ 8자' maxLength={8}/>
            <PwdInput name='비밀번호' placeholder='특수기호 필수 포함 8자 ~ 20자'/>
            <PwdInput name='비밀번호 확인' placeholder='위 비밀번호를 한번 더 입력해주세요'/>
            <TextInput name='비밀번호 재설정 확인 코드' placeholder='숫자로만 6자' maxLength={6}/>
        </Form>
        <SignUpButtons/>
        </>
    );
};

export default SignUpForm;

const Form = styled.div`
    margin-top: 35px;
  display:flex;
  flex-direction: column;
  align-items: center;
  gap:15px;
`