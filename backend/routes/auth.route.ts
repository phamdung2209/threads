import express, { Request, Response } from 'express'
import passport from 'passport'

const router = express.Router()

router.get('/github', passport.authenticate('github', { scope: ['user:email'] }))
router.get(
    '/github/callback',
    passport.authenticate('github', { failureRedirect: '/login' }),
    (req: Request, res: Response) => {
        res.redirect('http://localhost:3000')
    },
)

router.get('/google', passport.authenticate('google', { scope: ['profile'] }))
router.get(
    '/google/callback',
    passport.authenticate('google', { failureRedirect: '/login' }),
    function (req: Request, res: Response) {
        res.redirect('http://localhost:3000')
    },
)

export default router
