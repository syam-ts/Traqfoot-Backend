import { model, Schema } from "mongoose";

const SensorSchema = new Schema({
  device: { type: String, required: true },
  sensor_id: { type: String, required: false },
  timestamp: { type: Date, required: false },
  count: { type: Number, required: false },
});

export const SensorModel = model("Sensor", SensorSchema);
