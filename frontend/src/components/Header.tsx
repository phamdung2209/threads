import { Box, Flex, Image, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { Link, useLocation } from 'react-router-dom'
import Tippy from '@tippyjs/react/headless'

import { Bar, Loader } from '../assets/icons'
import useLogout from '../hooks/useLogout'
import Popper from './Popper'
import { MENU_ITEMS, PRIMARY_HEADER_BUTTONS } from '../utills/constants'
import Buttons from './Buttons'

const Header = () => {
    const { colorMode, toggleColorMode } = useColorMode()
    const { loading, logout } = useLogout()
    // const location = useLocation()
    const handleTitle = (title: string) => {
        if (title === 'Log out') {
            return loading ? <Loader className="animate-spin size-6" /> : title
        } else {
            return title
        }
    }

    return (
        <Flex
            justifyContent={'space-between'}
            alignItems={'center'}
            gap={4}
            py={1}
            className="header"
            position={'sticky'}
            top={0}
            left={0}
            right={0}
            bg={useColorModeValue('white', '#101010f5')}
            zIndex={1}
        >
            <Image
                cursor={'pointer'}
                alt=""
                w={8}
                onClick={toggleColorMode}
                src={colorMode === 'light' ? '/svg/dark-logo.svg' : '/svg/light-logo.svg'}
                css={{
                    transition: 'all 0.2s ease-in-out',
                    '&:hover': {
                        transform: 'scale(1.08)',
                    },
                    '&:not(:hover)': {
                        transitionDuration: '-0.2s',
                    },
                    '&:active': {
                        scale: '0.86',
                    },
                }}
            />

            <Flex alignItems={'center'} gap={3}>
                {PRIMARY_HEADER_BUTTONS.map((item, idx) => {
                    let Comp: React.ElementType = Box

                    const props = {
                        to: item.to,
                    } as {
                        to?: string
                    }

                    if (item.to) {
                        Comp = Link
                        props.to = item.to
                    }

                    return (
                        <Comp
                            {...props}
                            key={idx + Math.random()}
                            className={`nav-item cursor-pointer rounded-lg text-[#4D4D4D] px-8 py-5 transition-all duration-300 ease-in-out relative flex items-center justify-center`}
                        >
                            <span className="bg-[#ffffff0d] rounded-lg absolute px-11 py-8"></span>
                            {item.icon}
                        </Comp>
                    )
                })}
            </Flex>

            <Tippy
                delay={[200, 200]}
                placement="bottom-end"
                interactive={true}
                trigger="click"
                appendTo={() => document.body}
                render={(attrs) => (
                    <Box tabIndex={-1} {...attrs}>
                        <Popper className="w-48 overflow-hidden">
                            {MENU_ITEMS.map((item, idx) => (
                                <Buttons
                                    to={item.to}
                                    key={idx}
                                    className={`w-full text-left p-[15px] text-[15px] text-[#f3f5f7] font-semibold active:bg-[#0A0A0A] ${
                                        idx !== MENU_ITEMS.length - 1 ? 'border-b border-[#383939]' : ''
                                    }`}
                                    onClick={item.title === 'Log out' ? logout : undefined}
                                >
                                    {/* {item.title === 'Log out' && loading && <Loader className="animate-spin size-6" />}
                                    {item.title} */}
                                    {handleTitle(item.title)}
                                </Buttons>
                            ))}
                        </Popper>
                    </Box>
                )}
            >
                <Bar
                    cursor={'pointer'}
                    className="text-[#4D4D4D] hover:text-white transition-all duration-200 ease-in-out active:scale-90"
                />
            </Tippy>
        </Flex>
    )
}

export default Header
