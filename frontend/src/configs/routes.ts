type TRouteConfig = {
    home: string
    login: string
    signup: string
    profile: string
    post: string
    notFound: string
}

const routesConfig: TRouteConfig = {
    home: '/',
    login: '/login',
    signup: '/signup',
    profile: '/:username',
    post: '/:username/post/:pid',
    notFound: '/404',
}

export default routesConfig
