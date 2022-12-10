import {useMutation} from "react-query";
import {postLogIn} from "../../routes/apis";
import {useNavigate} from "react-router-dom";

const useLogInQuery = (id: string, pwd: string) => {
    const navigate = useNavigate();

    return useMutation(() => postLogIn(id, pwd),{
        onSuccess: (data) => {
            sessionStorage.setItem('token', data.data.token)
            navigate('/')
        }
    })
}

export default useLogInQuery;