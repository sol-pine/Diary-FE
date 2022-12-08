import React, {useState} from 'react';
import TextInput from "../../elements/TextInput";
import PwdInput from "../../elements/PwdInput";
import styled from "styled-components";
import usePwdCheck from "../../hooks/usePwdCheck";
import ResetButtons from "./ResetButtons";

const ResetForm = () => {
    const [id, setId] = useState<string>("");
    const [code, setCode] = useState<string>("");
    const [pwd, setPwd] = useState<string>("");
    const [rePwd, setRePwd] = useState<string>("");

    // 새 비밀번호 유효성
    const isPwdValid = usePwdCheck(pwd);
    // 새 비밀번호와 확인 비밀번호 일치 여부
    const isSamePwd = pwd === rePwd;

    return (
        <>
            <Form>
                <TextInput
                    onChange={e => setId(e.target.value)}
                    name='아이디'
                    placeholder='아이디를 입력해주세요'
                    maxLength={8}/>
                <TextInput
                    onChange={e => setCode(e.target.value)}
                    name='비밀번호 재설정 확인 코드'
                    placeholder='비밀번호 재설정 확인 코드를 입력해주세요'
                    maxLength={6}/>
                <PwdInput
                    onChange={e => setPwd(e.target.value)}
                    name='새로운 비밀번호'
                    placeholder='특수기호 필수 포함 8자 ~ 20자'/>
                {
                    pwd && !isPwdValid && <Error>비밀번호는 특수기호 필수 포함, 8자 ~ 20자 입니다.</Error>
                }
                <PwdInput
                    onChange={e => setRePwd(e.target.value)}
                    name='새로운 비밀번호 확인'
                    placeholder='위 비밀번호를 한번 더 입력해주세요'/>
                {
                    rePwd && !isSamePwd && <Error>비밀번호가 일치하지 않습니다.</Error>
                }
            </Form>
            <ResetButtons id={id} code={code} newPwd={pwd} rePwd={rePwd}/>
        </>
    );
};

export default ResetForm;

const Form = styled.div`
  margin-top: 35px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`

const Error = styled.p`
  font-size: ${props => props.theme.fs11};
  color: ${props => props.theme.orange};
  margin: -10px 0 0 10px;
`