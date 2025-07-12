import { Router } from "express";
import { SensorController } from "../controllers/sensorCtrl";

const sensorRouter = Router();

const sensorCtrl = new SensorController();
const { newSensor, fetchFootfall } = sensorCtrl;

sensorRouter.post("/new-sensor", newSensor);
sensorRouter.post("/fetch-footfall", fetchFootfall);

export default sensorRouter;
