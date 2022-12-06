import React from 'react';
import styled from "styled-components";

interface PropsType {
    name: string;
    placeholder: string;
    maxLength: number;
}

const TextInput = ({name, placeholder, maxLength}: PropsType) => {
    return (
        <div>
            <InputLabel>{name}</InputLabel>
            <Wrapper>
                <Input type="text" placeholder={placeholder} maxLength={maxLength}/>
            </Wrapper>
        </div>
    );
};

export default TextInput;

const InputLabel = styled.label`
  width: 250px;
  font-size: ${props => props.theme.fs11};
  margin-left: 10px;
`

const Wrapper = styled.div`
  position: relative;
  width: 250px;
`

const Input = styled.input`
  width: 250px;
  height: 40px;
  padding: 12px 10px;
  box-sizing: border-box;
  background: ${props => props.theme.gray100};
  font-size: ${props => props.theme.fs11};
  border-radius: 5px;

  ::placeholder {
    color: ${props => props.theme.gray200};
  }
`