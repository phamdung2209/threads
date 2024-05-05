import React from 'react'

import config from '../configs'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import UserPage from '../pages/UserPage'
import PostPage from '../pages/PostPage'
import Home from '../pages/Home'
import UpdateProfile from '../pages/UpdateProfile'

export type TRoute = {
    path: string
    component: React.FC
    layout?: React.FC | null
}[]

const publicRoutes: TRoute = [
    { path: config.routes.login, component: Login, layout: null },
    { path: config.routes.signup, component: Signup, layout: null },
]

const privateRoutes: TRoute = [
    { path: config.routes.home, component: Home },
    { path: config.routes.updateProfile, component: UpdateProfile },
]

const accessibleRoutes: TRoute = [
    { path: config.routes.profile, component: UserPage },
    { path: config.routes.post, component: PostPage },
]

export { publicRoutes, privateRoutes, accessibleRoutes }
