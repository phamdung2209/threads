import { Request, Response } from 'express'
import User, { IUserDocument } from '../models/user.model'

export const follow = async (req: Request, res: Response) => {
    try {
        const { id } = req.params as { id: string }
        const { _id: authUserId } = req.user as { _id: string }

        const authUser: IUserDocument | null = await User.findById({ _id: authUserId })
        const userToFollow: IUserDocument | null = await User.findById({ _id: id })

        if (authUserId === id) {
            return res.json({ error: 'You cannot follow yourself' })
        }

        if (!authUser || !userToFollow) {
            return res.json({ error: 'User not found' })
        }

        const isFollowing: boolean = authUser.following?.includes(id) as boolean
        if (isFollowing) {
            return res.json({ error: 'You are already following this user' })
        }

        await User.findByIdAndUpdate(id, { $push: { followers: authUserId } })
        await User.findByIdAndUpdate(authUserId, { $push: { following: id } })

        res.json({ message: 'Followed successfully' })
    } catch (error: any) {
        console.log('Error in follow (user.controller.ts): ', error.message)
        res.json({ error: error.message })
    }
}

export const unfollow = async (req: Request, res: Response) => {
    try {
        const { id } = req.params as { id: string }
        const { _id: authUserId } = req.user as { _id: string }

        const authUser: IUserDocument | null = await User.findById({ _id: authUserId })
        const userToUnfollow: IUserDocument | null = await User.findById({ _id: id })

        if (authUserId === id) {
            return res.json({ error: 'You cannot unfollow yourself' })
        }

        if (!authUser || !userToUnfollow) {
            return res.json({ error: 'User not found' })
        }

        const isFollowing: boolean = authUser.following?.includes(id) as boolean

        if (!isFollowing) {
            return res.json({ error: 'You are not following this user' })
        }

        await User.findByIdAndUpdate(id, { $pull: { followers: authUserId } })
        await User.findByIdAndUpdate(authUserId, { $pull: { following: id } })

        res.json({ message: 'Unfollowed successfully' })
    } catch (error: any) {
        console.log('Error in unfollow (user.controller.ts): ', error.message)
        res.json({ error: error.message })
    }
}
