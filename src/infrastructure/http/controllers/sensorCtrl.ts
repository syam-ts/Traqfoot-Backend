import { FetchAllSensors } from "../../../Services/sensor/fetchAllSensors";
import { FetchFootfall } from "../../../Services/sensor/fetchFootfallService";
import { NewSensor } from "../../../Services/sensor/newSensorService";
import { SensorRepositoryDb } from "../../repository-db/SensorRepositoryDb";

const sensorRepository = new SensorRepositoryDb();
const newSensorService = new NewSensor(sensorRepository);
const fetchAllSensorsService = new FetchAllSensors(sensorRepository);
const fetchFootfallService = new FetchFootfall(sensorRepository);

export class SensorController {
  async newSensor(req: any, res: any): Promise<any> {
    try {
      console.log("THE USE: ", req.user, " and ", req.user.userId);
      const response = await newSensorService.execute(
        req.body,
        req.user.userId
      );
      res.status(201).json({ message: "New sensor added", success: true });
    } catch (error) {
      return res.status(500).json({ message: error, success: false });
    }
  }
  
  async fetchAllSensors(req: any, res: any): Promise<any> {
    try {
      console.log('all', req.user , 'and', req.user.userId)
      const sensors = await fetchAllSensorsService.execute(req.user.userId);
      res
        .status(200)
        .json({ message: "All sensors feched", sensors, success: true });
    } catch (error) {
      return res.status(500).json({ message: error, success: false });
    }
  }

  async fetchFootfall(req: any, res: any): Promise<any> {
    try {
      const response = await fetchFootfallService.execute(req.body);
      res.status(201).json({ message: "Sensor updated", success: true });
    } catch (error) {
      return res.status(500).json({ message: error, success: false });
    }
  }
}
