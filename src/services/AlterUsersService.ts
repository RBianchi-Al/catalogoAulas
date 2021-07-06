import { getCustomRepository } from "typeorm";
import { UsersRepository } from '../repositories/UsersRepositories';


interface IUserRequest {
    name: string;
    email: string;
    admin?: boolean;
    password: string;
    id: string;


}

class AlterUserService {
    async execute({name, email, admin=false, password, id}: IUserRequest){
        const usersRepository = getCustomRepository(UsersRepository);

        const alterUsers = await usersRepository.findOne(id);

        if(alterUsers){
            usersRepository.merge(alterUsers, {admin, email, name, password});
            const results = await usersRepository.save(alterUsers)
            return results;
        }
        return alterUsers;
    }
}

export {AlterUserService}