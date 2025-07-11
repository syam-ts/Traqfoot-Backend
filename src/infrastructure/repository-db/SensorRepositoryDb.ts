import { SensorModel } from "../../domain/entities/Sensor";
import { SensorRepository } from "../../domain/interfaces/repositories/SensorRepository";


export class SensorRepositoryDb implements SensorRepository {

    async newSensor(deviceName: string): Promise<void> {
        console.log("ROM MAIN: ", deviceName)
        const newSensor = await new SensorModel({
            deviceName,
            createdAt:  Date.now()
        }).save();

        if(!newSensor) throw new Error('Adding new sensor failed');
        return;
    }

    async fetchFootfall(): Promise<any> {
        
    }
}