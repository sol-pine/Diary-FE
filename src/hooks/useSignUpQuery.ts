import {useMutation} from "react-query";
import {postSignUp} from "../routes/apis";

const useSignUpQuery = (id: string, pwd: string, code: string) => {
    return useMutation(()=>postSignUp(id, pwd, code))
}

export default useSignUpQuery;