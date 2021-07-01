import { getCustomRepository } from "typeorm"
import { ClassesRepositories } from "../repositories/ClassesRepositories";
import { UsersRepository } from "../repositories/UsersRepositories";


interface IClassesRequest{
    name: string;
    id_users: string;
    id_modules: string;
    date: Date;
}

class CreateClassesService{
    async execute({
        name,
        id_users,
        id_modules,
        date
    }: IClassesRequest){

        const classesRepository = getCustomRepository(ClassesRepositories);
        const usersRepository = getCustomRepository(UsersRepository);

        const userReceiverExists = usersRepository.findOne({id: id_users});

        if(!userReceiverExists){
            throw new Error("User Receiver does not exists!")
        }


       
        const classes = classesRepository.create({
           date,
           id_modules,
           id_users,
           name
        })

        await classesRepository.save(classes)
        return classes;

    }
}

export {CreateClassesService}