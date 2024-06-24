'use client';

import Image from 'next/image';

interface SensorCardProps {
  sensor: any;
}

export default function SensorCard({ sensor }: SensorCardProps) {
  return (
    <a
      href={`/sensores/${sensor.id}`}
      className="bg-white w-full sm:w-[300px] min-h-[200px] p-4 rounded flex flex-col justify-center items-center gap-2"
    >
      <Image src="/images/arduino.svg" alt="Arduino" width={100} height={100} />
      <div className="flex flex-col">
        <p className="text-center text-2xl">Nome: {sensor.name}</p>
        <p className="text-center text-2xl">Modelo: {sensor.model}</p>
      </div>
    </a>
  );
}
