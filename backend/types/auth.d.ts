// import { Request } from 'express'

import { IUserDocument } from '../models/user.model'

// declare module 'express' {
//     interface Request {
//         user?: {
//             _id: string
//         }
//     }
// }

declare namespace Express {
    export interface Request {
        user?: IUserDocument
    }
}
