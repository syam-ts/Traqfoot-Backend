import { StringExpression } from "mongoose";
import { UserRepository } from "../../domain/interfaces/repositories/UserRespository";

interface Body {
    email: string;
    password: string;
}

export class LoginUser {
    constructor(private userRepository: UserRepository) { }

    async execute(body: Body) { 
        const { email, password } = body;
        return this.userRepository.loginUser(email, password);
    }
}
