import connectDB from '../config/database';
import SensorData, { ISensorData } from '../models/SensorData';

interface getSensorDataProps {
  sensor_id: string;
}

export async function getSensorData({ sensor_id }: getSensorDataProps) {
  try {
    await connectDB();

    const data: ISensorData[] = await SensorData.find({ sensor_id });
    return { data };
  } catch (error: any) {
    return {
      errMsg: error.message,
    };
  }
}
