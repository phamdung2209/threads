import { Request, Response } from 'express'
import mongoose from 'mongoose'

import User, { IUserDocument } from '../models/user.model'
import hashPassword from '../utils/hassedPassword'

export const getUserById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params as { id: string }

        const isObjectId = mongoose.Types.ObjectId.isValid(id)

        let query: any = {}

        if (isObjectId) {
            query = { _id: id }
        } else {
            query = { username: id }
        }

        const user: IUserDocument = await User.findOne(query).select('-password -updatedAt')

        if (!user) return res.json({ error: 'User not found' })

        res.json({ user })
    } catch (error: any) {
        console.log('Error in getUserById (user.controller.ts): ', error.message)
        res.json({ error: error.message })
    }
}

export const follow = async (req: Request, res: Response) => {
    try {
        const { id } = req.params as { id: string }
        const { _id: authUserId } = req.user as { _id: string }

        const authUser: IUserDocument | null = await User.findById({ _id: authUserId })
        const userToFollow: IUserDocument | null = await User.findById({ _id: id })

        if (authUserId.toString() === id) {
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

export const updateUserInfo = async (req: Request, res: Response) => {
    try {
        const { username, password, name, profilePic, bio } = req.body as {
            username: string
            password: string
            name: string
            profilePic: string
            bio: string
        }
        const checkUser = await User.findOne({ username })
        if (checkUser) return res.json({ error: 'Username already exists' })

        const { _id: authUserId } = req.user as { _id: string }

        const user: IUserDocument | null = await User.findById({ _id: authUserId })

        if (!user) return res.json({ error: 'User not found' })

        if (password) {
            const hashedPassword: string = await hashPassword(password)
            user.password = hashedPassword
        }

        user.username = username ?? user.username
        user.name = name ?? user.name
        user.profilePic = profilePic ?? user.profilePic
        user.bio = bio ?? user.bio

        await user.save()
        res.json({ message: 'User info updated successfully' })
    } catch (error: any) {
        console.log('Error in updateUserInfo (user.controller.ts): ', error.message)
        res.json({ error: error.message })
    }
}
