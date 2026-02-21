import { useContext } from "react";
import { AuthContext } from "../store/AuthContext";
import { loginUser, registerUser } from "../services/authApi";

export function useAuth(){
    const context = useContext(AuthContext);

    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }

    const {user, setUser, loading, setLoading} = context;

    async function handleRegister(username: string, email: string, password: string){

        setLoading(true);

        const response = await registerUser(username, email, password);

        setUser(response.user)

        setLoading(false);
    }

    async function handleLogin(email: string, password: string){
        setLoading(true);

        const response = await loginUser(email, password);

        setUser(response.user);

        setLoading(false);
    }

    return {user, loading, handleRegister, handleLogin}
}