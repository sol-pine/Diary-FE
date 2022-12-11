import {useMutation, useQueryClient} from "react-query";
import {postMood} from "../../routes/apis";
import useToday from "../useToday";
import {useNavigate} from "react-router-dom";
import {setModalState} from "../../redux/modules/modalSlice";
import {useAppDispatch} from "../../redux/store";


const usePostQuery = (moodText: string, color: string) => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const queryClient = useQueryClient();

    const today = useToday();
    const year = today.year;
    const month = today.month;
    const date = today.date;

    return useMutation(() => postMood(year, month, date, moodText, color), {
        onSuccess: () => queryClient.invalidateQueries('moods')
            .then(()=> {
                dispatch(setModalState(false))
                navigate('/user')
            })
    })
}

export default usePostQuery;