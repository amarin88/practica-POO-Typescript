import { Handler } from "express";
import { TaskServices } from "../services/task.services";
import { verifyToken } from "../utils/jwt";
import { UserServices } from "../services/user.services";


export class TaskController{

    private taskService : TaskServices;
    private userService: UserServices;

    constructor(){
        this.taskService = new TaskServices();
        this.userService = new UserServices();
    };

    createTask: Handler = async (req,res,next) => {
        try {
        const userData = verifyToken(req.cookies.token);
        if(!userData) throw new Error("User not found");
        console.log(userData);
        const user = await this.userService.getUserByEmail(userData.email);
        const task = await this.taskService.createTask(req.body, user._id as string);
        res.status(200).json({ status: "ok", task });
        } catch (error) {
            next(error);
        };
    };
};