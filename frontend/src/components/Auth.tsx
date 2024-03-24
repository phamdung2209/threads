import { Container, Image, Stack } from '@chakra-ui/react'

const Auth = ({ children }: { children: Readonly<React.ReactNode> }) => {
    return (
        <Container
            w={'full'}
            h={'100vh'}
            minH={520}
            position={'relative'}
            className="flex align-items-center justify-center mx-auto"
        >
            <Image
                src="/images/bgLogin.webp"
                alt="background"
                position="fixed"
                top="-10vh"
                left="0vw"
                h={510}
                w="auto"
                objectFit={'cover'}
                zIndex="-1"
                userSelect={'none'}
                display={{
                    base: 'none',
                    md: 'block',
                }}
            />
            <Stack position={'absolute'} w={'full'} bottom={0}>
                {children}
            </Stack>
        </Container>
    )
}

export default Auth
