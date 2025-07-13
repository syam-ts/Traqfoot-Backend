import { Sensor } from "../../entities/Sensor";

export interface SensorRepository {

    newSensor(
        sensorName: string,
        sensorLocation: string,
        userId: string
    ): Promise<void>;

    fetchAllSensors(userId: string): Promise<any>;
   
    viewSensor(sensor_id: string): Promise<Sensor>;

    fetchFootfall(
        sensor_id: string,
        timestamp: Date,
        newCount: number
    ): Promise<any>;

}
