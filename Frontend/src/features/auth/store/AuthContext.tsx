import { createContext, useState, type ReactNode } from "react";

interface User {
    id: string;
    username: string;
    email: string;
    profileImage?: string;
    bio?: string;
}

interface AuthContextType {
    user: User | null;
    loading: boolean;
    setUser: (user: User | null) => void;
    setLoading: (loading: boolean) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export default function AuthProvider({children}: {children: ReactNode}){

    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    return (
        <AuthContext.Provider value={{user, loading, setLoading, setUser}}>
            {children}
        </AuthContext.Provider>
    )
}

export {AuthContext}