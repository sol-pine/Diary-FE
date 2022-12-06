import {render, screen} from "@testing-library/react";
import SignUpForm from "./SignUpForm";
import userEvent from "@testing-library/user-event";

// 초기 조건 테스트

 test('4개의 input 초기 상태', ()=>{
     render(<SignUpForm/>)

     const idInput = screen.getByPlaceholderText('영문 소문자, 숫자 5자 ~ 8자')
     expect(idInput).toHaveAttribute('type', 'text')

     const pwdInput = screen.getByPlaceholderText('특수기호 필수 포함 8자 ~ 20자')
     expect(pwdInput).toHaveAttribute('type', 'password')

     const rePwdInput = screen.getByPlaceholderText('위 비밀번호를 한번 더 입력해주세요')
     expect(rePwdInput).toHaveAttribute('type', 'password')

     const codeInput = screen.getByPlaceholderText('숫자로만 6자')
     expect(codeInput).toHaveAttribute('type', 'text')
 })

test('체크박스 초기 상태', () => {
    render(<SignUpForm/>)

    // 체크박스 초기 상태는 체크가 안 된 상태
    const checkbox = screen.getByRole('checkbox', {hidden:true})
    expect(checkbox).not.toBeChecked()
})

test('2개 버튼 초기 상태', () => {
    render(<SignUpForm/>)

    // 회원가입 버튼의 초기 상태는 비활성화 상태
    const regButton = screen.getByRole('button', {name: '회원가입'})
    expect(regButton).toBeDisabled()

    screen.getByRole('button', {name: '이미 계정이 있으면? 로그인하기'})
})

// 기능 테스트

test('체크박스 체크/체크해제 시, 버튼 활성화 상태 변경 테스트', () => {
    render(<SignUpForm/>)

    const checkbox = screen.getByRole('checkbox', {hidden:true})
    const regButton = screen.getByRole('button', {name: '회원가입'})

    // 체크박스 체크하면 버튼이 활성화
    userEvent.click(checkbox)
    expect(regButton).toBeEnabled()

    // 체크박스 체크를 해제하면 버튼은 다시 비활성화 상태로 변경
    userEvent.click(checkbox)
    expect(regButton).toBeDisabled()
})

test('비밀번호 보기/숨기기 아이콘 클릭 시, 비밀번호 히든 상태 테스트', ()=> {
    render(<SignUpForm/>)

    // 비밀번호 보기 아이콘을 누르면 비밀번호 input 타입이 텍스트로 변경,
    const eyeIcon = screen.getAllByRole('img', {name: '비밀번호 보기 아이콘'})
    const pwdInput = screen.getByPlaceholderText('특수기호 필수 포함 8자 ~ 20자')

    userEvent.click(eyeIcon[0])
    expect(pwdInput).toHaveAttribute('type', 'text')

    //비밀번호 숨기기 아이콘을 누르면 input 타입이 비밀번호로 변경
    const hideIcon = screen.getAllByRole('img', {name: '비밀번호 숨기기 아이콘'})

    userEvent.click(hideIcon[0])
    expect(pwdInput).toHaveAttribute('type', 'password')
})
