import { Router } from "express";
import { UserRouter } from "./user.routes";
import { TaskRouter } from "./task.routes";


export class AppRouter {
    static get routes () {
        const router = Router();

        router.use("/user", UserRouter.routes);
        router.use("/tasks", TaskRouter.routes);

        return router;
    };
};



// El uso de static indica que el método pertenece a la clase en sí y no a instancias individuales de la clase
// Los métodos estáticos como routes en la clase AppRouter proporcionan una forma de encapsular la lógica de enrutamiento y ofrecer una interfaz sencilla para obtener el enrutador sin necesidad de instanciar la clase