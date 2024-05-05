import {
    Avatar,
    Box,
    Flex,
    Link,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Portal,
    Text,
    VStack,
    useToast,
} from '@chakra-ui/react'
import { BsInstagram } from 'react-icons/bs'
import { CgMoreO } from 'react-icons/cg'

const UserHeader = () => {
    const toast = useToast()
    const copyUrl = () => {
        navigator.clipboard.writeText(window.location.href).then(() => {
            toast({
                position: 'top',

                render: () => (
                    <Text
                        color={'white'}
                        bg={'#545454eb'}
                        padding={3}
                        borderRadius={4}
                        display={'flex'}
                        alignItems={'center'}
                        justifyContent={'center'}
                    >
                        Copied
                    </Text>
                ),
            })
        })
    }

    return (
        <VStack gap={4} alignItems={'start'}>
            <Flex justifyContent={'space-between'} w={'full'}>
                <Box>
                    <Text fontSize={'2xl'} fontWeight={'bold'}>
                        Mark Zuckerberg
                    </Text>
                    <Flex gap={2} alignItems={'center'}>
                        <Text fontSize={'small'}>markzuckerberg</Text>
                        <Text
                            cursor={'pointer'}
                            fontSize={'xs'}
                            bg={'gray.dark'}
                            color={'gray.light'}
                            borderRadius={'full'}
                            paddingX={2}
                            paddingY={1}
                        >
                            threads.net
                        </Text>
                    </Flex>
                </Box>
                <Box>
                    <Avatar
                        src="/images/zuck-avatar.png"
                        name="Mark Zuckerberg"
                        size={{
                            base: 'lg',
                            md: 'xl',
                            // lg: '2xl',
                        }}
                    />
                </Box>
            </Flex>

            <Text>
                Co-founder, executive chairman and CEO of Meta Platforms, Inc. Co-founder and CEO of Facebook, Inc.
            </Text>
            <Flex w={'full'} justifyContent={'space-between'}>
                <Flex gap={2} alignItems={'center'}>
                    <Text color={'gray.light'}>3.2M followers</Text>
                    <Box w={1} h={1} borderRadius={'full'} bg={'gray.light'}></Box>
                    <Link color={'gray.light'}>instagram.com</Link>
                </Flex>

                <Flex>
                    <Box className="icon-container" cursor={'pointer'}>
                        <BsInstagram size={24} />
                    </Box>
                    <Menu>
                        <MenuButton>
                            <Box className="icon-container" cursor={'pointer'}>
                                <CgMoreO size={24} />
                            </Box>
                        </MenuButton>
                        <Portal>
                            <MenuList bg={'gray.dark'}>
                                <MenuItem bg={'gray.dark'} onClick={copyUrl}>
                                    Copy Link
                                </MenuItem>
                                <MenuItem bg={'gray.dark'}>New Window</MenuItem>
                                <MenuItem bg={'gray.dark'}>Open Closed Tab</MenuItem>
                                <MenuItem bg={'gray.dark'}>Open File</MenuItem>
                            </MenuList>
                        </Portal>
                    </Menu>
                </Flex>
            </Flex>

            <Flex w={'full'} fontWeight={'500'} cursor={'pointer'}>
                <Flex
                    flex={1}
                    alignItems={'center'}
                    justifyContent={'center'}
                    pb={3}
                    borderBottom={'1.5px solid white'}
                    fontWeight={'600'}
                >
                    <Text>Threads</Text>
                </Flex>
                <Flex
                    flex={1}
                    alignItems={'center'}
                    justifyContent={'center'}
                    pb={3}
                    borderBottom={'1px solid #323232'}
                    color={'gray.light'}
                >
                    <Text>Replies</Text>
                </Flex>
                <Flex
                    flex={1}
                    alignItems={'center'}
                    justifyContent={'center'}
                    pb={3}
                    borderBottom={'1px solid #323232'}
                    color={'gray.light'}
                >
                    <Text>Reposts</Text>
                </Flex>
            </Flex>
        </VStack>
    )
}

export default UserHeader
