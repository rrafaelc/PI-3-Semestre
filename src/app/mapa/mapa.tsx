// src/components/MapComponent.tsx
'use client';

import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { FC } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

// Coordenadas para o centro do mapa
const position: [number, number] = [-22.431174768380146, -46.82690373056951];

// Configuração dos ícones padrão do Leaflet
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const MapComponent: FC = () => {
  const mapStyle = {
    height: '400px',
    width: '100%', // Tornar o mapa responsivo
    maxWidth: '500px',
    margin: 'auto', // Centralizar
  };

  return (
    <MapContainer center={position} zoom={13} style={mapStyle}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={position}>
        <Popup>
          Você está aqui! <br /> Coordenadas: (-22.43117, -46.82690)
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;
