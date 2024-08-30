import { Document } from "mongoose";

export class TaskEntity extends Document {
  public description!: string;
  public done?: boolean;//El operador ? indica que esta propiedad es opcional, es decir, no es obligatorio que esté presente cuando se cree un nuevo TaskEntity.
};