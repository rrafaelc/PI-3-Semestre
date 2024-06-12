// src/pages/index.tsx
import dynamic from 'next/dynamic';

const MapComponent = dynamic(() => import('./mapa'), { ssr: false });

const HomePage = () => {
  return (
    <div>
      <h1>Mapa com Leaflet</h1>
      <MapComponent />
    </div>
  );
};

export default HomePage;
