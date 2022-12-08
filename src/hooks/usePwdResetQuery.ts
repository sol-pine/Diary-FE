import {useMutation} from "react-query";
import {putPwd} from "../routes/apis";
import {useNavigate} from "react-router-dom";

const usePwdResetQuery = (id: string, code: string, newPwd: string) => {
    const navigate = useNavigate();

    return useMutation(() => putPwd(id, code, newPwd), {
        onSuccess: () => navigate('/login')
    })
}

export default usePwdResetQuery;