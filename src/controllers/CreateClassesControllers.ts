import {Request, Response} from "express";
import { CreateClassesService } from "../services/CreateClassesService";


class CreateClassesController{

    async handle(request: Request, response: Response){

        const {id_users, id_modules, date, description, name} = request.body
       
        const {user_id} = request;

            const createClassesServive = new CreateClassesService()

        const classes = await createClassesServive.execute({
            id_modules,
            name,
            id_users,
            date,
            description
        })

        return response.json(classes)

    }
}

export {CreateClassesController}