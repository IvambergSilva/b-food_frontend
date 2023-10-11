import Button from "@/components/Button/Button";
import { Input } from "@/components/Input/Input";
import Head from "next/head";
import Header from "@/components/Header/Header";
import Styles from './category.module.scss'
import { DarkMode, LightMode } from "@/styles/variables";
import Title from "@/components/Title/Title";
import { FormEvent, useState } from "react"
import setupApiClient from "@/services/api";
import { toast } from "react-toastify";
import canSSRAuth from "@/utils/canSSRAuth";
import { IToggleProps } from "@/contexts/authContext";

export default function Category({ toggleTheme, themeTitle }: IToggleProps) {

    const [name, setName] = useState('')

    async function handleRegister(event: FormEvent) {
        event.preventDefault()

        if (name === '') {
            toast.error('Digite uma categoria')
        }

        const apiClient = setupApiClient();
        await apiClient.post('/category', {
            name: name
        });

        toast.success('Categoria cadastrada com sucesso')

        setName('')
    }

    return (
        <div className={Styles.categoryContainer}
            style={{
                backgroundColor: `${themeTitle === 'dark'
                    ? DarkMode.colors.base.gray_500
                    : LightMode.colors.base.gray_500}`
            }}>
            <Head>
                <title>B-Food - Painel</title>
            </Head>

            <Header
                toggleTheme={toggleTheme}
                themeTitle={themeTitle}
            />

            <main
                className={Styles.categoryMain}

            >
                <form className={Styles.categoryForm} onSubmit={handleRegister}>
                    <Title
                        name="Cadastrar categoria"
                    />
                    <Input
                        placeholder="Digite uma nova categoria"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <Button
                        name="Cadastrar"
                    />
                </form>
            </main>
        </div>
    )
}

export const getServerSideProps = canSSRAuth(async (context) => {
    return {
        props: {}
    }
})