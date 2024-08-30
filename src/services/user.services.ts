import { UserEntity } from "../entities/user.entity";
import { ErrorHandle } from "../errors/errorHandle";
import { UserRepository } from "../repositories/user.repository";

export class UserServices {
  private userRepository: UserRepository; //Declara una propiedad privada userRepository que será utilizada para interactuar con el repositorio.

  constructor() {
    this.userRepository = new UserRepository(); //Se instancia un nuevo objeto UserRepository y se asigna a la propiedad userRepository. Esto significa que cada vez que se crea una instancia de UserServices, también se crea una nueva instancia de UserRepository.
  };

  async registerUser(userData: UserEntity) {
    const user = await this.userRepository.getOne({ email: userData.email });
    if (user) throw ErrorHandle.badRequest("User already exists");

    const newUser = await this.userRepository.create(userData);
    console.log(newUser);
    return newUser;
  };

  async loginUser(email: string, password: string) {
    const user = await this.userRepository.getOne({ email });

    if (!user || user.password !== password) throw ErrorHandle.unauthorized("Invalid email or password");

    return user;
  };
  async getUserByEmail(email: string) {
    const user = await this.userRepository.getOne({ email });
    if(!user) throw ErrorHandle.notFound("User not found");
    return user;
  };
};