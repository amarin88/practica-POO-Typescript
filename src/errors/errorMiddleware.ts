import { Request, Response, NextFunction } from 'express';
import { ErrorHandle } from "./errorHandle";


export class ErrorMiddleware {
    public static handleErrors(err: ErrorHandle, req: Request, res: Response, next: NextFunction) {
        const status = err.status || 500;
        const message = status === 500 ? "Internal server error" : err.message;
        if(status === 500){
            console.log(`Path: [POST] ${req.path}, message: ${err.message}`);
        };

        res.status(status).json({status, message});
    }
};