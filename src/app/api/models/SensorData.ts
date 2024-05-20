import mongoose, { Model, Schema } from 'mongoose';

export interface ISensorData {
  _id: string;
  sensor_id: string;
  latitude: number;
  longitude: number;
  level: number;
}

const sensorDataSchema = new Schema<ISensorData>(
  {
    sensor_id: { type: String, required: true },
    latitude: { type: Number, required: true },
    longitude: { type: Number, required: true },
    level: { type: Number, required: true },
  },
  { timestamps: true },
);

const SensorData: Model<ISensorData> =
  mongoose.models.sensorData || mongoose.model('sensorData', sensorDataSchema);

export default SensorData;
