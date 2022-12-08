import {render, screen} from "@testing-library/react";
import ResetForm from "./ResetForm";
import userEvent from "@testing-library/user-event";
import {QueryClient, QueryClientProvider} from "react-query";
import {BrowserRouter} from "react-router-dom";

test('버튼 활성화 테스트', ()=>{
    const queryClient = new QueryClient()
    render(
        <BrowserRouter>
            <QueryClientProvider client={queryClient}>
                <ResetForm/>
            </QueryClientProvider>
        </BrowserRouter>
    )

    const id = screen.getByPlaceholderText('아이디를 입력해주세요')
    const code = screen.getByPlaceholderText('비밀번호 재설정 확인 코드를 입력해주세요')
    const pwd = screen.getByPlaceholderText('특수기호 필수 포함 8자 ~ 20자')
    const rePwd = screen.getByPlaceholderText('위 비밀번호를 한번 더 입력해주세요')
    const button = screen.getByRole('button', {name: '재설정'})

    // 버튼의 초기 상태는 비활성화 상태
    expect(button).toBeDisabled()
    // 모든 입력 값을 입력하면
    userEvent.type(id, 'username')
    userEvent.type(code, '000000')
    userEvent.type(pwd, 'Password123!')
    userEvent.type(rePwd, 'Password123!')
    // 버튼은 활성화 상태로 변경
    expect(button).toBeEnabled()
})

