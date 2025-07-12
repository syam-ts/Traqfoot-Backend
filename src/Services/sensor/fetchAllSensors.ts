import { SensorRepository } from "../../domain/interfaces/repositories/SensorRepository";

export class FetchAllSensors {
    constructor(private sensorRepository: SensorRepository) { }

    async execute(userId: string) {
        console.log('userid from service', userId)
        return this.sensorRepository.fetchAllSensors(userId);
    }
}
