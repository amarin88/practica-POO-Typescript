import { Router } from "express";
import { TaskController } from "../controllers/task.controller";


export class TaskRouter {
    static get routes () {
        const router = Router();

        const taskController = new TaskController();
        router.use("/", taskController.createTask);

        return router;
    };
};