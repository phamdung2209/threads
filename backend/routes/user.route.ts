import express from 'express'
import { follow, unfollow } from '../controllers/user.controller'
import protectedRoute from '../middlewares/protectedRoute'

const router = express.Router()

router.post('/follow/:id', protectedRoute, follow)
router.post('/unfollow/:id', protectedRoute, unfollow)

export default router
