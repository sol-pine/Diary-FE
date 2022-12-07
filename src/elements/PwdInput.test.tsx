import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import PwdInput from "./PwdInput";

test('비밀번호 보기/숨기기 아이콘 클릭 시, 비밀번호 히든 상태 테스트', () => {
    render(<PwdInput name={'비밀번호'} placeholder={'특수기호 필수 포함 8자 ~ 20자'}/>)

    const eyeIcon = screen.getByRole('img', {name: '비밀번호 보기 아이콘'})
    const input = screen.getByPlaceholderText('특수기호 필수 포함 8자 ~ 20자')

    // 비밀번호 보기 아이콘을 누르면 input 타입이 텍스트로 변경
    userEvent.click(eyeIcon)
    expect(input).toHaveAttribute('type', 'text')

    const hideIcon = screen.getByRole('img', {name: '비밀번호 숨기기 아이콘'})

    //비밀번호 숨기기 아이콘을 누르면 input 타입이 비밀번호로 변경
    userEvent.click(hideIcon)
    expect(input).toHaveAttribute('type', 'password')
})