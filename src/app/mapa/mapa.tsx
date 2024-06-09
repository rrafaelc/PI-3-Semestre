'use client';

import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { FC } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

// Coordenadas para o centro do mapa
const position: [number, number] = [-22.431174768380146, -46.82690373056951];

// Remover ícones padrão do Leaflet para evitar erros de carregamento de imagens
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const MapComponent: FC = () => {
  // Ajuste o tamanho do mapa para ser responsivo
  const mapStyle = {
    height: '400px',
    width: '500px',
    margin: 'auto', // centralizar
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
