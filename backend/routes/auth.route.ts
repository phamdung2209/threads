import express, { Request, Response } from 'express'
import passport from 'passport'
import { login, signup, logout, authMe } from '../controllers/auth.controller'
import generateJwt from '../utils/generateJwt'
import { IUserDocument } from '../models/user.model'

const router = express.Router()

router.get('/github', passport.authenticate('github', { scope: ['user:email'] }))
router.get(
    '/github/callback',
    passport.authenticate('github', { failureRedirect: '/login' }),
    (req: Request, res: Response) => {
        generateJwt((req.user as IUserDocument)._id as string, res)
        res.redirect(process.env.CLIENT_URL as string)
    },
)

router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }))
router.get(
    '/google/callback',
    passport.authenticate('google', { failureRedirect: '/login' }),
    function (req: Request, res: Response) {
        generateJwt((req.user as IUserDocument)._id as string, res)
        res.redirect(process.env.CLIENT_URL as string)
    },
)

// login username and password
router.post('/signup', signup)
router.post('/login', login)
router.post('/logout', logout)

// auth me
router.get('/me', authMe)

export default router
