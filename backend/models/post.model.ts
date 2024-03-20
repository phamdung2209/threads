import mongoose from 'mongoose'

export interface IPostDocument extends mongoose.Document {
    postedBy: mongoose.Schema.Types.ObjectId
    text: string
    image?: string
    likes: mongoose.Schema.Types.ObjectId[]
    replies: {
        userId: string
        text: string
        userProfilePic?: string
        username: string
    }[]
    createdAt: Date
    updatedAt: Date
}

const postSchema: mongoose.Schema = new mongoose.Schema<IPostDocument>(
    {
        postedBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
        text: {
            type: String,
            required: true,
        },
        image: {
            type: String,
        },
        likes: {
            type: [mongoose.Schema.Types.ObjectId],
            ref: 'User',
            default: [],
        },
        replies: [
            {
                userId: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'User',
                    required: true,
                },
                text: {
                    type: String,
                    required: true,
                },
                userProfilePic: {
                    type: String,
                },
                username: {
                    type: String,
                    required: true,
                },
            },
        ],
    },
    { timestamps: true },
)

const Post: mongoose.Model<IPostDocument> = mongoose.models.Post ?? mongoose.model('Post', postSchema)
export default Post
