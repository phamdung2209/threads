import { Button } from '@chakra-ui/react'

const Login = () => {
    return (
        <>
            <Button onClick={() => window.open('/api/auth/github', '_self')}>Login with github</Button>
            <Button onClick={() => window.open('/api/auth/google', '_self')}>Login with google</Button>
        </>
    )
}

export default Login
