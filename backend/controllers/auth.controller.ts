import { Request, Response, response } from 'express'
import User, { IUserDocument } from '../models/user.model'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

import hashPassword from '../utils/hassedPassword'
import generateJwt from '../utils/generateJwt'

interface IUser {
    name: string
    email: string
    username: string
    password: string
    confirmPassword: string
}

export const signup = async (req: Request, res: Response) => {
    try {
        const { name, email, username, password, confirmPassword } = req.body as IUser
        if (!name || !email || !username || !password || !confirmPassword) {
            return res.json({ error: 'All fields are required' })
        }

        if (password !== confirmPassword) {
            return res.json({ error: 'Passwords do not match' })
        }

        const user: IUserDocument | null = await User.findOne({
            $or: [{ email }, { username }],
        })

        if (user) {
            return res.json({ error: "User already exists, let's try other email/username" })
        }

        const hassedPassword = await hashPassword(password)

        const newUser = new User({
            name,
            email,
            username,
            password: hassedPassword,
        })
        await newUser.save()

        if (newUser) {
            generateJwt(newUser._id as string, res)
            return res.json({
                message: 'User created successfully',
            })
        }

        return res.json({ error: 'Something went wrong' })
    } catch (error: any) {
        console.log('Error in signup (user.controller.ts): ', error.message)
        res.json({ error: error.message })
    }
}

export const login = async (req: Request, res: Response) => {
    try {
        const { email, username, password, confirmPassword } = req.body as IUser
        if (!email && !username) {
            return res.json({ error: 'Email/Username is required' })
        }

        if (!password || !confirmPassword) {
            return res.json({ error: 'All fields are required' })
        }

        if (password !== confirmPassword) {
            return res.json({ error: 'Passwords do not match' })
        }

        const user: IUserDocument | null = await User.findOne({
            $or: [{ email }, { username }],
        })

        if (!user) {
            return res.json({ error: 'Email/Username or password is incorrect' })
        }

        const isPasswordCorrect = await bcrypt.compare(password, (user?.password as string) ?? '')

        if (!isPasswordCorrect) {
            return res.json({ error: 'Email/Username or password is incorrect' })
        }

        generateJwt(user._id as string, res)

        return res.json({
            message: 'User logged in successfully',
        })
    } catch (error: any) {
        console.log('Error in login (user.controller.ts): ', error.message)
        res.json({ error: error.message })
    }
}

export const logout = async (req: Request, res: Response) => {
    try {
        res.clearCookie('_auth')
        res.json({
            message: 'User logged out successfully',
        })
    } catch (error: any) {
        console.log('Error in logout (user.controller.ts): ', error.message)
        res.json({ error: error.message })
    }
}

export const authMe = async (req: Request, res: Response) => {
    try {
        const { _auth: token } = req.cookies as { _auth: string }
        if (!token) return res.json({ error: 'Unauthorized - No Token Provided' })

        const decoded = jwt.verify(token, process.env.JWT_SECRET as string)
        if (!decoded) return res.json({ error: 'Unauthorized - Invalid Token' })

        // const { _id: userId } = req.user as { _id: string }
        // const user: IUserDocument | null = await User.findById(userId)
        // if (!user) return res.json({ error: 'Unauthorized' })
        const user = await User.findById((decoded as { _id: string })._id).select('-password')
        if (!user) return res.json({ error: 'Unauthorized' })

        res.json(user)
    } catch (error: any) {
        console.log('Error in authMe (user.controller.ts): ', error.message)
        res.json({ error: error.message })
    }
}
