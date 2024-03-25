import { Button, Flex, Image, useColorMode } from '@chakra-ui/react'
import { Loader } from '../assets/icons'
import { GrHomeRounded } from 'react-icons/gr'
import { FiSearch } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import useLogout from '../hooks/useLogout'

const Header = () => {
    const { colorMode, toggleColorMode } = useColorMode()
    const { loading, logout } = useLogout()
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
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
            <Button onClick={() => logout()}>{loading ? <Loader className="animate-spin size-7" /> : 'Log out'}</Button>
        </Flex>
    )
}

export default Header
