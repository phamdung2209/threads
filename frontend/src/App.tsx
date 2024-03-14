import { Container } from '@chakra-ui/react'
import { Route, Routes } from 'react-router-dom'
import UserPage from './pages/UserPage'
import PostPage from './pages/PostPage'
import Header from './components/Header'
import Login from './pages/Login'

function App() {
    return (
        <Container minW={'full'}>
            <Header />
            <Container maxW={630}>
                <Routes>
                    <Route path="/:username" element={<UserPage />} />
                    <Route path="/:username/post/:pid" element={<PostPage />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </Container>
        </Container>
    )
}

export default App
