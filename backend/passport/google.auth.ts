import { Strategy as GoogleStrategy } from 'passport-google-oauth20'
import passport from 'passport'
import dotenv from 'dotenv'
import User, { IUserDocument } from '../models/user.model'

dotenv.config()

type TProfile = {
    displayName: string
    emails: { value: string }[]
    photos: { value: string }[]
    provider: string
}

passport.use(
    new GoogleStrategy(
        {
            clientID: process.env.AUTH_GOOGLE_ID as string,
            clientSecret: process.env.AUTH_GOOGLE_SECRET as string,
            callbackURL: process.env.AUTH_GOOGLE_CALLBACK_URL as string,
        },

        async (accessToken: string, refreshToken: string, profile: any, done: any) => {
            const {
                displayName: name,
                emails: [{ value: email }],
                photos: [{ value: profilePic }],
                provider,
            } = profile as TProfile

            try {
                const user: IUserDocument | null = await User.findOne({
                    $or: [{ email }, { name }],
                })
                if (!user) {
                    const newUser: IUserDocument = await User.create({
                        name,
                        email,
                        profilePic,
                        provider,
                    })
                    await newUser.save()
                    return done(null, newUser)
                } else {
                    return done(null, user)
                }
            } catch (error: any) {
                console.log('Error in google auth: ', error.message)
                return done(error)
            }
        },
    ),
)
