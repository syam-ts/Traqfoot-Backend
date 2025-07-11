

export interface SensorRepository {

    newSensor(deviceName: string): Promise<void>
  
    fetchFootfall(sensor_id: string, timestamp: Date, newCount: number): Promise<any>
}