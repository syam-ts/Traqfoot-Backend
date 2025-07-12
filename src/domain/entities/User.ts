import { model, Schema } from "mongoose";

const UserSchema = new Schema({
    infrastructure_name: { type: String, reqrired: true },
    email: { type: String, reqrired: true },
    mobile: { type: Number, reqrired: true },
    password: { type: String, reqrired: true },
    since: { type: Number, reqrired: true },
});

export const UserModel = model("user", UserSchema);
