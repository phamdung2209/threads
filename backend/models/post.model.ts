import mongoose from 'mongoose'

export interface TPostDocument extends mongoose.Document {
    postedBy: mongoose.Schema.Types.ObjectId
    text: string
    image?: string
    likes: number
    replies: {
        userId: string
        text: string
        userProfilePic?: string
        userName: string
    }[]
    createdAt: Date
    updatedAt: Date
}

const postSchema: mongoose.Schema = new mongoose.Schema<TPostDocument>(
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
            type: Number,
            default: 0,
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
                userName: {
                    type: String,
                    required: true,
                },
            },
        ],
    },
    { timestamps: true },
)

const Post: mongoose.Model<TPostDocument> = mongoose.models.Post ?? mongoose.model('Post', postSchema)
export default Post
