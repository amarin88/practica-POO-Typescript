import jwt from "jsonwebtoken";
import envsConfig from "../config/envs.config";

interface JwtPayload {
  email: string;
  _id: string;
};//Una interfaz en TypeScript es una forma de definir la estructura de un objeto, indicando qué propiedades debe tener y sus tipos.

// Crear el token
export const createToken = (user: JwtPayload) => {
  const { _id, email } = user;
  const token = jwt.sign({ _id, email }, envsConfig.JWT_SECRET as string, { expiresIn: "10m" }); //Esta parte de la línea es un type assertion en TypeScript. Básicamente le estás diciendo a TypeScript: "Confía en mí, sé que JWT_SECRET es de tipo string."
  return token;
};

// Verificar el token
export const verifyToken = (token: string) => {
  try {
    const decode = jwt.verify(token, envsConfig.JWT_SECRET!) as JwtPayload;
    return decode;
  } catch (error) {
    return null;
  }
};