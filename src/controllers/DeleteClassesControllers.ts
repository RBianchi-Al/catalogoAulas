import {Request, Response} from "express";
import { DeleteClassesService } from "../services/DeleteClasseService";


class DeleteClassesControllers{

    async handle(request: Request, response: Response){
        const {id} = request.params
        const deleteClassesService = new DeleteClassesService()

        const classes = await deleteClassesService.execute(id)
        return response.json(classes)
    
    }
}
export {DeleteClassesControllers}


