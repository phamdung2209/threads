import { Avatar, Divider, Flex, Image, Text } from '@chakra-ui/react'
import { useState } from 'react'
import { BsThreeDots } from 'react-icons/bs'
import Actions from './user-page/Actions'

type TCommentProps = {
    comment: string
    createdAt: string
    likes: number
    username: string
    userAvatar: string
}

const Comment = ({ comment, createdAt, likes, username, userAvatar }: TCommentProps) => {
    const [liked, setLiked] = useState<boolean>(false)
    return (
        <>
            <Flex gap={4} py={2} my={2} w={'full'}>
                <Avatar src={userAvatar} name={username} size={'md'} />
                <Flex flexDirection={'column'}>
                    <Flex justifyContent={'space-between'} alignItems={'center'} w={'full'}>
                        <Text fontSize={'sm'} fontWeight={'bold'} display={'flex'} alignItems={'center'} gap={1}>
                            {username} <Image src={'/images/verified.png'} w={4} h={4} />
                        </Text>
                        <Flex gap={2} alignItems={'center'}>
                            <Text fontSize={'sm'} color={'gray.light'}>
                                {createdAt}
                            </Text>
                            <BsThreeDots />
                        </Flex>
                    </Flex>
                    <Text>{comment}</Text>
                    <Actions liked={liked} setLiked={setLiked} />

                    {/* nếu count like > 0 => show */}
                    <Text color={'gray.light'} fontSize={'sm'}>
                        {likes + (liked ? 1 : 0)} likes
                    </Text>
                </Flex>
            </Flex>

            <Divider my={4} />
        </>
    )
}

export default Comment
