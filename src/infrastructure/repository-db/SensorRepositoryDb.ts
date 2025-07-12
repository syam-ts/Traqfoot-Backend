import { SensorModel } from "../../domain/entities/Sensor";
import { SensorRepository } from "../../domain/interfaces/repositories/SensorRepository";

export class SensorRepositoryDb implements SensorRepository {
    async newSensor(sensorName: string,sensorLocation: string, userId: string): Promise<void> {
        console.log("ROM MAIN: ", sensorName);
        const newSensor = await new SensorModel({
            sensorName,
            sensorLocation,
            userId,
            count: 0,
            createdAt: Date.now(),
        }).save();

        if (!newSensor) throw new Error("Adding new sensor failed");
        return;
    }

    async fetchAllSensors(userId: string): Promise<any> {
        console.log('useid', userId)
        const sensors = await SensorModel.find({userId});
        console.log('asl sensor: ', sensors)

        if(!sensors) throw new Error('Could not fetch all sensors')
            return sensors;
    }

    async fetchFootfall(
        sensor_id: string,
        timestamp: Date,
        newCount: number
    ): Promise<void> {
        console.log('DATA: ',newCount)
        const updateSensor = await SensorModel.findByIdAndUpdate(sensor_id, {
            $set: {
                timestamp: timestamp,
            },
            $inc: { count: newCount },
        });

        if (!updateSensor) throw new Error("Could not update footfall");
        return;
    }
}
