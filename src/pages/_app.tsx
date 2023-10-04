import { AuthProvider } from '@/contexts/AuthContext'
import type { AppProps } from 'next/app'
import { GlobalStyle } from '../styles/globals'
import '../styles/font.scss'
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from 'react-toastify'

export default function App({ Component, pageProps }: AppProps) {
    return (
        <AuthProvider>
            <ToastContainer autoClose={2500}/>
            <GlobalStyle />
            <Component {...pageProps} />
        </AuthProvider>
    )
}
