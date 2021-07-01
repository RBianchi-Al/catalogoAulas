import {Request, Response} from "express";
import { CreateModuleService } from "../services/CreateModuleService";


class CreateModulesController {

    async handle(request: Request, response: Response){

        const {name} = request.body
        const createModuleService = new CreateModuleService()

        const module = await createModuleService.execute(name);
        return response.json(module)
    }
}

export {CreateModulesController}