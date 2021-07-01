import { getCustomRepository } from "typeorm";
import { ModulesRepository } from "../repositories/ModulesRepositories";



interface IModuleRequest {
    name: string;
    id: string;
}

class AlterModulesService {
    async execute({name, id}: IModuleRequest){
        const alterModulesRepository = getCustomRepository(ModulesRepository);

        const alterModules = await alterModulesRepository.findOne(id);

        if(alterModules){
            alterModulesRepository.merge(alterModules, { name});
            const results = await alterModulesRepository.save(alterModules)
            return results;
        }
        return alterModules;
    }
}

export {AlterModulesService}