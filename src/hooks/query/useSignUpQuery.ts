import {useMutation} from "react-query";
import {postSignUp} from "../../routes/apis";
import {useNavigate} from "react-router-dom";

const useSignUpQuery = (id: string, pwd: string, code: string) => {
    const navigate = useNavigate();

    return useMutation(()=>postSignUp(id, pwd, code),{
        onSuccess: () => navigate('/login')
    })
}

export default useSignUpQuery;