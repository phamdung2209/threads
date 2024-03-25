import { useRecoilValue } from 'recoil'

import { publicRoutes, privateRoutes } from './routes'
import authAtom, { TAuth } from './atoms/authAtom'
import Middleware from './middleware/Middleware'
import RenderRoutes from './utills/renderRoute'

function App() {
    const auth: TAuth = useRecoilValue(authAtom)
    Middleware({ auth })

    return <RenderRoutes routes={auth.isAuthenticated && auth.user ? privateRoutes : publicRoutes} />
}

export default App
