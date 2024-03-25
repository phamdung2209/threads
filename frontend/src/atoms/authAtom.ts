import { atom } from 'recoil'
import * as request from '../utills/httpRequest'

export type TAuth = {
    isAuthenticated: boolean
    user: {
        _id: string
        name: string
        email: string
        username: string
        password: string
        followers: string[]
        following: string[]
        profilePic: string
        tick: boolean
        bio: string
        createdAt: string
        updatedAt: string
    } | null
}

let data: TAuth['user'] | null = null

const auth = async () => {
    try {
        const res = await request.get('/auth/me')
        if (res.error) throw new Error(res.error)
        data = res
        return res
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
        return null
    }
}

const authAtom = atom({
    key: 'authAtom',
    default: {
        isAuthenticated: (await auth()) !== null,
        user: data,
    },
})

export default authAtom
