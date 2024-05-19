'use server';

import connectDB from '@/config/database';
import SensorData, { ISensorData } from '@/models/SensorData';

export async function getSensorData() {
  try {
    await connectDB();

    const data: ISensorData[] = JSON.parse(JSON.stringify(await SensorData.find()));

    return { data };
  } catch (error: any) {
    return {
      errMsg: error.message,
    };
  }
}
