export interface User {
    _id: string,
    firstName: string,
    lastName: string,
    email: string,
    password: string,
}


export interface UserLogin {
    email: string,
    password: string
}

export interface UserRegister {
    email: string,
    password: string,
    repeatPassword: string
}