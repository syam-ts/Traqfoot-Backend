import { Router } from "express";
import { SensorController } from "../controllers/sensorCtrl";
import verifyToken from "../../../middleware/auth";

const sensorRouter = Router();

const sensorCtrl = new SensorController();
const { newSensor, fetchFootfall } = sensorCtrl;

sensorRouter.post("/new-sensor", verifyToken, newSensor);
sensorRouter.post("/fetch-footfall", fetchFootfall);

export default sensorRouter;
