import Button from "@/components/Button/Button";
import { Input, TextArea } from "@/components/Input/Input";
import { AuthContext } from "@/contexts/AuthContext";
import Head from "next/head";
import React, { FormEvent, useContext, useState } from "react";
import Styles from '../styles/index.module.scss'
import { Base } from "@/styles/variables";

export default function Home() {
    const [newUser, setNewUser] = useState(false)
    const [loading, setLoading] = useState(false)

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const { signIn } = useContext(AuthContext)

    async function handleLogin(event: FormEvent) {
        event.preventDefault()

        let userInfo = {
            email: email,
            password: password,
        }

        await signIn(userInfo)
    }

    return (
        <div
            className={Styles.homeContainer}
            style={{ backgroundColor: Base.gray_600 }}
        >
            <Head>
                <title>B-Food - Faça o seu login</title>
            </Head>

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
                            loading={false}
                        />

                        <Button
                            type="button"
                            name="Já possuo uma conta"
                            loading={false}
                            onClick={() => setNewUser(false)}
                        />
                    </section>
                    : <section>
                        <Button
                            type="submit"
                            name="Acessar"
                            loading={false}
                        />

                        <Button
                            type="button"
                            name="Criar uma nova conta"
                            loading={false}
                            onClick={() => setNewUser(true)}
                        />
                    </section>
                }
            </form>
        </div>
    )
}
