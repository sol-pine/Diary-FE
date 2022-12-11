import {useNavigate} from "react-router-dom";
import {useMutation, useQueryClient} from "react-query";
import {putMood} from "../../routes/apis";
import {useAppDispatch} from "../../redux/store";
import {setModalState} from "../../redux/modules/modalSlice";

const useUpdateQuery = (year: number, month: number, date: number, moodText: string, color: string) => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const queryClient = useQueryClient();

    return useMutation(() => putMood(year, month, date, moodText, color), {
        onSuccess: () => queryClient.invalidateQueries('moods')
            .then(()=> {
                dispatch(setModalState(false))
                navigate('/user')
            })
    })
}

export default useUpdateQuery;