import { Router } from "express";
import { SensorController } from "../controllers/sensorCtrl";

const sensorRouter = Router();

const sensorCtrl = new SensorController();

sensorRouter.post("/new-sensor", sensorCtrl.newSensor);
sensorRouter.post("/fetch-footfall", sensorCtrl.fetchFootfall);

export default sensorRouter;
