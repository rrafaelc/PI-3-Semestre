'use client';

import axios from 'axios';
import { useEffect, useState } from 'react';
import { ISensor } from '../api/sensor/route';

export default function MongoDB() {
  const [sensor, setSensor] = useState<ISensor | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<ISensor>('/api/sensor');
        setSensor(response.data);
      } catch (error: any) {
        console.error('Error fetching data:', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading)
    return <div className="flex justify-center items-center h-screen">Carregando...</div>;

  if (error)
    return (
      <div>
        <h1>Ocorreu um erro!</h1>
        <p>Mensagem: {error}</p>
      </div>
    );

  if (!sensor)
    return (
      <div>
        <h1>Sensor não encontrado!</h1>
      </div>
    );
  return (
    <div className="flex flex-col items-center justify-center my-20 gap-5">
      <h1>Dados do Sensor: {sensor.model}</h1>
      {sensor &&
        sensor.sensor_data.map((item) => (
          <div key={item._id}>
            <p>ID: {item._id}</p>
            <p>Sensor ID: {item.sensor_id}</p>
            <p>Latitude: {item.latitude}</p>
            <p>Longitude: {item.longitude}</p>
            <p>Nível: {item.level}</p>
          </div>
        ))}
    </div>
  );
}
