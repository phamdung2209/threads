import express from 'express'
import { getUserById, follow, unfollow, updateUserInfo } from '../controllers/user.controller'
import protectedRoute from '../middlewares/protectedRoute'

const router = express.Router()

router.get('/:id', getUserById)
router.post('/follow/:id', protectedRoute, follow)
router.post('/unfollow/:id', protectedRoute, unfollow)
router.post('/update', protectedRoute, updateUserInfo)

export default router
