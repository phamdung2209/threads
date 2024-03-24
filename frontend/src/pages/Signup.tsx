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
} from '@chakra-ui/react'

import Auth from '../components/Auth'
import config from '../configs'
import { OAuthButtonGroup } from '../components/signup-card/OAuthButtonGroup'
import { Link } from 'react-router-dom'

const Signup = () => {
    return (
        <Auth>
            <Stack spacing="6">
                <Stack spacing={{ base: '2', md: '3' }} textAlign="center">
                    <Heading size={{ base: 'xs', md: 'sm' }}>Sign up with your Threads account</Heading>
                    <Text color="fg.muted">
                        Already have an account?{' '}
                        <Link to={config.routes.login} className="text-[#42a5f5] hover:underline">
                            Log in
                        </Link>
                    </Text>
                </Stack>
            </Stack>
            <Box py={{ base: '5', sm: '8' }} px={{ base: '4', sm: '10' }}>
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
                            disabled={true}
                        >
                            Sign up
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
            </Box>
        </Auth>
    )
}

export default Signup
