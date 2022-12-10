import React from 'react';
import styled from "styled-components";
import Title from "../elements/Title";
import SignUpForm from "../components/signUp/SignUpForm";
import Header from "../elements/Header";

const SignUpPage = () => {
    return (
        <Container>
            <Header isMyPage={false}/>
            <Title title='회원가입'/>
            <SignUpForm/>
        </Container>
    );
};

export default SignUpPage;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
`