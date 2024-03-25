import UserHeader from '../components/user-page/UserHeader'
import UserPost from '../components/user-page/UserPost'

const Home = () => {
    return (
        <div>
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

export default Home
