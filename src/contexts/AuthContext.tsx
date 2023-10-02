import { createContext, ReactNode, useState } from "react";

interface AuthContextData {
    user: IUserProps;
    isAuthenticated: boolean;
    signIn: (credentials: ISignInProps) => Promise<void>;
}

interface IUserProps {
    id: string;
    name: string;
    email: string;
}

interface ISignInProps {
    email: string;
    password: string;
}

interface IAuthProviderProps {
    children: ReactNode
}

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: IAuthProviderProps) {
    const [user, setUser] = useState<IUserProps>()

    const isAuthenticated = !!user

    async function signIn({ email, password }: ISignInProps) { }

    return (
        <AuthContext.Provider value={{ user, isAuthenticated, signIn }}>
            {children}
        </AuthContext.Provider>
    )
}