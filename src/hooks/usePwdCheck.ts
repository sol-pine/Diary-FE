const usePwdCheck = (pwd: string) => {
    const pwdRegExp = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&^/])[A-Za-z\d@$!%*#?&^/]{8,20}$/;
    return pwdRegExp.test(pwd);
}

export default usePwdCheck;