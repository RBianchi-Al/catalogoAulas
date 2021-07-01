import {Request, Response} from "express";
import { AlterModulesService } from "../services/AlterModulesService";


class AlterModulesController{

    async handle(request: Request, response: Response){
        const users = new AlterModulesService()
        const {name, id} = request.body;

        const alterModules = await users.execute({id, name})
        return response.json(alterModules)    
    
    }  
}

export {AlterModulesController}