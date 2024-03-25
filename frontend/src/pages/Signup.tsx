'use client'

import { useState } from 'react'
import { Progress, Box, ButtonGroup, Button, Flex, Stack } from '@chakra-ui/react'

import Auth from '../components/Auth'
import { OAuthButtonGroup } from '../components/signup-card/OAuthButtonGroup'
import { Form1, Form2, Form3 } from '../components/FormStep'
import useSignup from '../hooks/useSignup'
import toast from 'react-hot-toast'
import { Loader } from '../assets/icons'

export type TFormValues = {
    fullname: string
    username: string
    email: string
    password: string
    confirmPassword: string
}

export default function Signup() {
    const [step, setStep] = useState(1)
    const [progress, setProgress] = useState(33.33)
    const [values, setValues] = useState<TFormValues>({
        fullname: '',
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    })
    const { loading, signup } = useSignup()

    const handleSubmit = async () => {
        try {
            await signup(values)
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
            toast.error(error.message)
        }
    }

    return (
        <Auth>
            <Box
                borderWidth="1px"
                rounded="lg"
                shadow="1px 1px 3px rgba(0,0,0,0.3)"
                maxWidth={800}
                p={6}
                m="10px auto"
                as="form"
                w={'full'}
            >
                <Progress hasStripe value={progress} mb="5%" mx="5%" isAnimated></Progress>
                {step === 1 ? (
                    <Form1 values={values} setValues={setValues} />
                ) : step === 2 ? (
                    <Form2 values={values} setValues={setValues} />
                ) : (
                    <Form3 />
                )}
                <ButtonGroup mt="5%" w="100%">
                    <Flex w="100%" justifyContent="space-between">
                        <Flex>
                            <Button
                                onClick={() => {
                                    setStep(step - 1)
                                    setProgress(progress - 33.33)
                                }}
                                isDisabled={step === 1}
                                colorScheme="teal"
                                variant="solid"
                                w="7rem"
                                mr="5%"
                            >
                                Back
                            </Button>
                            <Button
                                w="7rem"
                                isDisabled={step === 3}
                                onClick={() => {
                                    setStep(step + 1)
                                    if (step === 3) {
                                        setProgress(100)
                                    } else {
                                        setProgress(progress + 33.33)
                                    }
                                }}
                                colorScheme="teal"
                                variant="outline"
                            >
                                Next
                            </Button>
                        </Flex>
                        {step === 3 ? (
                            <Button
                                w="7rem"
                                colorScheme="red"
                                variant="solid"
                                onClick={handleSubmit}
                                disabled={loading}
                            >
                                {loading ? <Loader className="animate-spin size-7 text-gray-600" /> : 'Submit'}
                            </Button>
                        ) : null}
                    </Flex>
                </ButtonGroup>
                <Stack marginTop={5}>
                    <OAuthButtonGroup />
                </Stack>
            </Box>
        </Auth>
    )
}
