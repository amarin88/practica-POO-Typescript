import { TaskEntity } from "../entities/task.entity";
import { taskModel } from "../models/task.model";
import { CrudRepository } from "./crud.repository";

export class TaskRepository extends CrudRepository<TaskEntity>{
    constructor(){
        super(taskModel);
    }
};



//  * La clase TaskRepository extiende la clase genérica CrudRepository con el tipo TaskEntity.
//  * Actúa como un repositorio especializado para manejar las operaciones de la base de datos 
//  * relacionadas con la entidad TaskEntity, como crear, leer, actualizar y eliminar.
//  *
//  * - `CrudRepository<TaskEntity>`: Es una clase genérica que proporciona métodos CRUD básicos 
//  *   para cualquier entidad. Al pasar `TaskEntity` como tipo, se asegura que las operaciones 
//  *   estén tipadas específicamente para esta entidad.
//  *
//  * - `constructor() { super(taskModel); }`: En el constructor, se llama al constructor de la 
//  *   clase base CrudRepository con `taskModel`, un modelo de Mongoose que representa la colección 
//  *   de tareas en la base de datos. Esto permite que TaskRepository utilice este modelo para 
//  *   las operaciones CRUD.