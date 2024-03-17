import express, { Request, Response } from 'express'
import cookieParser from 'cookie-parser'
import session from 'express-session'
import passport from 'passport'
import dotenv from 'dotenv'

import authRoutes from './routes/auth.route'
import userRoutes from './routes/user.route'
import postRoutes from './routes/post.route'
import './passport/github.auth'
import './passport/google.auth'
import connectDB from './configs/connectDB.config'

dotenv.config()
const app = express()
connectDB()
const PORT = process.env.PORT ?? 8080

// Middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(cookieParser())

// Passport session setup
app.use(session({ secret: 'keyboard cat', resave: false, saveUninitialized: false }))
app.use(passport.initialize())
app.use(passport.session())

// Routes
app.use('/api/auth', authRoutes)
app.use('/api/users', userRoutes)
app.use('/api/posts', postRoutes)

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`)
})
