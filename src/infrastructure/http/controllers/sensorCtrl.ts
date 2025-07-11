import { NewSensor } from "../../../Services/sensor/newSensorService";
import { SensorRepositoryDb } from "../../repository-db/SensorRepositoryDb";

const sensorRepository = new SensorRepositoryDb();
const newSensorService = new NewSensor(sensorRepository);

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
}
