import { User } from "./user"

export interface Book {
    image: string,
    title: string,
    author: string,
    genre: string,
    description: string,
    owner: User['_id']
}