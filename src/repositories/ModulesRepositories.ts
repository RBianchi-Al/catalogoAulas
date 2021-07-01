import { EntityRepository, Repository } from "typeorm";
import { Modules } from "../entities/Modules";



@EntityRepository(Modules)

class ModulesRepository extends Repository<Modules>{}
export {ModulesRepository}