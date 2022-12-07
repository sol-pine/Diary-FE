import {render, screen} from "@testing-library/react";
import LogInForm from "./LogInForm";
import userEvent from "@testing-library/user-event";
import {BrowserRouter} from "react-router-dom";
import {QueryClient, QueryClientProvider} from "react-query";


test('로그인 버튼 활성화 테스트', () => {
    const queryClient = new QueryClient();
    render(
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <LogInForm/>
            </BrowserRouter>
        </QueryClientProvider>
    )

    const idInput = screen.getByPlaceholderText('아이디를 입력해주세요')
    const pwdInput = screen.getByPlaceholderText('비밀번호를 입력해주세요')
    const button = screen.getByRole('button', {name: '로그인'})

    // 버튼은 비활성화 상태로 시작
    expect(button).toBeDisabled()

    // 아이디와 비밀번호가 입력되면
    userEvent.type(idInput, 'username')
    userEvent.type(pwdInput, 'Password123!')
    // 버튼이 활성화 상태로 변경
    expect(button).toBeEnabled()
})