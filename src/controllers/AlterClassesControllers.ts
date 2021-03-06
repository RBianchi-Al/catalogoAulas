import {Request, Response} from "express";
import { AlterClassesService } from "../services/AlterClassesService";

class AlterClassesController{

    async handle(request: Request, response: Response){
        const classes = new AlterClassesService()
        const {name, id, date, id_modules, id_users, description} = request.body;
        const alterClasses = await classes.execute({name, id, date, id_modules, id_users, description})
        return response.json(alterClasses)    
    
    }  
}

export {AlterClassesController}