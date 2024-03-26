import { useState } from 'react'
import * as request from '../utills/httpRequest'
import toast from 'react-hot-toast'
import { useSetRecoilState } from 'recoil'
import authAtom from '../atoms/authAtom'

const useLogout = () => {
    const [loading, setLoading] = useState<boolean>(false)
    const setAuth = useSetRecoilState(authAtom)

    const logout = async () => {
        setLoading(true)
        try {
            const res = await request.post('/auth/logout')
            if (res.error) throw new Error(res.error)
            setAuth({
                isAuthenticated: false,
                user: null,
            })

            toast.success('Logged out successfully')
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
            toast.error(error.message)
        } finally {
            setLoading(false)
        }
    }

    return { loading, logout }
}

export default useLogout
