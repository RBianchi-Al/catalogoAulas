import {Request, Response} from "express";
import { AlterUserService } from "../services/AlterUsersService";

class AlterUserController{

    async handle(request: Request, response: Response){
        const users = new AlterUserService()
        const {name, email, admin, password, id} = request.body;
        const alterUser = await users.execute({id, name, email, admin, password})
        return response.json(alterUser)    
    
    }  
}

export {AlterUserController}