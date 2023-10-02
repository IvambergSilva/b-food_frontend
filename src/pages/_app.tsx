import { AuthProvider } from '@/contexts/AuthContext'
import type { AppProps } from 'next/app'
import { GlobalStyle } from '../styles/globals'
import '../styles/font.scss'

export default function App({ Component, pageProps }: AppProps) {
    return (
        <AuthProvider>
            <GlobalStyle />
            <Component {...pageProps} />
        </AuthProvider>
    )
}
