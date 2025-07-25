import { Sensor, SensorModel } from "../../domain/entities/Sensor";
import { SensorRepository } from "../../domain/interfaces/repositories/SensorRepository";

export class SensorRepositoryDb implements SensorRepository {
    async newSensor(
        sensorName: string,
        sensorLocation: string,
        userId: string
    ): Promise<void> {
        const existingSensor = await SensorModel.findOne({
            sensorName,
            userId,
            sensorLocation,
        });
        console.log('EXISITN: ' ,existingSensor)

        if (existingSensor)
            throw new Error("The same sensor with same location already exists");

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
        const sensors = await SensorModel.find({ userId });

        if (!sensors) throw new Error("Could not fetch all sensors");
        return sensors;
    }

    async viewSensor(sensor_id: string): Promise<Sensor> {
        const sensor = await SensorModel.findOne({ _id: sensor_id }).lean<Sensor>();

        if (!sensor) throw new Error("No sensor found");

        return sensor;
    }

    async fetchFootfall(
        sensor_id: string,
        timestamp: Date,
        newCount: number
    ): Promise<void> {
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
