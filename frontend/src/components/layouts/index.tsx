import React from 'react'
import Header from '../Header'
import { Box, Container } from '@chakra-ui/react'

const Layouts = ({ children }: { children: React.ReactNode }) => {
    return (
        <Box>
            <Header />
            <Container maxW={630}>{children}</Container>
        </Box>
    )
}

export default Layouts
