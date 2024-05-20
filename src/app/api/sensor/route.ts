import { Sensor } from '@prisma/client';
import { NextResponse } from 'next/server';
import { prisma } from '../lib/prisma';
import { ISensorData } from '../models/SensorData';
import { getSensorData } from '../repositories/sensorDataService';

export interface ISensor extends Sensor {
  sensor_data: ISensorData[];
}

export async function GET(): Promise<NextResponse<ISensor> | NextResponse<{ errMsg: string }>> {
  const sensor = await prisma.sensor.findFirst({
    where: {
      id: 'd2e63edd-a26a-496b-8d1a-9d1ddb2a6a9e',
    },
  });

  if (!sensor)
    return NextResponse.json(
      {
        errMsg: 'Sensor not found',
      },
      { status: 400 },
    );

  const { data, errMsg } = await getSensorData({ sensor_id: sensor.id });

  if (errMsg)
    return NextResponse.json(
      {
        errMsg,
      },
      { status: 400 },
    );

  const response: ISensor = {
    ...sensor,
    sensor_data: data ? data : [],
  };

  return NextResponse.json(response);
}
