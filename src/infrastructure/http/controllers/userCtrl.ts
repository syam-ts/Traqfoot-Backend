import { LoginUser } from "../../../Services/user/loginUserService";
import { NewUser } from "../../../Services/user/newUserService";
import { UserRepositoryDb } from "../../repository-db/UserRepositoryDb";
import jwt from "jsonwebtoken";

const userRepository = new UserRepositoryDb();
const newUserService = new NewUser(userRepository);
const loginUserService = new LoginUser(userRepository);

export class UserController {
    async newUser(req: any, res: any): Promise<any> {
        try {
            const response = await newUserService.execute(req.body);

            res.status(201).json({ message: "New user created", success: true });
        } catch (error: unknown) {
            const err = error as { message: string };
            res.status(501).json({ message: err.message, success: false });
        }
    }

    async loginUser(req: any, res: any): Promise<any> {
        try {
            const user = await loginUserService.execute(req.body);
 
            const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET as string, {
                expiresIn: "7d",
            });

            res.status(201).json({ message: "Login succesfull",token,user , success: true });
        } catch (error: unknown) {
            const err = error as { message: string };
            res.status(501).json({ message: err.message, success: false });
        }
    }
}
