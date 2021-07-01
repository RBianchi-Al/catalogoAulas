import {Request, Response, NextFunction} from 'express';
import {verify} from "jsonwebtoken"

interface IPayLoad {
    sub: string;
}

export function ensureAuthenticated(
    request: Request, 
    response: Response, 
    next: NextFunction){
        
    const authToken = request.headers.authorization;
    
    // sem token preenchido
    if(!authToken){
        return response.status(401).end()
    }

    const [, token] = authToken.split(' ')
    
    try{
        const {sub} = verify(token, "0192023a7bbd73250516f069df18b500") as IPayLoad;

        request.user_id = sub;
        return next()
    }catch(err){
        return response.status(401).end()
    } 
}; 
