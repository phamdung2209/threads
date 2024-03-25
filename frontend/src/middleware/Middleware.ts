import { useLocation, useNavigate } from 'react-router-dom'

import { publicRoutes, privateRoutes } from '../routes/routes'
import config from '../configs'
import { TAuth } from '../atoms/authAtom'
import { useEffect } from 'react'

const Middleware = ({ auth }: { auth: TAuth }) => {
    const location = useLocation()
    const navigate = useNavigate()

    const isAuthPage: boolean = publicRoutes.some((route) => route.path === location.pathname)
    const isPrivateRoute: boolean = privateRoutes.some((route) => route.path === location.pathname)

    useEffect(() => {
        if (auth.isAuthenticated && auth.user && isAuthPage) {
            navigate(config.routes.home)
        }

        if (!auth.isAuthenticated && !auth.user && isPrivateRoute) {
            navigate(config.routes.login)
        }
    }, [auth, location, navigate, isAuthPage, isPrivateRoute])
}

export default Middleware
