import { User } from "./user"

export interface Book {
    _id: string,
    image: string,
    title: string,
    author: string,
    genre: string,
    description: string,
    owner: User['_id']
}