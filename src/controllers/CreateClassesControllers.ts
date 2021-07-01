import {Request, Response} from "express";
import { CreateClassesService } from "../services/CreateClassesService";


class CreateClassesController{

    async handle(request: Request, response: Response){

        const {id_users, id_modules, date} = request.body
       
        const {user_id} = request;

            const createClassesServive = new CreateClassesService()

        const classes = await createClassesServive.execute({
            id_modules,
            name: user_id,
            id_users,
            date
        })

        return response.json(classes)

    }
}

export {CreateClassesController}