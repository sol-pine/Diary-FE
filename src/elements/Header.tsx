import React from 'react';
import styled from "styled-components";
import logo from "../assets/logo.svg";

const Header = () => {
    const token = sessionStorage.getItem('token');

    return (
        <Base>
            <Wrapper>
                <Logo src={logo} alt='로고'/>
                {
                    token?
                        <Buttons>
                            <button>마이페이지</button>
                            <button>로그아웃</button>
                        </Buttons>:
                        <button>로그인</button>
                }
            </Wrapper>
        </Base>
    );
};

export default Header;

const Base = styled.div`
  width: 100%;
  height: 100px;
  background: ${props => props.theme.gray100};
  border-bottom: 1px solid ${props => props.theme.gray200};
`

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 95vw;
  padding-top: 65px;
  margin: 0 auto;
  button{
    font-size: ${props => props.theme.fs11};
  }
`

const Logo = styled.img`
  width:120px;
  object-fit: contain;
  cursor: pointer;
`

const Buttons = styled.div`
  display: flex;
  gap:20px;
`