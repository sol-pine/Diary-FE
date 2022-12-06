import useIdCheck from "./useIdCheck";

describe('아이디 유효성 검사 custom hook', () => {

    test('대문자 포함, 길이가 5자인 아이디', ()=>{
        expect(useIdCheck('User0')).toBe(false)
    })
    test('특수문자 포함, 길이가 5자인 아이디', ()=> {
        expect(useIdCheck('user!')).toBe(false)
    })
    test('소문자와 숫자, 길이가 5자 미만인 아이디', () => {
        expect(useIdCheck('id1')).toBe(false)
    })
    test('소문자와 숫자, 길이가 9자 이상인 아이디', () => {
        expect(useIdCheck('username123')).toBe(false)
    })
    test('소문자와 숫자, 길이가 5자인 아이디', () => {
        expect(useIdCheck('user0')).toBe(true)
    })
})