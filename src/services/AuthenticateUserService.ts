import { getCustomRepository } from "typeorm"
import { UsersRepository } from "../repositories/UsersRepositories"
import {compare} from 'bcryptjs';
import {sign} from 'jsonwebtoken'

interface IAuthenticateRequest{
    email: string;
    password: string;
}


class AuthenticateUserService{
    async execute({email, password}: IAuthenticateRequest){

        const usersRepository = getCustomRepository(UsersRepository);

        const user = await usersRepository.findOne({
            email
        })

        if(!user){
            throw new Error("Email or Password incorrect")
        }

        const passwordMatch = await compare(password, user.password)

        if(!passwordMatch){
            throw new Error("Email or Password incorrect")
        }
        const token = sign({
            email: user.email    
        }, "0192023a7bbd73250516f069df18b500", {
            subject: user.id,
            expiresIn: "1d",
        }
        );
        return token;
    }
}

export {AuthenticateUserService}