import {useQuery} from "react-query";
import {getMood} from "../../routes/apis";

const useMoodQuery = (year: number, month: number, date: number) => {
    return useQuery(['mood', {year: year, month: month, date: date}], () => getMood(year, month, date),{
        refetchOnWindowFocus:false
    })
}

export default useMoodQuery;