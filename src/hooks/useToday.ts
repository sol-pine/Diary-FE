const useToday = () => {
    const days = new Date()
    const weekLabel = ['일', '월', '화', '수', '목', '금', '토']

    const year = days.getFullYear()
    const month = days.getMonth()+1
    const date = days.getDate()
    const day = weekLabel[days.getDay()]

    return {year: year, month: month, date:date, day:day}
}

export default useToday;