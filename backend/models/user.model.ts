import mongoose from 'mongoose'

export interface IUserDocument extends mongoose.Document {
    username?: string
    password?: string
    email: string
    name?: string
    profilePic?: string
    followers?: string[]
    following?: string[]
    bio?: string
    tick: boolean
    provider?: 'google' | 'github' | null
    createdAt: Date
    updatedAt: Date
}

const userSchema: mongoose.Schema = new mongoose.Schema<IUserDocument>(
    {
        username: {
            type: String,
            default: null,
            unique: true,
            trim: true,
            minlength: 3,
        },
        password: {
            type: String,
            default: null,
            trim: true,
            minlength: 6,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            minlength: 6,
        },
        name: {
            type: String,
            required: false,
            trim: true,
            minlength: 3,
        },
        profilePic: {
            type: String,
            default: '',
        },
        followers: {
            type: [String],
            default: [],
        },
        following: {
            type: [String],
            default: [],
        },
        bio: {
            type: String,
            default: '',
        },
        tick: {
            type: Boolean,
            default: false,
        },
        provider: {
            type: String,
            default: null,
        },
    },
    { timestamps: true },
)

const User: mongoose.Model<IUserDocument> = mongoose.models.User ?? mongoose.model('User', userSchema)
export default User
