import {render, screen} from "@testing-library/react";
import SignUpForm from "./SignUpForm";
import userEvent from "@testing-library/user-event";
import {BrowserRouter} from "react-router-dom";
import {QueryClient, QueryClientProvider} from "react-query";

// 초기 조건 테스트

test('4개의 input 초기 상태', () => {
    const queryClient = new QueryClient()
    render(
        <BrowserRouter>
            <QueryClientProvider client={queryClient}>
                <SignUpForm/>
            </QueryClientProvider>
        </BrowserRouter>
    )

    const idInput = screen.getByPlaceholderText('영문 소문자, 숫자 5자 ~ 8자')
    expect(idInput).toHaveAttribute('type', 'text')

    const pwdInput = screen.getByPlaceholderText('특수기호 필수 포함 8자 ~ 20자')
    const pwdMessage = screen.queryByText('비밀번호는 특수기호 필수 포함, 8자 ~ 20자 입니다.')

    expect(pwdInput).toHaveAttribute('type', 'password')
    expect(pwdMessage).not.toBeInTheDocument()

    const rePwdInput = screen.getByPlaceholderText('위 비밀번호를 한번 더 입력해주세요')
    const rePwdMessage = screen.queryByText('비밀번호가 일치하지 않습니다.')

    expect(rePwdInput).toHaveAttribute('type', 'password')
    expect(rePwdMessage).not.toBeInTheDocument()

    const codeInput = screen.getByPlaceholderText('숫자로만 6자')
    const codeMessage = screen.queryByText('비밀번호 재설정 확인 코드는 숫자 6자입니다.')

    expect(codeInput).toHaveAttribute('type', 'text')
    expect(codeMessage).not.toBeInTheDocument()
})

test('체크박스 초기 상태', () => {
    const queryClient = new QueryClient()
    render(
        <BrowserRouter>
            <QueryClientProvider client={queryClient}>
                <SignUpForm/>
            </QueryClientProvider>
        </BrowserRouter>
    )

    // 체크박스 초기 상태는 체크가 안 된 상태
    const checkbox = screen.getByRole('checkbox', {hidden: true})
    expect(checkbox).not.toBeChecked()
})

test('2개 버튼 초기 상태', () => {
    const queryClient = new QueryClient()
    render(
        <BrowserRouter>
            <QueryClientProvider client={queryClient}>
                <SignUpForm/>
            </QueryClientProvider>
        </BrowserRouter>
    )

    // 회원가입 버튼의 초기 상태는 비활성화 상태
    const regButton = screen.getByRole('button', {name: '회원가입'})
    expect(regButton).toBeDisabled()

    screen.getByRole('button', {name: '이미 계정이 있으면? 로그인하기'})
})

// 기능 테스트

test('체크박스 체크/체크해제 시, 버튼 활성화 상태 변경 테스트', () => {
    const queryClient = new QueryClient()
    render(
        <BrowserRouter>
            <QueryClientProvider client={queryClient}>
                <SignUpForm/>
            </QueryClientProvider>
        </BrowserRouter>
    )

    const checkbox = screen.getByRole('checkbox', {hidden: true})
    const regButton = screen.getByRole('button', {name: '회원가입'})

    // 체크박스 체크하면 버튼이 활성화
    userEvent.click(checkbox)
    expect(regButton).toBeEnabled()

    // 체크박스 체크를 해제하면 버튼은 다시 비활성화 상태로 변경
    userEvent.click(checkbox)
    expect(regButton).toBeDisabled()
})

test('비밀번호 보기/숨기기 아이콘 클릭 시, 비밀번호 히든 상태 테스트', () => {
    const queryClient = new QueryClient()
    render(
        <BrowserRouter>
            <QueryClientProvider client={queryClient}>
                <SignUpForm/>
            </QueryClientProvider>
        </BrowserRouter>
    )

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

test('유효성 검사에 따른 에러 메시지 노출 테스트', () => {
    const queryClient = new QueryClient()
    render(
        <BrowserRouter>
            <QueryClientProvider client={queryClient}>
                <SignUpForm/>
            </QueryClientProvider>
        </BrowserRouter>
    )

    const idInput = screen.getByPlaceholderText('영문 소문자, 숫자 5자 ~ 8자')
    const hiddenMessage = screen.queryByText('아이디는 영문 소문자나 숫자, 5자 ~ 8자 입니다.')
    // id 에러메시지의 초기 상태는 히든
    expect(hiddenMessage).not.toBeInTheDocument()

    // id에 대문자가 있는 경우
    userEvent.type(idInput, 'User0')
    // id 에러메시지 나타남
    const errorMessage = screen.getByText('아이디는 영문 소문자나 숫자, 5자 ~ 8자 입니다.')

    // id에 특수 기호가 있는 경우
    userEvent.type(idInput, 'user!')
    // id 에러메시지 나타남
    expect(errorMessage).toBeInTheDocument()

    // id가 5자보다 짧은 경우
    userEvent.type(idInput, 'id1')
    // id 에러메시지 나타남
    expect(errorMessage).toBeInTheDocument()

    // id가 8자보다 긴 경우
    userEvent.type(idInput, 'username123')
    // id 에러메시지 나타남
    expect(errorMessage).toBeInTheDocument()

    // id가 소문자와 숫자, 길이가 5자인 경우
    userEvent.type(idInput, 'user0')
    // id 에러메시지 없음
    expect(hiddenMessage).not.toBeInTheDocument()
})