import {useNavigate} from "react-router-dom";
import {useMutation} from "react-query";
import {putMood} from "../../routes/apis";

const useUpdateQuery = (year: number, month: number, date: number, moodText: string, color: string) => {
    const navigate = useNavigate();

    return useMutation(()=>putMood(year, month, date, moodText, color), {
        onSuccess: () => navigate('/user')
    })
}

export default useUpdateQuery;