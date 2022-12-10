import React from 'react';
import styled from "styled-components";
import Header from "../elements/Header";
import Title from "../elements/Title";
import ResetForm from "../components/reset/ResetForm";

const ResetPage = () => {
    return (
        <Container>
            <Header isMyPage={false}/>
            <Title title='비밀번호 재설정'/>
            <ResetForm/>
        </Container>
    );
};

export default ResetPage;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
`