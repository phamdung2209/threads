import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Text, useToast } from '@chakra-ui/react'

import { TFormValues } from '../pages/Signup'
import * as request from '../utills/httpRequest'
import config from '../configs'

const useSignup = () => {
    const toast = useToast()
    const [loading, setLoading] = useState<boolean>(false)
    const navigate = useNavigate()

    const signup = async ({ fullname, username, email, password, confirmPassword }: TFormValues) => {
        const success: boolean = handleInputError({ fullname, username, email, password, confirmPassword }, toast)
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
            navigate(config.routes.home)

            toast({
                position: 'top',
                render: () => (
                    <Text
                        color={'white'}
                        bg={'#545454eb'}
                        padding={3}
                        borderRadius={4}
                        display={'flex'}
                        alignItems={'center'}
                        justifyContent={'center'}
                    >
                        Signed up successfully
                    </Text>
                ),
            })
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
            toast({
                position: 'top',
                render: () => (
                    <Text
                        color={'white'}
                        bg={'#545454eb'}
                        padding={3}
                        borderRadius={4}
                        display={'flex'}
                        alignItems={'center'}
                        justifyContent={'center'}
                    >
                        {error.message}
                    </Text>
                ),
            })
        } finally {
            setLoading(false)
        }
    }

    return { loading, signup }
}

export default useSignup

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const handleInputError = ({ fullname, username, email, password, confirmPassword }: TFormValues, toast?: any) => {
    if (!fullname || !username || !email || !password || !confirmPassword) {
        // toast.error('Please fill all the fields')
        toast({
            position: 'top',
            render: () => (
                <Text
                    color={'white'}
                    bg={'#545454eb'}
                    padding={3}
                    borderRadius={4}
                    display={'flex'}
                    alignItems={'center'}
                    justifyContent={'center'}
                >
                    Please fill all the fields
                </Text>
            ),
        })
        return false
    }
    if (password.length < 6) {
        toast({
            position: 'top',
            render: () => (
                <Text
                    color={'white'}
                    bg={'#545454eb'}
                    padding={3}
                    borderRadius={4}
                    display={'flex'}
                    alignItems={'center'}
                    justifyContent={'center'}
                >
                    Password must be at least 6 characters long
                </Text>
            ),
        })
        return false
    }
    if (password !== confirmPassword) {
        toast({
            position: 'top',
            render: () => (
                <Text
                    color={'white'}
                    bg={'#545454eb'}
                    padding={3}
                    borderRadius={4}
                    display={'flex'}
                    alignItems={'center'}
                    justifyContent={'center'}
                >
                    Passwords do not match
                </Text>
            ),
        })
        return false
    }
    return true
}
