import {fireEvent, render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Modal from "./Modal";
import {Provider} from "react-redux";
import store from "../redux/store";
import {QueryClient, QueryClientProvider} from "react-query";
import {BrowserRouter} from "react-router-dom";

test('기록하기 버튼 활성화 테스트', () => {
    const queryClient = new QueryClient();
    render(
        <Provider store={store}>
            <BrowserRouter>
                <QueryClientProvider client={queryClient}>
                    <Modal year={2022} month={12} date={11} day={0}/>
                </QueryClientProvider>
            </BrowserRouter>
        </Provider>
    )

    const moodInput = screen.getByPlaceholderText('오늘을 기록하세요 (띄어쓰기 포함 140자)')
    const colorInput = screen.getByLabelText('오늘의 기분과 어울리는 색')
    const button = screen.getByRole('button', {name: '기록하기'})

    // 버튼의 초기 상태는 비활성화 상태
    expect(button).toBeDisabled()

    // 무드와 컬러가 입력되면
    userEvent.type(moodInput, '오늘 기분 최고')
    fireEvent.input(colorInput, {target: {value: '#333333'}})

    // 버튼이 활성화로 변경
    expect(button).toBeEnabled()
})