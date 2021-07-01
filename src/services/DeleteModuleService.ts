import { getCustomRepository } from "typeorm";
import { ModulesRepository } from "../repositories/ModulesRepositories";

class DeleteModulesService {
    async execute(id:string) {
        const modulesRepository = getCustomRepository(ModulesRepository);
        
        const modules = await modulesRepository.delete(id);

        return modules;
    }
}

export { DeleteModulesService };