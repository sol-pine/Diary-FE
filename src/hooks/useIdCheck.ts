const useIdCheck = (id: string) => {
    const idRegExp = /^[a-z0-9]{5,8}$/;
    return idRegExp.test(id);
}

export default useIdCheck;