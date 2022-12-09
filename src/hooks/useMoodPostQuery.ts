import {useNavigate} from "react-router-dom";
import {useMutation} from "react-query";
import {postMood} from "../routes/apis";
import useToday from "./useToday";

const useMoodPostQuery = (moodText: string, color: string) => {
    const navigate = useNavigate();
    const today = useToday();

    return useMutation(() => postMood(Number(today.year), Number(today.month), Number(today.date), today.day, moodText, color),{
        onSuccess: () => navigate('/user')
    })
}

export default useMoodPostQuery;