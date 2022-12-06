const useCodeCheck = (code: string) => {
    const codeRegExp = /^[0-9]{6}$/;
    return code.length && codeRegExp.test(code);
}

export default useCodeCheck;