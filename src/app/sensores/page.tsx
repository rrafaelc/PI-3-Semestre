'use client';

import { CircularProgress, Grid, Paper, Typography } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
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
      <Typography variant="h3" className="mb-5">
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
        <Grid container spacing={3}>
          {sensores.map((sensor: any) => (
            <Grid item xs={12} sm={6} md={4} key={sensor.id}>
              <Paper className="p-3 bg-[#001C39] shadow-md text-white">
                <Typography variant="h5" className="mb-2">
                  Nome: {sensor.name}
                </Typography>
                <Typography variant="body1" className="mb-2">
                  Modelo: {sensor.model}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      )}
    </div>
  );
};

export default Sensores;
