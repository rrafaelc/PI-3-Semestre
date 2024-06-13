'use client';

import { clearStorage } from '@/app/utils/clearStorage';
import { API_URL } from '@/app/utils/constants';
import { isTokenExpired } from '@/app/utils/isTokenExpired';
import { level } from '@/app/utils/level';
import { Button, CircularProgress, Grid, Paper, Typography } from '@mui/material';
import axios from 'axios';
import { useEffect, useRef, useState } from 'react';

interface Props {
  params: {
    sensorId: string;
  };
}

const Page = ({ params }: Props) => {
  const { sensorId } = params;
  const [sensor, setSensor] = useState<any>([]);
  const [sensorData, setSensorData] = useState<any>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [isRunning, setIsRunning] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sensorId) return;

    const fetchSensorData = async () => {
      try {
        const response = await axios.get(`${API_URL}/sensorData/${sensorId}`, {
          params: { limit: 1 },
        });

        setSensorData((prevData: any) => {
          const newData = [response.data[0], ...prevData];
          return newData;
        });

        if (scrollRef.current) {
          scrollRef.current.scrollTop = 0;
        }
      } catch (err) {
        setError('Erro ao buscar os dados do sensor. Tente novamente mais tarde.');
      } finally {
        setLoading(false);
      }
    };

    let intervalId: NodeJS.Timeout;

    if (isRunning) {
      fetchSensorData();
      intervalId = setInterval(fetchSensorData, 2000);
    }

    return () => clearInterval(intervalId);
  }, [sensorId, isRunning]);

  useEffect(() => {
    const fetchSensor = async () => {
      try {
        const response = await axios.get(`${API_URL}/sensor/${sensorId}`);
        setSensor(response.data);
      } catch (err) {
        setError('Erro ao buscar o sensor. Tente novamente mais tarde.');
      } finally {
        setLoading(false);
      }
    };
    fetchSensor();
  }, [sensorId]);

  const handleStart = async () => {
    const token = localStorage.getItem('token');

    if (token) {
      if (isTokenExpired()) {
        clearStorage();
      } else {
        if (!sensorId) {
          setError('sensorId não encontrado');

          return;
        }

        try {
          await axios.post(
            `${API_URL}/sensorData/simulation`,
            { start: true, sensor_id: sensorId },
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            },
          );
          setIsRunning(true);
        } catch (err) {
          setError('Erro ao iniciar a simulação. Tente novamente mais tarde.');
        }
      }
    } else {
      clearStorage();

      setError('Para iniciar a simulação precisa estar logado');
    }
  };

  const handleStop = async () => {
    const token = localStorage.getItem('token');

    if (token) {
      if (isTokenExpired()) {
        clearStorage();
      } else {
        try {
          await axios.post(
            `${API_URL}/sensorData/simulation`,
            { start: false },
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            },
          );
          setIsRunning(false);
        } catch (err) {
          setError('Erro ao parar a simulação. Tente novamente mais tarde.');
        }
      }
    } else {
      clearStorage();
    }
  };

  return (
    <div className="container mx-auto mt-10 p-2">
      <Typography variant="h4" className="mb-5">
        Últimos dados do sensor: {sensor.name}
      </Typography>
      <div className="mb-5 flex flex-col">
        <h2>
          Simulação - <strong>Precisa estar logado</strong>
        </h2>
        <div className="flex gap-2">
          <Button
            variant="contained"
            color="primary"
            onClick={handleStart}
            disabled={isRunning || loading}
          >
            Ligar
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={handleStop}
            disabled={!isRunning || loading}
          >
            Desligar
          </Button>
        </div>
      </div>
      {loading ? (
        <div className="flex justify-center items-center h-40">
          <CircularProgress />
        </div>
      ) : error ? (
        <Typography variant="body1" className="text-red-500">
          {error}
        </Typography>
      ) : (
        <div ref={scrollRef} style={{ maxHeight: '500px', overflowY: 'auto' }}>
          <Grid container spacing={3}>
            {sensorData.map((data: any) => (
              <Grid item xs={12} sm={6} md={4} key={`${data._id}${Math.random()}`}>
                <Paper className="p-3 bg-[#001C39] shadow-md text-white">
                  <Typography variant="body1" className="mb-2">
                    Nível: {data.level ?? level()}
                  </Typography>
                  <Typography variant="body1" className="mb-2">
                    Rua: {data.location.logradouro}
                  </Typography>
                  <Typography variant="body1" className="mb-2">
                    Bairro: {data.location.bairro}
                  </Typography>
                  <Typography variant="body1" className="mb-2">
                    CEP: {data.location.cep}
                  </Typography>
                  <Typography variant="body1" className="mb-2">
                    Data: {new Date(data.createdAt).toLocaleString()}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </div>
      )}
    </div>
  );
};

export default Page;
