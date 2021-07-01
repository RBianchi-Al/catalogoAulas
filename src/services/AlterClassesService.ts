import { getCustomRepository } from "typeorm";
import { ClassesRepositories } from "../repositories/ClassesRepositories";


interface IClassesRequest{
    name: string;
    id_users: string;
    id_modules: string;
    date: Date;
    id: string;
}


class AlterClassesService {
    async execute({name, id, date, id_modules, id_users}: IClassesRequest){
        const alterClassesRepository = getCustomRepository(ClassesRepositories)

        const alterClasses = await alterClassesRepository.findOne(id);

        if(alterClasses){
            alterClassesRepository.merge(alterClasses, { name, id, date, id_modules, id_users});
            const results = await alterClassesRepository.save(alterClasses)
            return results;
        }
        return alterClasses;
    }
}

export {AlterClassesService}