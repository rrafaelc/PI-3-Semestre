'use client';

import { CircularProgress, Typography } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import SensorCard from '../components/SensorCard';
import { API_URL } from '../utils/constants';

const Sensores = () => {
  const [sensores, setSensores] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchSensores = async () => {
      try {
        const response = await axios.get(`${API_URL}/sensor`);
        setSensores(response.data);
      } catch (err) {
        setError('Erro ao buscar os sensores. Tente novamente mais tarde.');
      } finally {
        setLoading(false);
      }
    };
    fetchSensores();
  }, []);

  return (
    <div className="container mx-auto mt-10 p-2">
      <Typography variant="h3" className="mb-5 text-center">
        Lista de Sensores
      </Typography>
      {loading ? (
        <div className="flex justify-center items-center h-40">
          <CircularProgress />
        </div>
      ) : error ? (
        <Typography variant="body1" className="text-red-500">
          {error}
        </Typography>
      ) : (
        <div className="mt-5 flex flex-wrap gap-3 justify-center">
          {sensores.map((sensor: any) => (
            <SensorCard key={sensor.id} sensor={sensor} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Sensores;
