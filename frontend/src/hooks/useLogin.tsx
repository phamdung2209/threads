import { useState } from 'react'
import toast from 'react-hot-toast'
import { useSetRecoilState } from 'recoil'

import * as request from '../utills/httpRequest'
import authAtom from '../atoms/authAtom'

type TLoginUser = {
    username: string
    email: string
    password: string
    confirmPassword?: string
}

const useLogin = () => {
    const [loading, setLoading] = useState<boolean>(false)
    const setAuth = useSetRecoilState(authAtom)

    const login = async ({ username, email, password, confirmPassword }: TLoginUser) => {
        const success: boolean = handleInputError({ username, email, password })
        if (!success) return
        setLoading(true)
        try {
            const res = await request.post('/auth/login', {
                username,
                email,
                password,
                confirmPassword,
            })

            if (res.error) {
                throw new Error(res.error)
            }
            console.log('res', res)

            setAuth({ isAuthenticated: true, user: res })
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
            toast.error(error.message)
        } finally {
            setLoading(false)
        }
    }

    return { loading, login }
}

export default useLogin

const handleInputError = ({ username, email, password }: TLoginUser) => {
    if (!username || !email || !password) {
        toast.error('Please fill all the fields')
        return false
    }
    if (password.length < 6) {
        toast.error('Password must be at least 6 characters long')
        return false
    }
    return true
}
