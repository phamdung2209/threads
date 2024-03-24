import { Button, ButtonGroup, VisuallyHidden, useColorModeValue } from '@chakra-ui/react'
import { GitHubIcon, GoogleIcon, TwitterIcon } from './ProviderIcons'

const providers = [
    { name: 'Google', icon: <GoogleIcon /> },
    { name: 'Twitter', icon: <TwitterIcon /> },
    { name: 'GitHub', icon: <GitHubIcon /> },
]

export const OAuthButtonGroup = () => {
    const handleLogin = (name: string) => {
        if (name === 'GitHub') {
            window.open('/api/auth/github', '_self')
        }
        if (name === 'Google') {
            window.open('/api/auth/google', '_self')
        }
        if (name === 'Twitter') {
            // window.open('/api/auth/twitter', '_self')
            alert('Twitter login is not available yet')
        }
    }

    const border = useColorModeValue('0.5px solid #d9d9d9', '0.5px solid #f3f5f726')
    const hoverBtn = useColorModeValue('#f3f3f3', '#151515')
    return (
        <ButtonGroup variant="secondary" spacing="4">
            {providers.map(({ name, icon }) => (
                <Button
                    key={name}
                    height={50}
                    flexGrow={1}
                    border={border}
                    onClick={() => handleLogin(name)}
                    _hover={{ bg: hoverBtn }}
                >
                    <VisuallyHidden>Sign in with {name}</VisuallyHidden>
                    {icon}
                </Button>
            ))}
        </ButtonGroup>
    )
}
