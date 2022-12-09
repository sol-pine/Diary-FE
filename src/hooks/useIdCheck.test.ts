import useIdCheck from "./useIdCheck";

describe('아이디 유효성 검사 custom hook', () => {

    test('대문자가 있는 아이디', ()=>{
        expect(useIdCheck('User0')).toBeFalsy()
    })
    test('특수문자가 있는 아이디', ()=> {
        expect(useIdCheck('user!')).toBeFalsy()
    })
    test('길이가 5자보다 짧은 아이디', () => {
        expect(useIdCheck('user')).toBeFalsy()
    })
    test('길이가 9자보다 긴 아이디', () => {
        expect(useIdCheck('username123')).toBeFalsy()
    })
    test('소문자와 숫자, 길이가 5자인 아이디', () => {
        expect(useIdCheck('user0')).toBeTruthy()
    })
})