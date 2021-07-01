import {Request, Response} from "express";
import { DeleteModulesService } from "../services/DeleteModuleService";



class DeleteModulesControllers{

    async handle(request: Request, response: Response){
        const {id} = request.params
        const deleteModulesService = new DeleteModulesService()
    
        const modules = await deleteModulesService.execute(id)
        return response.json(modules)
    
    }
}
export {DeleteModulesControllers}


