import Head from "next/head";
import Login from "./login";
import { useEffect } from "react";
import Router, { useRouter } from "next/router";

export default function Home({ toggleTheme, themeTitle }) {
    const router = useRouter()

    useEffect(() => {
        if (router.pathname === '/') Router.push('/login')
    }, [])

    return (
        <>
            <Head>
                <title>B-Food - Faça o seu login</title>
            </Head>

            <Login
                toggleTheme={toggleTheme}
                themeTitle={themeTitle}
            />
        </>
    )
}