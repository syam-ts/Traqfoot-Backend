import { model, Schema } from "mongoose";

const SensorSchema = new Schema({
  sensorName: { type: String, required: true },
  sensorLocation: { type: String, required: true },
  userId: { type: String, required: true },
  createdAt: { type: Date, required: true },
  timestamp: { type: Date, required: false },
  count: { type: Number, required: true, default: 0 },
});

export const SensorModel = model("sensor", SensorSchema);
