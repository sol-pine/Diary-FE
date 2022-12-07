import React from 'react';
import styled from "styled-components";
import logo from "../assets/logo.svg"
import {useNavigate} from "react-router-dom";

interface PropsType {
    title: string;
}

const Title = ({title}: PropsType) => {
    const navigate = useNavigate();

    return (
        <Container>
            <Logo
                onClick={() => navigate('/')}
                src={logo}
                alt="로고"
            />
            <p>{title}</p>
        </Container>
    );
};

export default Title;

const Container = styled.div`
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
`

const Logo = styled.img`
  width: 200px;
  object-fit: contain;
  cursor: pointer;
`