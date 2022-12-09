import {useQuery} from "react-query";
import {getMood} from "../routes/apis";

const useMoodQuery = (year: number, month: number, date: number) => {
    return useQuery('mood', () => getMood(year, month, date))
}

export default useMoodQuery;