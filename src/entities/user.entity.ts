import { Document } from "mongoose";

export interface UserEntity extends Document {
    name: string;
    lastName: string;
    email: string;
    password: string;
    tasks: [];
  };

// En Programación Orientada a Objetos (POO), una entidad es un concepto clave que representa un objeto o cosa con características y comportamientos definidos. En términos simples, una entidad es un objeto dentro de un dominio de negocio o aplicación que tiene identidad, atributos y operaciones.

// Características de una Entidad en POO
// Identidad Única: Una entidad tiene una identidad única que la distingue de otras entidades, incluso si tienen atributos similares. En un sistema, esta identidad suele ser un identificador, como un ID.

// Atributos: Son las propiedades o características que describen a la entidad. Por ejemplo, una entidad Usuario podría tener atributos como nombre, email, y contraseña.

// Comportamientos o Métodos: Son las acciones o funcionalidades que la entidad puede realizar. Por ejemplo, un método en la entidad Usuario podría ser iniciarSesion().
