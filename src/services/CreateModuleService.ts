import { getCustomRepository } from "typeorm";
import { ModulesRepository } from "../repositories/ModulesRepositories";


class CreateModuleService{

    async execute(name: string, description: string){
        const modulesRepositories = getCustomRepository(ModulesRepository)

        if(!name) {
            throw new Error ("Incorrect name!");
        }

        const moduleAlreadyExists = await modulesRepositories.findOne({
            name, 
            description
        })

        if(moduleAlreadyExists){
            throw new Error ("Module already exists!");
        }

        const module = modulesRepositories.create({
            name,
            description
        });
     
        await modulesRepositories.save(module);

        return module;
    }

}

export {CreateModuleService}