'use client';

import axios from 'axios';
import { useEffect, useState } from 'react';
import { ISensorData } from '../api/models/SensorData';

export default function MongoDB() {
  const [data, setData] = useState<ISensorData[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/sensor');
        setData(response.data);
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
    <div>
      <h1>Ocorreu um erro!</h1>
      <p>Mensagem: {error}</p>
    </div>;

  return (
    <div className="flex flex-col items-center justify-center my-20 gap-5">
      <h1>Dados do Sensor</h1>
      {data &&
        data.map((item) => (
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
