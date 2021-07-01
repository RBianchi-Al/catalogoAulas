import { getCustomRepository } from "typeorm";
import { UsersRepository } from '../repositories/UsersRepositories';


class DeleteUserService {
    async execute(id:string){
        const usersRepositories = getCustomRepository(UsersRepository);    
        const users= await usersRepositories.delete(id);

        return (users);
    }
}

export { DeleteUserService };