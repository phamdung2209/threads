import { useState } from 'react'
import * as request from '../utills/httpRequest'
import { useSetRecoilState } from 'recoil'
import authAtom from '../atoms/authAtom'
import { Text, useToast } from '@chakra-ui/react'

const useLogout = () => {
    const [loading, setLoading] = useState<boolean>(false)
    const setAuth = useSetRecoilState(authAtom)
    const toast = useToast()

    const logout = async () => {
        setLoading(true)
        try {
            const res = await request.post('/auth/logout')
            if (res.error) throw new Error(res.error)
            setAuth({
                isAuthenticated: false,
                user: null,
            })

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
                        Logged out successfully
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

    return { loading, logout }
}

export default useLogout
