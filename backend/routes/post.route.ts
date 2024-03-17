import express from 'express'
import protectedRoute from '../middlewares/protectedRoute'
import { create, getPostById, deletePost } from '../controllers/post.controller'

const router = express.Router()

router.get('/:id', getPostById)
router.get('/delete/:id', protectedRoute, deletePost)
router.post('/create', protectedRoute, create)

export default router
