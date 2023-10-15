import Button from "@/components/Button/Button";
import { Input } from "@/components/Input/Input";
import Head from "next/head";
import Header from "@/components/Header/Header";
import Title from "@/components/Title/Title";
import { FormEvent, useState } from "react"
import setupApiClient from "@/services/api";
import { toast } from "react-toastify";
import canSSRAuth from "@/utils/canSSRAuth";
import { IToggleProps } from "@/contexts/authContext";
import { CategoryContainer } from "./category.styles";

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
        <CategoryContainer>
            <Head>
                <title>B-Food - Nova categoria</title>
            </Head>

            <Header
                toggleTheme={toggleTheme}
                themeTitle={themeTitle}
            />

            <main
                className="categoryMain"
            >
                <Title
                    name="Cadastrar categoria"
                />
                
                <form className="categoryForm" onSubmit={handleRegister}>
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
        </CategoryContainer>
    )
}

export const getServerSideProps = canSSRAuth(async (context) => {
    return {
        props: {}
    }
})