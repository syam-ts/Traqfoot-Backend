import { SensorRepository } from "../../domain/interfaces/repositories/SensorRepository";

export class NewSensor {
  constructor(private sensorRepository: SensorRepository) {}

  async execute(deviceName: string) {
    return this.sensorRepository.newSensor(deviceName);
  }
}
