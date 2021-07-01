

import { getCustomRepository } from "typeorm";
import { ClassesRepositories } from "../repositories/ClassesRepositories";

class DeleteClassesService {
    async execute(id: string) {
        const classesRepositories = getCustomRepository(ClassesRepositories)
        
        const classes = await classesRepositories.delete(id)

        return (classes);
    }
}

export { DeleteClassesService };