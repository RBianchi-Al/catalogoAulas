import {Request, Response} from "express";
import { CreateModuleService } from "../services/CreateModuleService";


class CreateModulesController {

    async handle(request: Request, response: Response){

        const {name, description} = request.body
        const createModuleService = new CreateModuleService()

        const module = await createModuleService.execute(name, description);
        return response.json(module)
    }
}

export {CreateModulesController}