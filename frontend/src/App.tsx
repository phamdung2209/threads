import { Container } from '@chakra-ui/react'
import { Route, Routes } from 'react-router-dom'
import React, { Fragment } from 'react'

import { publicRoutes } from './routes'
import Layouts from './components/layouts'

function App() {
    return (
        <Routes>
            {publicRoutes.map((route, idx) => {
                const Page = route.component
                let Layout: React.ElementType = Layouts

                if (route.layout) {
                    Layout = route.layout
                } else if (route.layout === null) {
                    Layout = Fragment
                }

                return (
                    <Route
                        key={idx}
                        path={route.path}
                        element={
                            <Container minW={'full'}>
                                <Layout>
                                    <Page />
                                </Layout>
                            </Container>
                        }
                    />
                )
            })}
        </Routes>
    )
}

export default App
