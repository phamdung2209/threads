import { useState } from 'react'
import * as request from '../utills/httpRequest'
import toast from 'react-hot-toast'

const useLogout = () => {
    const [loading, setLoading] = useState<boolean>(false)
    const logout = async () => {
        setLoading(true)
        try {
            const res = await request.post('/auth/logout')
            if (res.error) throw new Error(res.error)
            // await request.get('/auth/me')
            window.location.pathname = '/login'
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
