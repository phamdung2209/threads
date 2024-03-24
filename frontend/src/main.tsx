import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider, ColorModeScript, extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'
import { BrowserRouter as Router } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'

import App from './App.tsx'
import './index.scss'
import { RecoilRoot } from 'recoil'

interface StyleProps {
    color: string
    bg: string
}

const style = {
    global: (props: StyleProps) => ({
        body: {
            color: mode('gray.800', 'whiteAlpha.900')(props),
            bg: mode('gray.50', '#101010')(props),
        },
    }),
}

const config = {
    initialColorMode: 'dark',
    useSystemColorMode: true,
}

const colors = {
    gray: {
        light: '#616161',
        dark: '#1e1e1e',
    },
}

const theme = extendTheme({ config, colors, styles: style })

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RecoilRoot>
            <Router>
                <ChakraProvider theme={theme}>
                    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
                    <App />
                </ChakraProvider>
            </Router>
            <Toaster />
        </RecoilRoot>
    </React.StrictMode>,
)
