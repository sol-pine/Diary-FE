import React from 'react';
import styled from "styled-components";
import Title from "../elements/Title";
import LogInForm from "../components/logIn/LogInForm";
import Header from "../elements/Header";

const LogInPage = () => {
    return (
        <Container>
            <Header isMyPage={false}/>
            <Title title='로그인'/>
            <LogInForm/>
        </Container>
    );
};

export default LogInPage;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
`