import { model, Schema } from "mongoose";

const SensorSchema = new Schema({
  deviceName: { type: String, required: true },
  createdAt: { type: Date, required: true },
  timestamp: { type: Date, required: false },
  count: { type: Number, required: false },
});

export const SensorModel = model("sensor", SensorSchema);
