import { SensorRepository } from "../../domain/interfaces/repositories/SensorRepository";

interface Body {
  sensorName: string;
  sensorLocation: string; 
}

export class NewSensor {
  constructor(private sensorRepository: SensorRepository) { }

  async execute(body: Body, userId: string) { 
    const { sensorName, sensorLocation } = body;
    return this.sensorRepository.newSensor(sensorName, sensorLocation, userId);
  }
}

