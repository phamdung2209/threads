import express, { Request, Response } from 'express'
import cookieParser from 'cookie-parser'
import session from 'express-session'
import passport from 'passport'
import dotenv from 'dotenv'

import authRoutes from './routes/auth.route'
import userRoutes from './routes/user.route'
import './passport/github.auth'
import './passport/google.auth'
import connectDB from './configs/connectDB.config'

dotenv.config()
const app = express()
const PORT = process.env.PORT ?? 8080
app.use(express.json())
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(cookieParser())

app.use(session({ secret: 'keyboard cat', resave: false, saveUninitialized: false }))
app.use(passport.initialize())
app.use(passport.session())

connectDB()

app.get('/', (req: Request, res: Response) => {
    res.send({
        message: 'Hello World',
    })
})

app.use('/api/auth', authRoutes)
app.use('/api/users', userRoutes)

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`)
})
