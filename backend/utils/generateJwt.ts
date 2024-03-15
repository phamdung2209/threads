import { Response } from 'express'
import jwt from 'jsonwebtoken'

const generateJwt = (_id: string, res: Response) => {
    const token = jwt.sign({ _id }, process.env.JWT_SECRET as string, {
        expiresIn: '15d',
    })
    res.cookie('_auth', token, {
        httpOnly: true, // cannot be accessed by client-side scripts
        maxAge: 15 * 24 * 60 * 60 * 1000,
        secure: true, // cookie will only be sent over HTTPS
        sameSite: 'strict', // csrf
    })
}

export default generateJwt
