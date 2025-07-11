

export interface SensorRepository {

    newSensor(deviceName: string): Promise<void>
  
    fetchFootfall(): Promise<any>
}