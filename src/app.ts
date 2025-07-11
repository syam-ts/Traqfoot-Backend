import express from "express";
import cookieparser from "cookie-parser";
import indexRouter from "./infrastructure/http/routes/index";
import { ConnectDB } from "./infrastructure/database/Db";
import dotenv from 'dotenv'
dotenv.config({
    path: '.env'
})

const app = express();

app.use(express.json());
app.use(cookieparser());
app.use("/", indexRouter);
console.log('PORT: ', process.env.PORT)

const PORT = process.env.PORT || 3000;
app.listen(PORT, async() => {
    try {
        await ConnectDB();
        console.log(`Server successfully running on port ${PORT}`);
    } catch (err: any) {
        console.log(`Server running failed: ${err}`);
    }
});
