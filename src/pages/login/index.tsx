import Button from "@/components/Button/Button";
import { Input } from "@/components/Input/Input";
import { AuthContext } from "@/contexts/authContext";
import React, { FormEvent, useContext, useState } from "react";
import Styles from './login.module.scss'
import { toast } from "react-toastify";
import ImageDark from '../../assets/images/logo-dark.png'
import ImageLight from '../../assets/images/logo-light.png'
import Switch from "@/components/Switch/Switch";
import CanSSRGuest from "@/utils/canSSRGuest";
import { DarkMode, LightMode } from "@/styles/variables";

interface IHomeProps {
    toggleTheme(): void;
    themeTitle: string
}

export default function Login({ toggleTheme, themeTitle }: IHomeProps) {
    const [newUser, setNewUser] = useState(false)
    const [loading, setLoading] = useState(false)

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const { signIn } = useContext(AuthContext)
    const { signUp } = useContext(AuthContext)

    async function handleLogin(event: FormEvent) {
        event.preventDefault()

        if (email === '' || password === '') {
            toast.error('Preencha todos os campos', {
                style: {
                    fontSize: '1.5rem'
                }
            })

            setEmail('')
            setPassword('')
            return;
        }

        newUser ? handleSignUp() : handleSigIn()
    }

    async function handleSignUp() {
        if (name === '') {
            toast.error('Preencha todos os campos', {
                style: {
                    fontSize: '1.5rem'
                }
            })

            setName('')
            return;
        }

        setLoading(true)

        let userInfo = {
            name: name,
            email: email,
            password: password
        }

        const feeback = await signUp(userInfo)

        if (!feeback) {
            setNewUser(false)
            setName('')
            setEmail('')
            setPassword('')
        }

        toast.success('Cadastro efetuado com sucesso', {
            style: {
                fontSize: '1.5rem'
            }
        })

        setLoading(false)
    }

    async function handleSigIn() {
        setLoading(true)

        let userInfo = {
            email: email,
            password: password,
        }

        const feeback = await signIn(userInfo)

        if (feeback) {
            toast.success('Login efetuado com sucesso', {
                style: {
                    fontSize: '1.5rem'
                }
            })
        }

        setLoading(false)
    }

    return (
        <div className={Styles.loginContainer}
            style={{
                backgroundColor: `${themeTitle === 'dark'
                    ? DarkMode.colors.base.gray_500
                    : LightMode.colors.base.gray_500}`
            }}
        >
            <Switch
                onClickToggle={toggleTheme}
            />

            <img src={
                themeTitle === 'dark'
                    ? ImageDark.src
                    : ImageLight.src
            } alt="Logo da aplicação" />

            <form onSubmit={handleLogin} className={Styles.formLogin}>
                {newUser &&
                    <Input
                        placeholder="Digite o nome da sua empresa"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                }

                <Input
                    placeholder="Digite o seu email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <Input
                    placeholder="Digite a sua senha"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                {newUser
                    ? <section>
                        <Button
                            type="submit"
                            name="Cadastrar"
                            loading={loading}
                        />

                        <Button
                            type="button"
                            name="Já possuo uma conta"
                            onClick={() => setNewUser(false)}
                        />
                    </section>
                    : <section>
                        <Button
                            type="submit"
                            name="Acessar"
                            loading={loading}
                        />

                        <Button
                            type="button"
                            name="Criar uma nova conta"
                            onClick={() => setNewUser(true)}
                        />
                    </section>
                }
            </form>
        </div>
    )
}

export const getServerSideProps = CanSSRGuest(async (context) => {
    return {
        props: {}
    }
})