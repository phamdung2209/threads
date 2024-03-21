import express from 'express'
import protectedRoute from '../middlewares/protectedRoute'
import { create, getPostById, deletePost, likeAndUnlike, replyPost, getFeedPosts } from '../controllers/post.controller'

const router = express.Router()

router.get('/feed', protectedRoute, getFeedPosts)
router.get('/:id', getPostById)
router.get('/delete/:id', protectedRoute, deletePost)
router.post('/create', protectedRoute, create)
router.post('/like/:id', protectedRoute, likeAndUnlike)
router.post('/reply/:id', protectedRoute, replyPost)

export default router
