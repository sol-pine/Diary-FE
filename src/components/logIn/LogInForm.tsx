import React, {useState} from 'react';
import styled from "styled-components";
import TextInput from "../../elements/TextInput";
import PwdInput from "../../elements/PwdInput";
import LogInButtons from "./LogInButtons";

const LogInForm = () => {
    const [id, setId] = useState<string>("");
    const [pwd, setPwd] = useState<string>("");

    return (
        <>
            <Form>
                <TextInput name='아이디' placeholder='아이디를 입력해주세요' maxLength={8} onChange={e => setId(e.target.value)}/>
                <PwdInput name='비밀번호' placeholder='비밀번호를 입력해주세요' onChange={e => setPwd(e.target.value)}/>
                <LogInButtons id={id} pwd={pwd}/>
            </Form>
        </>
    );
};

export default LogInForm;

const Form = styled.div`
  margin-top: 35px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`