import { Router } from "express";
import { UserController } from "../controllers/userCtrl";

const userRouter = Router();
const UserCtrl = new UserController();
const { newUser, loginUser } = UserCtrl;

userRouter.post("/signup", newUser);
userRouter.get("/login", loginUser);
