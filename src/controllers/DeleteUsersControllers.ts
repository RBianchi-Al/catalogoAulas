import {Request, Response} from "express";
import { DeleteUserService } from "../services/DeleteUsersService";



class DeleteUsersControllers{

    async deleteUser(request: Request, response: Response){
        const {id} = request.params
        const usersService = new DeleteUserService()
    
        const deletUsers = await usersService.execute(id)
        return response.json(deletUsers)
    
    }
}
export {DeleteUsersControllers}


