import React from 'react';
import styled from "styled-components";
import Title from "../elements/Title";
import ResetForm from "../components/reset/ResetForm";

const ResetPage = () => {
    return (
        <Container>
            <Title title='비밀번호 재설정'/>
            <ResetForm/>
        </Container>
    );
};

export default ResetPage;

const Container = styled.div`
  width: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 60px auto 0 auto;
`