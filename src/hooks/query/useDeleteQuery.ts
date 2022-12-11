import {useMutation, useQueryClient} from "react-query";
import {deleteMood} from "../../routes/apis";
import {setModalState} from "../../redux/modules/modalSlice";
import {useAppDispatch} from "../../redux/store";

const useDeleteQuery = (year: number, month: number, date: number) => {
    const queryClient = useQueryClient();
    const dispatch = useAppDispatch();

    return useMutation(() => deleteMood(year, month, date), {
        onSuccess: () => queryClient.invalidateQueries('moods')
            .then(()=> dispatch(setModalState(false)))
    })
}

export default useDeleteQuery;