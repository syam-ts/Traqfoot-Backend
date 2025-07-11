import { SensorModel } from "../../domain/entities/Sensor";
import { SensorRepository } from "../../domain/interfaces/repositories/SensorRepository";


export class SensorRepositoryDb implements SensorRepository {

    async newSensor(): Promise<any> {
        const newSensor = await new SensorModel({
            deviveName
        })
    }

    async fetchFootfall(): Promise<any> {
        
    }
}