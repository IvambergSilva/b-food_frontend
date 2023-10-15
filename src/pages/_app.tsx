import { AuthProvider } from '@/contexts/authContext'
import type { AppProps } from 'next/app'
import { GlobalStyle } from '../styles/globals'
import '../styles/font.scss'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify'
import { ThemeProvider } from 'styled-components';
import { useState } from 'react';
import { DarkMode, LightMode } from '@/styles/variables';
import { IntlProvider } from 'react-intl';

export default function App({ Component, pageProps }: AppProps) {
    const [theme, setTheme] = useState(DarkMode)

    const toggleTheme = () => {
        setTheme(theme.title === 'light' ? DarkMode : LightMode)
    }

    return (
        <ThemeProvider theme={theme}>
            <AuthProvider>
                <IntlProvider locale='pt-BR'>
                    <ToastContainer
                        autoClose={2500}
                        style={{ fontSize: '1.5rem' }} />
                    <GlobalStyle />
                    <Component
                        toggleTheme={toggleTheme}
                        themeTitle={theme.title}
                        {...pageProps}
                    />
                </IntlProvider>
            </AuthProvider>
        </ThemeProvider>
    )
}
