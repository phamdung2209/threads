import { Avatar, Box, Button, Divider, Flex, Image, Text } from '@chakra-ui/react'
import { BsThreeDots } from 'react-icons/bs'
import Actions from '../components/user-page/Actions'
import { useState } from 'react'
import Comment from '../components/Comment'

const PostPage = () => {
    const [liked, setLiked] = useState<boolean>(false)

    return (
        <>
            <Flex>
                <Flex w={'full'} alignItems={'center'} gap={3}>
                    <Avatar src={'/images/zuck-avatar.png'} name={'Mark Zuckerberg'} size={'md'} />
                    <Flex alignItems={'end'} gap={1}>
                        <Text fontSize={'md'} fontWeight={'bold'} w={'fit-content'}>
                            Mark Zuckerberg
                        </Text>
                        <Image src={'/images/verified.png'} w={4} h={4} />
                    </Flex>
                </Flex>
                <Flex alignItems={'center'} gap={4}>
                    <Text fontSize={'sm'} color={'gray.light'}>
                        3m
                    </Text>
                    <BsThreeDots />
                </Flex>
            </Flex>

            <Text my={3}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel urna vitae lectus ultrices
                facilisis. Sed auctor, felis in malesuada luctus, nunc libero fermentum nunc, nec interdum nisl nunc a
                eros
            </Text>

            <Box borderRadius={6} overflow={'hidden'} border={'1px solid'} borderColor={'gray.light'}>
                <Image src={'/images/post3.png'} w={'full'} objectFit={'cover'} />
            </Box>

            <Flex gap={3} my={3}>
                <Actions liked={liked} setLiked={setLiked} />
            </Flex>

            <Flex gap={2} alignItems={'center'}>
                <Text color={'gray.light'} fontSize={'sm'}>
                    145 replies
                </Text>
                <Box borderRadius={'full'} w={0.5} h={0.5} bg={'gray.light'}></Box>
                <Text color={'gray.light'} fontSize={'sm'}>
                    {500 + (liked ? 1 : 0)} likes
                </Text>
            </Flex>

            <Divider my={4} />

            <Flex justifyContent={'space-between'} alignItems={'center'}>
                <Flex gap={2} alignItems={'center'}>
                    <Text fontSize={'2xl'}>👋</Text>
                    <Text color={'gray.light'}>Get the app to like, reply and post</Text>
                </Flex>
                <Button>Get</Button>
            </Flex>

            <Comment
                comment="Hey this looks great! I'm looking forward to seeing the final result. Keep up the good work!"
                createdAt="2m"
                likes={10}
                username="markzuckerberg_"
                userAvatar="/images/zuck-avatar.png"
            />
            <Comment
                comment="Hey this looks great! I'm looking forward to seeing the final result. Keep up the good work!"
                createdAt="2m"
                likes={10}
                username="markzuckerberg_"
                userAvatar="/images/zuck-avatar.png"
            />
            <Comment
                comment="Hey this looks great! I'm looking forward to seeing the final result. Keep up the good work!"
                createdAt="2m"
                likes={10}
                username="markzuckerberg_"
                userAvatar="/images/zuck-avatar.png"
            />
            <Comment
                comment="Hey this looks great! I'm looking forward to seeing the final result. Keep up the good work!"
                createdAt="2m"
                likes={10}
                username="markzuckerberg_"
                userAvatar="/images/zuck-avatar.png"
            />
        </>
    )
}

export default PostPage
