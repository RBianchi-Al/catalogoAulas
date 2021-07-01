

import { getCustomRepository } from "typeorm";
import { ClassesRepositories } from "../repositories/ClassesRepositories";

class ListClassesService {
    async execute() {
        const classesRepositories = getCustomRepository(ClassesRepositories)
        
        const classes = await classesRepositories.find();

        return (classes);
    }
}

export { ListClassesService };