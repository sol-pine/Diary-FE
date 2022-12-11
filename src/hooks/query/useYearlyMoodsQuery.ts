import {useQuery} from "react-query";
import {getYearlyMoods} from "../../routes/apis";

const useYearlyMoodsQuery = (year: number) => {
    return useQuery(['moods', {year: year}], () => getYearlyMoods(year))
}

export default useYearlyMoodsQuery;