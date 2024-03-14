import express, { Request, Response } from 'express'
import cookieParser from 'cookie-parser'
import session from 'express-session'
import passport from 'passport'

import authRoutes from './routes/auth.route'
import './passport/github.auth'
import './passport/google.auth'

const app = express()
const PORT = 8080
app.use(express.json())
app.use(cookieParser())

app.use(session({ secret: 'keyboard cat', resave: false, saveUninitialized: false }))
// Initialize Passport!  Also use passport.session() middleware, to support
// persistent login sessions (recommended).
app.use(passport.initialize())
app.use(passport.session())

app.get('/', (req: Request, res: Response) => {
    res.send({
        message: 'Hello World',
    })
})

app.use('/api/auth', authRoutes)

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`)
})
