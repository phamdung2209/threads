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

type TProfile = {
    id: string
    displayName: string
    username: string
    profileUrl: string
    emails: Array<{ value: string }>
    photos: Array<{ value: string }>
}

passport.use(
    new GitHubStrategy(
        {
            clientID: process.env.AUTH_GITHUB_ID as string,
            clientSecret: process.env.AUTH_GITHUB_SECRET as string,
            callbackURL: process.env.AUTH_GITHUB_CALLBACK_URL as string,
            scope: ['user:email'],
        },
        (accessToken: string, refreshToken: string, profile: any, done: any) => {
            console.log('profile: ', profile)

            // const {} = profile as TProfile
            return done(null, profile)
        },
    ),
)
