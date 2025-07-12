

export interface SensorRepository {

    newSensor(sensorName: string,sensorLocation: string, userId: string): Promise<void>
  
    fetchAllSensors(userId: string): Promise<any>
    fetchFootfall(sensor_id: string, timestamp: Date, newCount: number): Promise<any>
}