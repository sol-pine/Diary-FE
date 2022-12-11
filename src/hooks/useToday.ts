const useToday = () => {
    const days = new Date()

    const year = days.getFullYear()
    const month = days.getMonth()+1
    const date = days.getDate()
    const day = days.getDay()

    return {year: year, month: month, date:date, day:day}
}

export default useToday;