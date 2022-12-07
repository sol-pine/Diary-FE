import React from 'react';
import styled from "styled-components";
import Title from "../elements/Title";
import SignUpForm from "../components/signUp/SignUpForm";

const SignUpPage = () => {
    return (
        <Container>
            <Title title='회원가입'/>
            <SignUpForm/>
        </Container>
    );
};

export default SignUpPage;

const Container = styled.div`
  width: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 60px auto 0 auto;
`