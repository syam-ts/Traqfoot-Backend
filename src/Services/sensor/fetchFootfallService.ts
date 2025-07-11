import { SensorRepository } from "../../domain/interfaces/repositories/SensorRepository";

interface SensorBody {
    sensor_id: string;
    timestamp: Date;
    newCount: number;
}

export class FetchFootfall {
    constructor(private sensorRepository: SensorRepository) { }

    async execute(body: SensorBody) {
        const { sensor_id, timestamp, newCount } = body;
        return this.sensorRepository.fetchFootfall(sensor_id, timestamp, newCount);
    }
}
