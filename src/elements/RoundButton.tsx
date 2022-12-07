import React from 'react';
import styled from "styled-components";

interface PropsType {
    children: React.ReactNode;
    isDisabled: boolean;
    onClick: () => void;
}

const RoundButton = ({children, isDisabled, onClick}: PropsType) => {
    return (
        <Button disabled={isDisabled} onClick={onClick}>
            {children}
        </Button>
    );
};

export default RoundButton;

const Button = styled.button`
  width: 250px;
  height: 60px;
  border-radius: 30px;
  background: ${props => props.disabled ? props.theme.gray200 : props.theme.main};
  color: ${props => props.theme.white};
  font-weight: 700;
`