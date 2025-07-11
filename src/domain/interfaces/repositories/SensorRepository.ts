

export interface SensorRepository {

    newSensor(): Promise<any>
  
    fetchFootfall(): Promise<any>
}