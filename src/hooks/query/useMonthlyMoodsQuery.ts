import {useQuery} from "react-query";
import {AxiosResponse} from "axios";
import {getMonthlyMoods} from "../../routes/apis";

interface ResponseType {
    data: {
        _id: string;
        userId: string;
        year: number;
        month: number;
        date: number;
        moodText: string;
        color: string;
    }[]
}

const useMonthlyMoodsQuery = (year: number, month: number) => {
    return useQuery<AxiosResponse<ResponseType>, Error>(['moods', {
        year: year, month: month
    }], () => getMonthlyMoods(year, month))
}

export default useMonthlyMoodsQuery;