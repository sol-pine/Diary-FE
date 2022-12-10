import {useMutation, useQueryClient} from "react-query";
import {deleteMood} from "../../routes/apis";

const useDeleteQuery = (year: number, month: number, date: number) => {
    const queryClient = useQueryClient()

    return useMutation(() => deleteMood(year, month, date), {
        onSuccess: () => queryClient.invalidateQueries('mood')
    })
}

export default useDeleteQuery;