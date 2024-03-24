import { atom } from 'recoil'

const authAtom = atom({
    key: 'authAtom',
    default: {
        isAuthenticated: false,
        user: null,
    },
})

export default authAtom
