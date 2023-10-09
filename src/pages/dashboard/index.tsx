import Header from "@/components/Header/Header"
import canSSRAuth from "@/utils/canSSRAuth"
import Head from "next/head"

interface IHomeProps {
    toggleTheme(): void;
    themeTitle: string
}

export default function Dashboard({ toggleTheme, themeTitle }: IHomeProps) {
    return (
        <>
            <Head>
                <title>B-Food - Painel</title>
            </Head>

            <Header
                toggleTheme={toggleTheme}
                themeTitle={themeTitle}
            />
        </>
    )
}

export const getServerSideProps = canSSRAuth(async (context) => {
    return {
        props: {}
    }
})