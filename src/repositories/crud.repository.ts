import { Model } from "mongoose";

export class CrudRepository<T>{//<T>: Es un parámetro genérico que representa el tipo de entidad con la que va a trabajar el repositorio.

    constructor(private model: Model<T>){
        this.model = model;
    };
    async getAll(){
        return await this.model.find();
    };
    

    async getOne(query: {}){
        return await this.model.findOne(query);
    };

    async getById(id: string ){
        return await this.model.findById(id);
    };

    async create(data: T){
        return await this.model.create(data);
    };
    async update(id: string, data: {}){
        return await this.model.findByIdAndUpdate(id, data, {new: true} );
    };
    async delete(id: string ){
        return await this.model.findByIdAndDelete();
    };
};
