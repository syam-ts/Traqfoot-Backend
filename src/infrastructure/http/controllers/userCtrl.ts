import { LoginUser } from "../../../Services/user/loginUserService";
import { NewUser } from "../../../Services/user/newUserService";
import { UserRepositoryDb } from "../../repository-db/UserRepositoryDb";

const userRepository = new UserRepositoryDb();
const newUserService = new NewUser(userRepository);
const loginUserService = new LoginUser(userRepository);

export class UserController {
    async newUser(req: any, res: any): Promise<any> {
        try {
            const response = await newUserService.execute(req.body);

            res.status(201).json({ message: "New user created", success: true });
        } catch (error) {
            res.status(501).json({ message: error, success: false });
        }
    }

    async loginUser(req: any, res: any): Promise<any> {
        try {
            const response = await loginUserService.execute(req.body);

            res.status(201).json({ message: "Login succesfull", success: true });
        } catch (error) {
            res.status(501).json({ message: error, success: false });
        }
    }
}
