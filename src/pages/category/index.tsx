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

interface IHomeProps {
    toggleTheme(): void;
    themeTitle: string
}

export default function Category({ toggleTheme, themeTitle }: IHomeProps) {

    const [name, setName] = useState('')

    async function handleRegister(event: FormEvent) {
        event.preventDefault()

        if (name === '') {
            toast.error('Digite uma categoria', {
                style: {
                    fontSize: '1.5rem'
                }
            })
        }

        const apiClient = setupApiClient();
        await apiClient.post('/category', {
            name: name
        });

        toast.success('Categoria cadastrada com sucesso', {
            style: {
                fontSize: '1.5rem'
            }
        })

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
                <form className={Styles.formCategory} onSubmit={handleRegister}>
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