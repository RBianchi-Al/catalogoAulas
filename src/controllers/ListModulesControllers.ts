import {Request, Response} from "express";
import { ListModulesService } from "../services/ListModulesService";


class ListModulesControllers{

    async handle(request: Request, response: Response){
        
        const listModulesService = new ListModulesService()
        
        const modules = await listModulesService.execute();

        return response.json(modules);
    }
}
export {ListModulesControllers}