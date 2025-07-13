import { SensorRepository } from "../../domain/interfaces/repositories/SensorRepository";
 

export class ViewSensor {
  constructor(private sensorRepository: SensorRepository) { }

  async execute(sensor_id: string) {
    return this.sensorRepository.viewSensor(sensor_id);
  }
}
