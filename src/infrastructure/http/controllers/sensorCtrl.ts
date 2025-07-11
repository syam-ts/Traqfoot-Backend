import { FetchFootfall } from "../../../Services/sensor/fetchFootfallService";
import { NewSensor } from "../../../Services/sensor/newSensorService";
import { SensorRepositoryDb } from "../../repository-db/SensorRepositoryDb";

const sensorRepository = new SensorRepositoryDb();
const newSensorService = new NewSensor(sensorRepository);
const fetchFootfallService = new FetchFootfall(sensorRepository);

export class SensorController {
  async newSensor(req: any, res: any): Promise<any> {
    try {
      const { deviceName }: { deviceName: string } = req.body;
      console.log('body', req.body, deviceName)
      const response = await newSensorService.execute(deviceName);
      res.status(201).json({ message: "New sensor added", success: true });
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
