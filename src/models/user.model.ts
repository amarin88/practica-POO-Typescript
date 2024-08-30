import mongoose from "mongoose";
import { UserEntity } from "../entities/user.entity";

const userCollection = "users";

const userSchema = new mongoose.Schema<UserEntity>({ // El uso de <UserEntity> permite que TypeScript valide que los datos sigan la estructura de la interfaz UserEntity, ayudando a detectar errores en tiempo de compilación.
    name: {type: String, required: true},
    lastName: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    tasks: {
        type: [{task: {type: mongoose.Schema.ObjectId, ref: "tasks"}}], 
        default: [],
    }
});

userSchema.pre("findOne", function(){
    this.populate("tasks.task");
});


export const userModel = mongoose.model<UserEntity>(userCollection, userSchema);