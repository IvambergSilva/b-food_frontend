import { api } from "@/services/apiClient";
import Router from "next/router";
import { destroyCookie, setCookie } from "nookies";
import { createContext, ReactNode, useState } from "react";

interface AuthContextData {
    user: IUserProps;
    isAuthenticated: boolean;
    signIn: (credentials: ISignInProps) => Promise<void>;
    signOut: () => void;
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

    async function signIn({ email, password }: ISignInProps) {
        try {
            const response = await api.post('/session', {
                email, password
            })

            const { id, name, token } = response.data;

            setCookie(undefined, '@bfood.token', token, {
                maxAge: 60 * 60 * 24 * 30,
                path: '/'
            })

            setUser({ id, name, email });

            api.defaults.headers['Authorization'] = `Bearer ${token}`;

            Router.push('/dashboard');
        } catch (error) {
            console.log('Error ao acessar: ', error);
        }
    }

    return (
        <AuthContext.Provider value={{ user, isAuthenticated, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    )
}

export function signOut() {
    try {
        destroyCookie(undefined, '@bfood.token')
        Router.push('/')
    } catch {
        console.log('Erro ao deslogar');
    }
}