import { Flex, Image, useColorMode } from '@chakra-ui/react'

const Header = () => {
    const { colorMode, toggleColorMode } = useColorMode()
    return (
        <Flex justifyContent={'center'} mt={6} mb={12}>
            <Image
                cursor={'pointer'}
                alt=""
                w={6}
                onClick={toggleColorMode}
                src={colorMode === 'light' ? '/svg/dark-logo.svg' : '/svg/light-logo.svg'}
            />
        </Flex>
    )
}

export default Header
