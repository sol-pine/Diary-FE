import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {Provider} from "react-redux";
import store from "../redux/store";
import {BrowserRouter} from "react-router-dom";
import MainPage from "./MainPage";

test('기록하기 버튼 클릭 시, 모달 열림', () => {
    render(
        <Provider store={store}>
            <BrowserRouter>
                <MainPage/>
            </BrowserRouter>
        </Provider>
    )

    const button = screen.getByRole('button', {name: '오늘의 기분 기록하기'})
    const hiddenModalInput = screen.queryByPlaceholderText('오늘을 기록하세요 (띄어쓰기 포함 140자)')

    // 모달이 닫힌 초기 상태
    expect(hiddenModalInput).not.toBeInTheDocument()

    // 오늘의 기분 기록하기 버튼 클릭
    userEvent.click(button)

    // 모달 열림
    const modalInput = screen.getByPlaceholderText('오늘을 기록하세요 (띄어쓰기 포함 140자)')
    expect(modalInput).toBeInTheDocument()
})

test('x버튼 클릭 시, 모달 닫힘', () => {
    render(
        <Provider store={store}>
            <BrowserRouter>
                <MainPage/>
            </BrowserRouter>
        </Provider>
    )

    // 오늘의 기분 기록하기 버튼 클릭
    const button = screen.getByRole('button', {name: '오늘의 기분 기록하기'})
    userEvent.click(button)

    // 모달 열림
    const modalInput = screen.getByPlaceholderText('오늘을 기록하세요 (띄어쓰기 포함 140자)')
    expect(modalInput).toBeInTheDocument()

    // x버튼 클릭
    const closeButton = screen.getByRole('img', {name: '닫기 아이콘'})
    userEvent.click(closeButton)

    // 모달 닫힘
    const hiddenModalInput = screen.queryByPlaceholderText('오늘을 기록하세요 (띄어쓰기 포함 140자)')
    expect(hiddenModalInput).not.toBeInTheDocument()
})
