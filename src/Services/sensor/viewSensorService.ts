import { SensorRepository } from "../../domain/interfaces/repositories/SensorRepository";

interface Body {
  sensor_id: string;
}

export class ViewSensor {
  constructor(private sensorRepository: SensorRepository) { }

  async execute(body: Body) {
    const { sensor_id } = body;
    return this.sensorRepository.viewSensor(sensor_id);
  }
}
