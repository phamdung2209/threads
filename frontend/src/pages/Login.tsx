import {
    Box,
    Button,
    Checkbox,
    Divider,
    FormControl,
    HStack,
    Heading,
    Input,
    Stack,
    Text,
    useColorModeValue,
    useToast,
} from '@chakra-ui/react'

import config from '../configs'
import { OAuthButtonGroup } from '../components/signup-card/OAuthButtonGroup'
import Auth from '../components/Auth'
import { Link } from 'react-router-dom'
import useLogin from '../hooks/useLogin'
import { useState } from 'react'
import { Loader } from '../assets/icons'

const Login = () => {
    const toast = useToast()
    const [valueLogin, setValueLogin] = useState<{
        username: string
        email: string
        password: string
    }>({
        username: '',
        email: '',
        password: '',
    })
    const { loading, login } = useLogin()

    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
            await login({
                username: valueLogin.username || valueLogin.email,
                email: valueLogin.email || valueLogin.username,
                password: valueLogin.password,
                confirmPassword: valueLogin.password,
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
        }
    }

    return (
        <Auth>
            <Stack spacing="6">
                <Stack spacing={{ base: '2', md: '3' }} textAlign="center">
                    <Heading size={{ base: 'xs', md: 'sm' }}>Log in with your Threads account</Heading>
                    <Text color="fg.muted">
                        Don't have an account?{' '}
                        <Link to={config.routes.signup} className="text-[#42a5f5] hover:underline">
                            Sign up
                        </Link>
                    </Text>
                </Stack>
            </Stack>
            <Box py={{ base: '5', sm: '8' }} px={{ base: '4', sm: '10' }}>
                <form onSubmit={handleLogin}>
                    <Stack spacing="6">
                        <Stack spacing="5">
                            <FormControl display={'flex'} flexDirection={'column'} gap={3}>
                                <Input
                                    border={'none'}
                                    id="email"
                                    type="email"
                                    autoComplete="off"
                                    placeholder="Username or email"
                                    bg={useColorModeValue('white', 'gray.dark')}
                                    h={16}
                                    fontSize={'lg'}
                                    _placeholder={{
                                        color: useColorModeValue('gray.400', '#777'),
                                    }}
                                    boxShadow={'md'}
                                    borderRadius={'xl'}
                                    _focusWithin={{
                                        boxShadow: useColorModeValue('', '0 0 0 1px #f3f5f726'),
                                    }}
                                    value={valueLogin.username}
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                        setValueLogin({ ...valueLogin, username: e.target.value })
                                    }
                                />
                                <Input
                                    border={'none'}
                                    id="password"
                                    type="password"
                                    autoComplete="off"
                                    placeholder="Password"
                                    bg={useColorModeValue('white', 'gray.dark')}
                                    h={16}
                                    fontSize={'lg'}
                                    _placeholder={{
                                        color: useColorModeValue('gray.400', '#777'),
                                    }}
                                    boxShadow={'md'}
                                    borderRadius={'xl'}
                                    _focusWithin={{
                                        boxShadow: useColorModeValue('', '0 0 0 1px #f3f5f726'),
                                    }}
                                    value={valueLogin.password}
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                        setValueLogin({ ...valueLogin, password: e.target.value })
                                    }
                                />
                            </FormControl>
                        </Stack>
                        <HStack justify="space-between">
                            <Checkbox defaultChecked color={'#777'}>
                                Remember me
                            </Checkbox>
                            <Button _hover={{ textDecor: 'underline' }} variant="text" size="sm" color={'#777'}>
                                Forgot password?
                            </Button>
                        </HStack>
                        <Stack spacing="6">
                            <Button
                                borderRadius="lg"
                                h={14}
                                boxShadow="sm"
                                bg="#fff"
                                color={'#9F9F9F'}
                                _hover={{ opacity: 1 }}
                                cursor={'not-allowed'}
                                _active={{ opacity: 1 }}
                                disabled={loading}
                                type="submit"
                            >
                                {loading ? <Loader className="animate-spin size-7 text-gray-600" /> : 'Log In'}
                            </Button>
                            <HStack>
                                <Divider />
                                <Text textStyle="sm" whiteSpace="nowrap" color={useColorModeValue('gray.400', '#777')}>
                                    or continue with
                                </Text>
                                <Divider />
                            </HStack>
                            <OAuthButtonGroup />
                        </Stack>
                    </Stack>
                </form>
            </Box>
        </Auth>
    )
}

export default Login
