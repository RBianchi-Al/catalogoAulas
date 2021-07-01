import {Request, Response} from "express";
import { ListClassesService } from "../services/ListClassesService";


class ListClassesControllers{
    async handle(request: Request, response: Response){

        
        const listClassesService = new ListClassesService();

        const classes = await listClassesService.execute();
        
        return response.json(classes)
    }

}
export {ListClassesControllers}