import React from 'react';
import styled from "styled-components";
import SignUpTitle from "../components/signUp/SignUpTitle";
import SignUpForm from "../components/signUp/SignUpForm";

const SignUpPage = () => {
    return (
        <Container>
            <SignUpTitle/>
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