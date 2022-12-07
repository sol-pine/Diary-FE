import axiosInstance from "./instance"

export const postSignUp = (id: string, pwd: string, code: string) =>
    axiosInstance.post(`/signup`, {id: id, pwd:pwd, code:code})
