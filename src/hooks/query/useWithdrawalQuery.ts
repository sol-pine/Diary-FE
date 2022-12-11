import {useNavigate} from "react-router-dom";
import {useMutation} from "react-query";
import {deleteUser} from "../../routes/apis";

const useWithdrawalQuery = () => {
    const navigate = useNavigate();

    return useMutation(() => deleteUser(), {
        onSuccess: () => {
            sessionStorage.removeItem('token');
            navigate('/');
        }
    })
}

export default useWithdrawalQuery;