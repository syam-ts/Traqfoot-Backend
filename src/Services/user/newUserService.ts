import { User } from "../../domain/entities/User";
import { UserRepository } from "../../domain/interfaces/repositories/UserRespository";

export class NewUser {
    constructor(private userRepository: UserRepository) { }

    async execute(body: User) {
        const { infrastructure_name, email, mobile, password, since } = body;
        return this.userRepository.newUser(
            infrastructure_name,
            email,
            mobile,
            password,
            since
        );
    }
}
