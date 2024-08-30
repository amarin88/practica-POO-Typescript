import express from "express";
import envsConfig from "./config/envs.config";
import { MongoConfig } from "./config/mongodb.config";
import { AppRouter } from "./routes/index.routes";
import { ErrorMiddleware } from "./errors/errorMiddleware";
import cookieParser from "cookie-parser";

class AppServer {
    private app = express(); //app es privado, es decir solamente se utiliza en ésta clase
    private mongoConfig = new MongoConfig();
    constructor (){
        this.mongoConfig.connect();
        this.middlewares();
        this.router();
        this.listen();
        
    };

    middlewares(){
        this.app.use(express.json());//Para leer archivos JSON
        this.app.use(express.urlencoded({extended: true}));//Permite que el objeto req.body contenga valores de cualquier tipo de datos 
        this.app.use(cookieParser())
    };

    router(){
        this.app.use("/api", AppRouter.routes);

        this.app.use(ErrorMiddleware.handleErrors);
    };

    listen(){
        this.app.listen(envsConfig.PORT, ()=>{
            console.log(`Server on port ${envsConfig.PORT}`);
        })
    }; //Función para ejecutar el método listen para asignar el puerto del servidor
};

new AppServer();//Instanciamos la clase