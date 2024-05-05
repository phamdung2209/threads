import { NavLink } from 'react-router-dom'
import UserHeader from '../components/user-page/UserHeader'
import UserPost from '../components/user-page/UserPost'
import { Flex } from '@chakra-ui/react'

const UserPage = () => {
    return (
        <div>
            <Flex gap={4}>
                <NavLink to="/1" className={(nav) => (nav.isActive ? 'bg-red-600' : '')}>
                    Profile
                </NavLink>
                <NavLink
                    to="/2"
                    style={({ isActive }) => {
                        return {
                            background: isActive ? 'red' : '',
                        }
                    }}
                >
                    Profile
                </NavLink>
                <NavLink to="/3">Profile</NavLink>
                <NavLink to="/4">Profile</NavLink>
            </Flex>
            <UserHeader />
            <UserPost
                likes={1232}
                replies={5812}
                postImg={'/images/post1.png'}
                postTitle={
                    "I'm excited to announce that we’ve completed our acquisition of Giphy and are excited to start sharing more about our plans soon."
                }
            />
            <UserPost
                likes={132}
                replies={582}
                postImg={'/images/post2.png'}
                postTitle={
                    "I'm excited to announce that we’ve completed our acquisition of Giphy and are excited to start sharing more about our plans soon."
                }
            />
            <UserPost
                likes={232}
                replies={5892}
                postImg={'/images/post3.png'}
                postTitle={
                    "I'm excited to announce that we’ve completed our acquisition of Giphy and are excited to start sharing more about our plans soon."
                }
            />
            <UserPost
                likes={123}
                replies={52}
                // postImg={'/images/zuck-avatar.png'}
                postTitle={
                    "I'm excited to announce that we’ve completed our acquisition of Giphy and are excited to start sharing more about our plans soon."
                }
            />
        </div>
    )
}

export default UserPage
