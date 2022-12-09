import {useNavigate} from "react-router-dom";
import {useMutation} from "react-query";
import {postMood} from "../routes/apis";
import useToday from "./useToday";

const useMoodPostQuery = (moodText: string, color: string) => {
    const navigate = useNavigate();

    const today = useToday();
    const year = Number(today?.year);
    const month = Number(today?.month);
    const date = Number(today?.date);
    const day = today?.day

    return useMutation(() => postMood(year, month, date, day, moodText, color), {
        onSuccess: () => navigate('/user')
    })
}

export default useMoodPostQuery;