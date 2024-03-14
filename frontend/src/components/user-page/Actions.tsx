import { Flex } from '@chakra-ui/react'
import { Comment, Heart, Repost, Share } from '../../assets/icons'

const Actions = ({ liked, setLiked }: { liked: boolean; setLiked: React.Dispatch<React.SetStateAction<boolean>> }) => {
    const handleLike = (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
        e.preventDefault()
        setLiked(!liked)
    }

    return (
        <Flex gap={3} my={2}>
            <Heart
                cursor={'pointer'}
                onClick={handleLike}
                color={liked ? 'rgb(237, 73, 86)' : ''}
                fill={liked ? 'rgb(237, 73, 86)' : 'transparent'}
            />
            <Comment cursor={'pointer'} />
            <Repost cursor={'pointer'} />
            <Share cursor={'pointer'} />
        </Flex>
    )
}

export default Actions
