import { useState } from 'react'
import { useSetRecoilState } from 'recoil'

import * as request from '../utills/httpRequest'
import authAtom from '../atoms/authAtom'
import { Text, useToast } from '@chakra-ui/react'

type TLoginUser = {
    username: string
    email: string
    password: string
    confirmPassword?: string
}

const useLogin = () => {
    const [loading, setLoading] = useState<boolean>(false)
    const setAuth = useSetRecoilState(authAtom)
    const toast = useToast()

    const login = async ({ username, email, password, confirmPassword }: TLoginUser) => {
        const success: boolean = handleInputError({ username, email, password }, toast)
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
                        Logged in successfully
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

    return { loading, login }
}

export default useLogin

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const handleInputError = ({ username, email, password }: TLoginUser, toast?: any) => {
    if (!username || !email || !password) {
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
    return true
}
