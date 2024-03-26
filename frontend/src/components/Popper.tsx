import { Flex } from '@chakra-ui/react'
import React from 'react'

const Popper = ({ children, className }: { children: Readonly<React.ReactNode>; className?: string }) => {
    return (
        <Flex
            className={className}
            border={'0.5px solid #212121'}
            borderRadius={'xl'}
            bg={'#181818'}
            flexDir={'column'}
            alignItems={'start'}
        >
            {children}
        </Flex>
    )
}

export default Popper
