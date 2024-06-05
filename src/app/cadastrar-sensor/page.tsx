'use client';
import { Button, CircularProgress, TextField } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { API_URL } from '../utils/constants';
import './cadastrar-sensor.css';

const CadastrarSensor = () => {
  const [name, setName] = useState('');
  const [model, setModel] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      window.location.href = '/login';
    }
  }, []);

  const handleCreateSensor = async () => {
    setLoading(true);
    const token = localStorage.getItem('token');
    try {
      const response = await axios.post(
        `${API_URL}/sensor`,
        { name, model },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      window.location.href = '/sensores';
    } catch (err) {
      setError('Erro ao criar o sensor, tente de novo.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="Container-CadastroSensor">
      <p>Cadastrar sensor</p>
      <div className="form-CadastroSensor">
        <TextField
          id="standard-multiline-flexible"
          label="Nome"
          multiline
          maxRows={4}
          variant="standard"
          value={name}
          required
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          id="standard-multiline-flexible"
          label="Modelo"
          multiline
          maxRows={4}
          variant="standard"
          value={model}
          required
          onChange={(e) => setModel(e.target.value)}
        />
        <div className="botoes-CadastroSensor">
          <Button variant="contained" color="success" onClick={handleCreateSensor}>
            {loading ? <CircularProgress size={24} /> : 'Confirmar'}
          </Button>
          <Button onClick={() => (window.location.href = '/')} variant="outlined" color="error">
            Cancelar
          </Button>
        </div>
        {error && <p className="text-red-500">{error}</p>}
      </div>
    </div>
  );
};

export default CadastrarSensor;
