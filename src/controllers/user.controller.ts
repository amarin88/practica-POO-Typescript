//import { NextFunction, Request, Response } from "express";
import { Handler } from "express";
import { UserServices } from "../services/user.services";
import { createToken } from "../utils/jwt";


export class UserController {

    private userService : UserServices;

    constructor(){
        this.userService = new UserServices();
    }

    registerUser: Handler = async (req, res, next) => { //(req: Request ,res: Response ,next: NextFunction )
        try {
            const user = await this.userService.registerUser(req.body);
            res.status(201).json({status: "ok", user});
        } catch (error) {
            next(error);
        }
    };

    loginUser: Handler = async (req, res, next) => { //(req: Request ,res: Response ,next: NextFunction )
        try {
            const {email, password} = req.body;
            const user = await this.userService.loginUser(email,password);
            const token = createToken({email: user.email, _id: user._id as string });
            res.cookie("token", token, {httpOnly: true});
            res.status(200).json({status: "ok", user});
        } catch (error) {
            next(error);
        }
    };
};