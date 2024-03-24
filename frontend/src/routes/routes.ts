import React from 'react'

import config from '../configs'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import UserPage from '../pages/UserPage'
import PostPage from '../pages/PostPage'

type TRoute = {
    path: string
    component: React.FC
    layout?: React.FC | null
}[]

const publicRoutes: TRoute = [
    { path: config.routes.login, component: Login, layout: null },
    { path: config.routes.signup, component: Signup, layout: null },
    { path: config.routes.profile, component: UserPage },
    { path: config.routes.post, component: PostPage },
]

const privateRoutes: TRoute = []

export { publicRoutes, privateRoutes }
