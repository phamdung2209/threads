import React, { Fragment } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Container } from '@chakra-ui/react'
import Layouts from '../components/layouts'
import { TRoute } from '../routes'
import { accessibleRoutes } from '../routes/routes'

const RenderRoutes = ({ routes }: { routes: TRoute }) => {
    const allRoutes = [...accessibleRoutes, ...routes]

    return (
        <Routes>
            {allRoutes.map((route, idx) => {
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

export default RenderRoutes
