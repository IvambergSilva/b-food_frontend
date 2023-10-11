import { api } from "@/services/apiClient";
import Router from "next/router";
import { destroyCookie, parseCookies, setCookie } from "nookies";
import { createContext, ReactNode, useEffect, useState } from "react";
import { toast } from "react-toastify";

interface AuthContextData {
    user: IUserProps;
    isAuthenticated: boolean;
    signIn: (credentials: ISignInProps) => Promise<boolean>;
    signUp: (credentials: ISignUpProps) => Promise<boolean>;
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

interface ISignUpProps {
    name: string
    email: string;
    password: string;
}

interface IAuthProviderProps {
    children: ReactNode
}

export interface IToggleProps {
    toggleTheme(): void;
    themeTitle: string
}

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: IAuthProviderProps) {
    const [user, setUser] = useState<IUserProps>()
    const isAuthenticated = !!user

    useEffect(() => {
        const { '@bfood.token': token } = parseCookies();

        if (token) {
            api.get('/me').then((response) => {
                const { id, name, email } = response.data
                setUser({id, name, email})
            }).catch(() => {
                signOut()
            })
        }

    }, [])

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

            return true
        } catch (error) {
            toast.error('Error ao acessar. Observe o console.')
            console.log('Error: ', error);

            return false
        }
    }

    async function signUp({ name, email, password }: ISignUpProps) {
        try {
            const response = await api.post('/users', {
                name, email, password
            })

            return false
        } catch (error) {
            toast.error('Error ao acessar. Observe o console.')
            console.log('Error: ', error);
        }
    }

    return (
        <AuthContext.Provider value={{ user, isAuthenticated, signIn, signUp, signOut }}>
            {children}
        </AuthContext.Provider>
    )
}

export function signOut() {
    try {
        destroyCookie(undefined, '@bfood.token')
        Router.push('/')
        toast.success('Sessão encerrada com sucesso')
    } catch {
        toast.error('Error ao deslogar')
    }
}