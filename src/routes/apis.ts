import axiosInstance from "./instance"

// 회원가입
export const postSignUp = (id: string, pwd: string, code: string) =>
    axiosInstance.post(`/signup`, {id: id, pwd:pwd, code:code})

// 로그인
export const postLogIn = (id: string, pwd: string) =>
    axiosInstance.post(`/login`, {id:id, pwd:pwd})