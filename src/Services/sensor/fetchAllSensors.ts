import { SensorRepository } from "../../domain/interfaces/repositories/SensorRepository";

export class FetchAllSensors {
    constructor(private sensorRepository: SensorRepository) { }

    async execute(userId: string) { 
        return this.sensorRepository.fetchAllSensors(userId);
    }
}
