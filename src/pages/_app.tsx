
import { GlobalStyles, colorsStyles } from '@/shared/global'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

export default function App({Component, pageProps}:AppProps ){
    return (
        <ThemeProvider theme={colorsStyles}>
            <GlobalStyles/>
            <Component {...pageProps} />
        </ThemeProvider>
        
    )
}