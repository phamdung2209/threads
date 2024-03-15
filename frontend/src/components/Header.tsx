import { Flex, Image, useColorMode } from '@chakra-ui/react'
import { Loader } from '../assets/icons'
import { GrHomeRounded } from 'react-icons/gr'
import { FiSearch } from 'react-icons/fi'

const Header = () => {
    const { colorMode, toggleColorMode } = useColorMode()
    return (
        <Flex justifyContent={'center'} mt={6} mb={12} gap={4}>
            <Image
                cursor={'pointer'}
                alt=""
                w={6}
                onClick={toggleColorMode}
                src={colorMode === 'light' ? '/svg/dark-logo.svg' : '/svg/light-logo.svg'}
            />

            <Loader width={5} height={5} className="loader" color="#616161" />
            <GrHomeRounded />
            <FiSearch />
        </Flex>
    )
}

export default Header
