import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default function MyDocument() {
    return (
        <Html lang="pt-br">
            <Head />
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}

MyDocument.getInitialProps = async (ctx: DocumentContext) => {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage

    try {
        ctx.renderPage = () => originalRenderPage({
            enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />)
        })

        const initialProps = await Document.getInitialProps(ctx);

        return {
            ...initialProps,
            styles: (
                <>
                    {initialProps.styles}
                    {sheet.getStyleElement()}
                </>
            )
        }
    } finally {
        sheet.seal();
    }
}