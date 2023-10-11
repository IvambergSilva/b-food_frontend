import Header from "@/components/Header/Header"
import canSSRAuth from "@/utils/canSSRAuth"
import Head from "next/head"
import Category from "../category";
import { IToggleProps } from "@/contexts/authContext";

export default function Dashboard({ toggleTheme, themeTitle }: IToggleProps) {
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