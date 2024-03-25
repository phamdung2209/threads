import { Strategy as GitHubStrategy } from 'passport-github2'
import passport from 'passport'
import dotenv from 'dotenv'
import User, { IUserDocument } from '../models/user.model'

dotenv.config()

passport.serializeUser(function (user, done) {
    done(null, user)
})

passport.deserializeUser(function (obj: any, done) {
    done(null, obj)
})

type TProfile = {
    username: string
    displayName: string
    photos: { value: string }[]
    emails: { value: string }[]
    provider: string
}

passport.use(
    new GitHubStrategy(
        {
            clientID: process.env.AUTH_GITHUB_ID as string,
            clientSecret: process.env.AUTH_GITHUB_SECRET as string,
            callbackURL: process.env.AUTH_GITHUB_CALLBACK_URL as string,
            scope: ['user:email'],
        },
        async (accessToken: string, refreshToken: string, profile: any, done: any) => {
            const {
                username,
                displayName: name,
                photos: [{ value: profilePic }],
                emails: [{ value: email }],
                provider,
            } = profile as TProfile

            try {
                const user: IUserDocument | null = await User.findOne({
                    $or: [{ email }, { username }],
                })

                if (!user) {
                    const newUser: IUserDocument = await User.create({
                        name,
                        email,
                        username,
                        profilePic,
                        provider,
                    })

                    await newUser.save()
                    return done(null, newUser)
                } else {
                    return done(null, user)
                }
            } catch (error: any) {
                console.log('Error in github auth: ', error.message)
                return done(error)
            }
        },
    ),
)
