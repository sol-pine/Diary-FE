import axiosInstance from "./instance"

// 회원가입
export const postSignUp = (id: string, pwd: string, code: string) =>
    axiosInstance.post(`/signup`, {id: id, pwd: pwd, code: code})

// 로그인
export const postLogIn = (id: string, pwd: string) =>
    axiosInstance.post(`/login`, {id: id, pwd: pwd})

// 비밀번호 재설정
export const putPwd = (id: string, code: string, newPwd: string) =>
    axiosInstance.put(`/reset`, {id: id, code: code, newPwd: newPwd})

// 탈퇴
export const deleteUser = () =>
    axiosInstance.delete(`/user`)

// 무드 기록
export const postMood = (year: number, month: number, date: number, moodText: string, color: string) =>
    axiosInstance.post(`/mood`, {year: year, month: month, date: date, moodText: moodText, color: color})

// 하루 무드 조회
export const getMood = (year: number, month: number, date: number) =>
    axiosInstance.get(`/mood`, {params: {year, month, date}})

// 무드 수정
export const putMood = (year: number, month: number, date: number, moodText: string, color: string) =>
    axiosInstance.put(`/mood`, {year: year, month: month, date: date, newText: moodText, newColor: color})

// 무드 삭제
export const deleteMood = (year: number, month: number, date: number) =>
    axiosInstance.delete('/mood', {params: {year, month, date}})

// 일년 무드 조회
export const getYearlyMoods = (year: number) =>
    axiosInstance.get(`/moods/${year}`)

// 월별 무드 조회
export const getMonthlyMoods = (year: number, month:number) =>
    axiosInstance.get(`/moods`, {params: {year, month}})