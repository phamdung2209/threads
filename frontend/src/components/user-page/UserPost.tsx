import { Avatar, Box, Divider, Flex, Image, Text } from '@chakra-ui/react'
import { BsThreeDots } from 'react-icons/bs'

import Actions from './Actions'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const UserPost = ({
    likes,
    replies,
    postImg,
    postTitle,
}: {
    likes: number
    replies: number
    postImg?: string
    postTitle: string
}) => {
    const [liked, setLiked] = useState<boolean>(false)

    return (
        <>
            <Link to={'/markzukerberg/post/HKOkaoj1J'}>
                <Flex gap={3} mb={4} py={5}>
                    <Flex flexDirection={'column'} alignItems={'center'}>
                        <Avatar src={'/images/zuck-avatar.png'} name={'Mark Zuckerberg'} size={'md'} />
                        <Box w={'2px'} h={'full'} bg={'gray.light'} my={2}></Box>
                        <Box position={'relative'}>
                            <Avatar
                                size={'2xs'}
                                name="John doe"
                                src="/images/zuck-avatar.png"
                                position={'absolute'}
                                top={-1}
                                left={'-4px'}
                                padding={'2px'}
                            />
                            <Avatar
                                size={'xs'}
                                name="John doe"
                                src="/images/zuck-avatar.png"
                                position={'absolute'}
                                bottom={-1}
                                right={'-4px'}
                                padding={'2px'}
                                scale={2}
                            />
                            <Avatar
                                size={'xs'}
                                name="John doe"
                                src="/images/zuck-avatar.png"
                                position={'absolute'}
                                bottom={0}
                                left={'1px'}
                                padding={'2px'}
                            />
                        </Box>
                    </Flex>

                    <Flex flexDirection={'column'} gap={2}>
                        <Flex justifyContent={'space-between'} alignItems={'center'}>
                            <Flex fontSize={'sm'} fontWeight={'bold'} alignItems={'center'} gap={1}>
                                <Text>markzukerberg</Text>
                                <Image src={'/images/verified.png'} w={4} h={4} />
                            </Flex>

                            <Flex alignItems={'center'} gap={4}>
                                <Text fontSize={'xs'} color={'gray.light'}>
                                    1d
                                </Text>
                                <BsThreeDots />
                            </Flex>
                        </Flex>

                        <Text fontSize={'sm'}>
                            {/* {postTitle.length > 100 ? postTitle.slice(0, 100) + '...' : postTitle} */}
                            {postTitle}
                        </Text>

                        {postImg && (
                            <Box borderRadius={6} overflow={'hidden'} border={'1px solid'} borderColor={'gray.light'}>
                                <Image src={postImg} w={'full'} objectFit={'cover'} />
                            </Box>
                        )}

                        <Flex gap={3}>
                            <Actions liked={liked} setLiked={setLiked} />
                        </Flex>

                        <Flex gap={2} alignItems={'center'}>
                            <Text color={'gray.light'} fontSize={'sm'}>
                                {replies} replies
                            </Text>
                            <Box w={0.5} h={0.5} borderRadius={'full'} bg={'gray.light'}></Box>
                            <Text color={'gray.light'} fontSize={'sm'}>
                                {likes} likes
                            </Text>
                        </Flex>
                    </Flex>
                </Flex>
            </Link>
            <Divider my={4} />
        </>
    )
}

export default UserPost
