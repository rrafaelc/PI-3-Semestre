import { NextResponse } from 'next/server';
import { getSensorData } from '../repositories/sensorDataService';

export async function GET() {
  const { data, errMsg } = await getSensorData();

  if (errMsg)
    return NextResponse.json(
      {
        errMsg,
      },
      { status: 400 },
    );

  return NextResponse.json(data);
}
