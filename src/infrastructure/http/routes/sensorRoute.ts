import { Router } from "express";
import { SensorController } from "../controllers/sensorCtrl";
import verifyToken from "../../../middleware/auth";

const sensorRouter = Router();

const sensorCtrl = new SensorController();
const { newSensor,fetchAllSensors, fetchFootfall } = sensorCtrl;

sensorRouter.post("/new", verifyToken, newSensor);
sensorRouter.get("/fetch-allSensors", verifyToken, fetchAllSensors);
sensorRouter.get("/view", verifyToken, fetchAllSensors);
sensorRouter.post("/fetch-footfall", fetchFootfall);

export default sensorRouter;
