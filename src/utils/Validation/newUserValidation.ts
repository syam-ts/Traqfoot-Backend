export const NewUserValidation = (
    infrastructure_name: string,
    email: string,
    mobile: number,
    password: string,
    since: number
) => {
    if (!infrastructure_name || !email || !mobile || !password || !since)
        throw new Error("All fileds need to be filled");

    if (infrastructure_name.length < 10 || infrastructure_name.length > 30)
        throw new Error("infrastructure name should be b/w 10 to 30 characters");

    if (email.length < 7 || email.length > 30)
        throw new Error("Email need to be valid");

    if (mobile.toString().length < 0 || mobile.toString().length > 10)
        throw new Error("Mobile number should be vaild");

    if (since < 1947 || since > 2026) throw new Error("Year must be valid");

    return;
};
