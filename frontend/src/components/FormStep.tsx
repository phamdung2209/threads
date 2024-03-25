import { useState } from 'react'
import {
    Button,
    Flex,
    FormControl,
    FormHelperText,
    FormLabel,
    GridItem,
    Heading,
    Input,
    InputGroup,
    InputLeftAddon,
    InputRightElement,
    SimpleGrid,
    Stack,
    Text,
    Textarea,
} from '@chakra-ui/react'
import { Link } from 'react-router-dom'

import { TFormValues } from '../pages/Signup'
import config from '../configs'

export const Form1 = ({
    values,
    setValues,
}: {
    values: TFormValues
    setValues: React.Dispatch<React.SetStateAction<TFormValues>>
}) => {
    return (
        <>
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

            <Flex>
                <FormControl mr="5%">
                    <FormLabel htmlFor="fullname" fontWeight={'normal'}>
                        Full Name
                    </FormLabel>
                    <Input
                        id="fullname"
                        placeholder="Full Name"
                        value={values.fullname}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            setValues({ ...values, fullname: e.target.value })
                        }
                    />
                </FormControl>

                <FormControl>
                    <FormLabel htmlFor="username" fontWeight={'normal'}>
                        User Name
                    </FormLabel>
                    <Input
                        id="username"
                        placeholder="User Name"
                        value={values.username}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            setValues({ ...values, username: e.target.value })
                        }
                    />
                </FormControl>
            </Flex>
            <FormControl mt="2%">
                <FormLabel htmlFor="email" fontWeight={'normal'}>
                    Email address
                </FormLabel>
                <Input
                    id="email"
                    type="email"
                    value={values.email}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setValues({ ...values, email: e.target.value })
                    }
                />
                <FormHelperText>We&apos;ll never share your email.</FormHelperText>
            </FormControl>
        </>
    )
}

export const Form2 = ({
    values,
    setValues,
}: {
    values: TFormValues
    setValues: React.Dispatch<React.SetStateAction<TFormValues>>
}) => {
    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)

    return (
        <>
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

            <FormControl>
                <FormLabel htmlFor="password" fontWeight={'normal'} mt="2%">
                    Password
                </FormLabel>
                <InputGroup size="md">
                    <Input
                        pr="4.5rem"
                        type={show ? 'text' : 'password'}
                        placeholder="Enter password"
                        value={values.password}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            setValues({ ...values, password: e.target.value })
                        }
                    />
                    <InputRightElement width="4.5rem">
                        <Button h="1.75rem" size="sm" onClick={handleClick}>
                            {show ? 'Hide' : 'Show'}
                        </Button>
                    </InputRightElement>
                </InputGroup>
            </FormControl>

            <FormControl>
                <FormLabel htmlFor="confirm-password" fontWeight={'normal'} mt="2%">
                    Confirm Password
                </FormLabel>
                <InputGroup size="md">
                    <Input
                        pr="4.5rem"
                        type={show ? 'text' : 'password'}
                        placeholder="Confirm Password"
                        value={values.confirmPassword}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            setValues({ ...values, confirmPassword: e.target.value })
                        }
                    />
                    <InputRightElement width="4.5rem">
                        <Button h="1.75rem" size="sm" onClick={handleClick}>
                            {show ? 'Hide' : 'Show'}
                        </Button>
                    </InputRightElement>
                </InputGroup>
            </FormControl>
        </>
    )
}

export const Form3 = () => {
    return (
        <>
            <Heading w="100%" textAlign={'center'} fontWeight="normal">
                Social Handles
            </Heading>
            <SimpleGrid columns={1} spacing={6}>
                <FormControl as={GridItem} colSpan={[3, 2]}>
                    <FormLabel
                        fontSize="sm"
                        fontWeight="md"
                        color="gray.700"
                        _dark={{
                            color: 'gray.50',
                        }}
                    >
                        Website
                    </FormLabel>
                    <InputGroup size="sm">
                        <InputLeftAddon
                            bg="gray.50"
                            _dark={{
                                bg: 'gray.800',
                            }}
                            color="gray.500"
                            rounded="md"
                        >
                            http://
                        </InputLeftAddon>
                        <Input type="tel" placeholder="www.example.com" focusBorderColor="brand.400" rounded="md" />
                    </InputGroup>
                </FormControl>

                <FormControl id="email" mt={1}>
                    <FormLabel
                        fontSize="sm"
                        fontWeight="md"
                        color="gray.700"
                        _dark={{
                            color: 'gray.50',
                        }}
                    >
                        About
                    </FormLabel>
                    <Textarea
                        placeholder="you@example.com"
                        rows={3}
                        shadow="sm"
                        focusBorderColor="brand.400"
                        fontSize={{
                            sm: 'sm',
                        }}
                    />
                    <FormHelperText>Brief description for your profile. URLs are hyperlinked.</FormHelperText>
                </FormControl>
            </SimpleGrid>
        </>
    )
}
