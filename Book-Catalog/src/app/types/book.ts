import { User } from "./user"

export interface Book {
    _id: string,
    title: string,
    author: string,
    pages: Number,
    image: string,
    description: string,
    owner: User['_id']
}