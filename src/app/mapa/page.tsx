// src/pages/index.tsx
import dynamic from 'next/dynamic';

const MapComponent = dynamic(() => import('./mapa'), { ssr: false });

const HomePage = () => {
  return (
    <div>
      <h1 className="text-center text-2xl font-bold my-4">Cidade de Itapira</h1>
      <MapComponent />
    </div>
  );
};

export default HomePage;
