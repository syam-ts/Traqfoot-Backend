import express from "express";
import cookieparser from "cookie-parser";
import indexRouter from "./infrastructure/http/routes/index";

const app = express();

app.use(express.json());
app.use(cookieparser());
app.use("/", indexRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    try {
        console.log(`Server successfully running on port ${PORT}`);
    } catch (err: any) {
        console.log(`Server running failed: ${err}`);
    }
});
