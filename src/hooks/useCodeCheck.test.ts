import useCodeCheck from "./useCodeCheck";

describe('재설정 코드 유효성 검사 custom hook', () => {

    test('숫자가 아닌 6자 코드', ()=>{
        expect(useCodeCheck('findit')).toBe(false)
    })
    test('길이가 6자보다 짧은 코드', ()=> {
        expect(useCodeCheck('1234')).toBe(false)
    })
    test('길이가 6자보다 긴 코드', () => {
        expect(useCodeCheck('1234567')).toBe(false)
    })
    test('6자리 숫자 코드', () => {
        expect(useCodeCheck('123456')).toBe(true)
    })
})