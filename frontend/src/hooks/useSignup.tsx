import { useState } from 'react'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

import { TFormValues } from '../pages/Signup'
import * as request from '../utills/httpRequest'
import config from '../configs'

const useSignup = () => {
    const [loading, setLoading] = useState<boolean>(false)
    const navigate = useNavigate()

    const signup = async ({ fullname, username, email, password, confirmPassword }: TFormValues) => {
        const success: boolean = handleInputError({ fullname, username, email, password, confirmPassword })
        if (!success) return
        setLoading(true)
        try {
            const res = await request.post('/auth/signup', {
                name: fullname,
                username,
                email,
                password,
                confirmPassword,
            })

            if (res.error) throw new Error(res.error)

            // redirect to login page
            navigate(config.routes.login)

            toast.success('Signed up successfully')
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
            toast.error(error.message)
        } finally {
            setLoading(false)
        }
    }

    return { loading, signup }
}

export default useSignup

const handleInputError = ({ fullname, username, email, password, confirmPassword }: TFormValues) => {
    if (!fullname || !username || !email || !password || !confirmPassword) {
        toast.error('Please fill all the fields')
        return false
    }
    if (password.length < 6) {
        toast.error('Password must be at least 6 characters long')
        return false
    }
    if (password !== confirmPassword) {
        toast.error('Passwords do not match')
        return false
    }
    return true
}
