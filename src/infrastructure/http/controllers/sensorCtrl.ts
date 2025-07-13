import { FetchAllSensors } from "../../../Services/sensor/fetchAllSensors";
import { FetchFootfall } from "../../../Services/sensor/fetchFootfallService";
import { NewSensor } from "../../../Services/sensor/newSensorService";
import { ViewSensor } from "../../../Services/sensor/viewSensorService";
import { SensorRepositoryDb } from "../../repository-db/SensorRepositoryDb";

const sensorRepository = new SensorRepositoryDb();
const newSensorService = new NewSensor(sensorRepository);
const fetchAllSensorsService = new FetchAllSensors(sensorRepository);
const viewSensorService = new ViewSensor(sensorRepository);
const fetchFootfallService = new FetchFootfall(sensorRepository);

export class SensorController {
  async newSensor(req: any, res: any): Promise<any> {
    try { 
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
      const sensors = await fetchAllSensorsService.execute(req.user.userId);
      res
        .status(200)
        .json({ message: "All sensors feched", sensors, success: true });
    } catch (error) {
      return res.status(500).json({ message: error, success: false });
    }
  }
  
  async viewSensor(req: any, res: any): Promise<any> {
    try { 
      const sensors = await viewSensorService.execute(req.body);
      res
        .status(200)
        .json({ message: "Sensor loaded successfully", sensors, success: true });
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
