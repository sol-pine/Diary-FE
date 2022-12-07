import React from 'react';
import styled from "styled-components";
import logo from "../../assets/logo.svg";

const SignUpTitle = () => {
    return (
        <Title>
            <Logo src={logo} alt="로고"/>
            <p>회원가입</p>
        </Title>
    );
};

export default SignUpTitle;

const Title = styled.div`
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
`

const Logo = styled.img`
  width: 200px;
  object-fit: contain;
`