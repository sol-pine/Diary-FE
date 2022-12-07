import {render, screen} from "@testing-library/react";
import SignUpForm from "./SignUpForm";
import userEvent from "@testing-library/user-event";
import {BrowserRouter} from "react-router-dom";
import {QueryClient, QueryClientProvider} from "react-query";

test('체크박스 체크 시, 버튼 활성화 테스트', () => {
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

    // 회원가입 버튼의 초기 상태는 비활성화 상태
    const regButton = screen.getByRole('button', {name: '회원가입'})
    expect(regButton).toBeDisabled()

    // 체크박스 체크하면 버튼이 활성화
    userEvent.click(checkbox)
    expect(regButton).toBeEnabled()

    // 체크박스 체크를 해제하면 버튼은 다시 비활성화 상태로 변경
    userEvent.click(checkbox)
    expect(regButton).toBeDisabled()
})

test('유효성 체크 후, 에러 메시지 노출 테스트', () => {
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

    // 에러 메시지의 초기 상태는 히든
    expect(hiddenMessage).not.toBeInTheDocument()

    // 아이디에 대문자가 있는 경우
    userEvent.type(idInput, 'User0')
    // 에러 메시지 나타남
    const errorMessage = screen.getByText('아이디는 영문 소문자나 숫자, 5자 ~ 8자 입니다.')

    // 아이디에 특수 기호가 있는 경우
    userEvent.type(idInput, 'user!')
    // 에러 메시지 나타남
    expect(errorMessage).toBeInTheDocument()

    // 아이디가 5자보다 짧은 경우
    userEvent.type(idInput, 'id1')
    // 에러 메시지 나타남
    expect(errorMessage).toBeInTheDocument()

    // 아이디가 8자보다 긴 경우
    userEvent.type(idInput, 'username123')
    // 에러 메시지 나타남
    expect(errorMessage).toBeInTheDocument()

    // 아이디가 소문자와 숫자이며 길이가 5자인 경우
    userEvent.type(idInput, 'user0')
    // 에러 메시지 없음
    expect(hiddenMessage).not.toBeInTheDocument()
})