import {Repository, EntityRepository} from "typeorm"
import { Classes } from "../entities/Classes"

@EntityRepository(Classes)
class ClassesRepositories extends Repository<Classes>{}

export {ClassesRepositories}