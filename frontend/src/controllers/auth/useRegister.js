import axios from "axios";
import { useUser } from "@stores/UserStore";

const useRegister = () => {
    const { setUser } = useUser();

    const register = (username, password, accessCode, checked) => new Promise((resolve, reject) => axios.post("/api/auth/register", {
        username,
        password,
        accessCode,
        acceptedTerms: checked
    }).then(async res => {
        localStorage.setItem("token", res.data.token);

        await axios.get("/api/users/me").then(res => setUser(res.data.user));

        resolve();
    }).catch(reject));

    return register;
}

export default useRegister;
