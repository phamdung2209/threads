import { Container } from '@chakra-ui/react'
import { Route, Routes } from 'react-router-dom'
import UserPage from './pages/UserPage'
import PostPage from './pages/PostPage'
import Header from './components/Header'

function App() {
    return (
        <Container minW={'full'}>
            <Header />
            <Container maxW={630}>
                <Routes>
                    <Route path="/:username" element={<UserPage />} />
                    <Route path="/:username/post/:pid" element={<PostPage />} />
                </Routes>
            </Container>
        </Container>
    )
}

export default App
