import { getCustomRepository } from "typeorm";
import { ModulesRepository } from "../repositories/ModulesRepositories";

class ListModulesService {
    async execute() {
        const modulesRepository = getCustomRepository(ModulesRepository);
        
        const modules = await modulesRepository.find();

        return modules;
    }
}

export { ListModulesService };