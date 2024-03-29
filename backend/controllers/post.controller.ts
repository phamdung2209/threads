import { Request, Response } from 'express'
import User, { IUserDocument } from '../models/user.model'
import Post, { IPostDocument } from '../models/post.model'

export const getPostById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params as { id: string }
        const post = await Post.findById({ _id: id })
        if (!post) return res.json({ error: 'Post not found' })
        res.json({ post })
    } catch (error: any) {
        console.log('Error in getPostById (post.controller.ts): ', error.message)
        res.json({ error: error.message })
    }
}

export const deletePost = async (req: Request, res: Response) => {
    try {
        const { id } = req.params as { id: string }
        const { _id: userId } = req.user as { _id: string }
        const post = await Post.findById(id)
        if (!post) return res.json({ error: 'Post not found' })

        if (post.postedBy.toString() !== userId.toString())
            return res.json({ error: 'You are not authorized to delete this post' })

        await post.deleteOne()
        res.json({ message: 'Post deleted successfully' })
    } catch (error: any) {
        console.log('Error in delete (post.controller.ts): ', error.message)
        res.json({ error: error.message })
    }
}

export const create = async (req: Request, res: Response) => {
    try {
        const { text, image } = req.body as { text: string; image: string }
        const { _id: userId } = req.user as { _id: string }

        if (!text) return res.json({ error: 'Content is required' })

        const user: IUserDocument | null = await User.findById(userId)
        if (!user) return res.json({ error: 'User not found' })

        const newPost = await Post.create({
            postedBy: userId,
            text,
            image: image ? image : '',
        })

        await newPost.save()

        res.json({ message: 'Post created successfully' })
    } catch (error: any) {
        console.log('Error in create (post.controller.ts): ', error.message)
        res.json({ error: error.message })
    }
}

export const likeAndUnlike = async (req: Request, res: Response) => {
    try {
        const { id: postId } = req.params as { id: string }
        const { _id: userId } = req.user as { _id: string }

        const post: IPostDocument | null = await Post.findById(postId)
        if (!post) return res.json({ error: 'Post not found' })

        const userLikedPost = post.likes.toString().includes(userId.toString())
        if (userLikedPost) {
            await Post.findByIdAndUpdate(postId, { $pull: { likes: userId } })
            return res.json({ message: 'Post unliked' })
        } else {
            await Post.findByIdAndUpdate(postId, { $push: { likes: userId } })
            return res.json({ message: 'Post liked' })
        }
    } catch (error: any) {
        console.log('Error in likeAndUnlike (post.controller.ts): ', error.message)
        res.json({ error: error.message })
    }
}

export const replyPost = async (req: Request, res: Response) => {
    try {
        const { id: postId } = req.params as { id: string }
        const { text } = req.body as { text: string }
        const { _id: userId, profilePic, username } = req.user as { _id: string; profilePic: string; username: string }

        if (!text) return res.json({ error: 'Content is required' })

        const post: IPostDocument | null = await Post.findById(postId)
        if (!post) return res.json({ error: 'Post not found' })

        const newReply = {
            userId,
            text,
            userProfilePic: profilePic,
            username,
        }

        await Post.findByIdAndUpdate(postId, { $push: { replies: newReply } })
        // post.replies.push(newReply)
        // await post.save()

        res.json({ message: 'Replied to post successfully' })
    } catch (error: any) {
        console.log('Error in replyPost (post.controller.ts): ', error.message)
        res.json({ error: error.message })
    }
}

export const getFeedPosts = async (req: Request, res: Response) => {
    try {
        const { _id: userId } = req.user as { _id: string }
        const user: IUserDocument | null = await User.findById(userId)
        if (!user) return res.json({ error: 'User not found' })

        const following = user.following

        const feedPosts = await Post.find({ postedBy: { $in: following } }).sort({ createdAt: -1 })

        res.json(feedPosts)
    } catch (error: any) {
        console.log('Error in getFeedPosts (post.controller.ts): ', error.message)
        res.json({ error: error.message })
    }
}
