import { useContext } from "react";
import { AuthContext } from "../Single Components/Authprovider";


const useAuth = () => {
    const auth=useContext(AuthContext)
    return auth

};

export default useAuth;