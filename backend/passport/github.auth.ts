import { Strategy as GitHubStrategy } from 'passport-github2'
import passport from 'passport'
import dotenv from 'dotenv'

dotenv.config()

passport.serializeUser(function (user, done) {
    done(null, user)
})

passport.deserializeUser(function (obj: any, done) {
    done(null, obj)
})

passport.use(
    new GitHubStrategy(
        {
            clientID: process.env.AUTH_GITHUB_ID as string,
            clientSecret: process.env.AUTH_GITHUB_SECRET as string,
            callbackURL: process.env.AUTH_GITHUB_CALLBACK_URL as string,
        },
        (accessToken: string, refreshToken: string, profile: any, done: any) => {
            console.log('profile: ', profile)

            return done(null, profile)
        },
    ),
)
