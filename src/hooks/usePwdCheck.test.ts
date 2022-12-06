import usePwdCheck from "./usePwdCheck";

describe('비밀번호 유효성 검사 custom hook', () => {

    test('특수기호 미포함, 길이 8자인 비밀번호', ()=>{
        expect(usePwdCheck('Secret12')).toBe(false)
    })
    test('특수기호 포함, 길이 7자인 비밀번호', ()=> {
        expect(usePwdCheck('Pass12!')).toBe(false)
    })
    test('특수기호 포함, 길이 21자인 비밀번호', () => {
        expect(usePwdCheck('VeryLongPassword1234!')).toBe(false)
    })
    test('특수기호 포함, 길이 8자인 비밀번호', () => {
        expect(usePwdCheck('Secret1!')).toBe(true)
    })
})