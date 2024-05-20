'use client';

import { User } from '@prisma/client';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function UserPostgres() {
  const [data, setData] = useState<User[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<User[]>('/api/user');
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
    return (
      <div>
        <h1>Ocorreu um erro!</h1>
        <p>Mensagem: {error}</p>
      </div>
    );

  return (
    <div className="flex flex-col items-center justify-center my-20 gap-5">
      <h1>Usuários</h1>
      {data &&
        data.map((item) => (
          <div key={item.id}>
            <p>ID: {item.id}</p>
            <p>Nome: {item.name}</p>
            <p>Email: {item.email}</p>
            <p>Senha: {item.password}</p>
            <p>Ativo: {item.isActive ? 'Sim' : 'Não'}</p>
          </div>
        ))}
    </div>
  );
}
