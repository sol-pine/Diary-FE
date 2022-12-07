import React from 'react';
import styled from "styled-components";
import Title from "../elements/Title";
import LogInForm from "../components/logIn/LogInForm";

const LogInPage = () => {
    return (
        <Container>
            <Title title='로그인'/>
            <LogInForm/>
        </Container>
    );
};

export default LogInPage;

const Container = styled.div`
  width: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 60px auto 0 auto;
`