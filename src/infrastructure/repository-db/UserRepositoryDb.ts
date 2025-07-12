import { User, UserModel } from "../../domain/entities/User";
import { UserRepository } from "../../domain/interfaces/repositories/UserRespository";
import bcrypt from "bcryptjs";

export class UserRepositoryDb implements UserRepository {
    async newUser(
        infrastructure_name: string,
        email: string,
        mobile: number,
        password: string,
        since: number
    ): Promise<any> {
        const encryptPassword = await bcrypt.hashSync(password, 10);

        const user = await new UserModel({
            infrastructure_name,
            email,
            mobile,
            password: encryptPassword,
            since,
        }).save();

        if (!user) throw new Error("Failed creating new user");
        return user;
    }

    async loginUser(email: string, password: string): Promise<any> {
        const findUser = await UserModel.findOne({ email }).lean<any>().exec();
        if (!findUser) throw new Error("User not found");
        if (!bcrypt.compareSync(password, findUser.password))
            throw new Error("Wrong password");
        return findUser;
    }
}
