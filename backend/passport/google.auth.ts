import { Strategy as GoogleStrategy } from 'passport-google-oauth20'
import passport from 'passport'
import dotenv from 'dotenv'

dotenv.config()

passport.use(
    new GoogleStrategy(
        {
            clientID: process.env.AUTH_GOOGLE_ID as string,
            clientSecret: process.env.AUTH_GOOGLE_SECRET as string,
            callbackURL: process.env.AUTH_GOOGLE_CALLBACK_URL as string,
        },

        (accessToken: string, refreshToken: string, profile: any, done: any) => {
            console.log('profile: ', profile)

            return done(null, profile)
        },
    ),
)
