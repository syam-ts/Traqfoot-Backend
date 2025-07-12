import { SensorRepository } from "../../domain/interfaces/repositories/SensorRepository";

interface Body {
  deviceName: string;
  userId: string;
}

export class NewSensor {
  constructor(private sensorRepository: SensorRepository) { }

  async execute(body: Body) {
    const { deviceName, userId } = body;
    return this.sensorRepository.newSensor(deviceName, userId);
  }
}
