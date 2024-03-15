import { NextFunction, Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import User, { IUserDocument } from '../models/user.model'

const protectedRoute = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { _auth } = req.cookies as { _auth: string }
        if (!_auth) return res.json({ error: 'Unauthorized' })

        const decoded = jwt.verify(_auth, process.env.JWT_SECRET as string) as { userId: string } | null
        console.log('decoded: ', decoded)

        if (!decoded) return res.json({ error: 'Unauthorized' })
        const user: IUserDocument = await User.findById(decoded?.userId).select('-password')

        if (!user) return res.json({ error: 'Unauthorized' })

        req.user = user

        next()
    } catch (error: any) {
        console.log('Error in protectedRoute (protectedRoute.ts): ', error.message)
        res.json({ error: error.message })
    }
}

export default protectedRoute
