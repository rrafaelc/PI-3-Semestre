'use client';

import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { FC, useEffect, useRef } from 'react';
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet';
import { useMap as useMapContext } from '../mapa/MapContext';

const initialPosition: [number, number] = [-22.431174768380146, -46.82690373056951];
const positions: [number, number][] = [
  [-22.430574, -46.827593], // Ponto 1
  [-22.429774, -46.825493], // Ponto 2
  [-22.431974, -46.828993], // Ponto 3
  [-22.432374, -46.826193], // Ponto 4
];

L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const MapComponent: FC = () => {
  const { markerPosition } = useMapContext();
  const mapRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (mapRef.current) {
      mapRef.current.setView(markerPosition, 16);
    }
  }, [markerPosition]);

  const mapStyle: React.CSSProperties = {
    height: '600px',
    width: '1400px',
    margin: 'auto',
  };

  const SetMapRef: FC = () => {
    const map = useMap();
    useEffect(() => {
      if (mapRef.current === null) {
        mapRef.current = map;
      }
    }, [map]);
    return null;
  };

  return (
    <MapContainer center={initialPosition} zoom={16} style={mapStyle}>
      <SetMapRef />
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {positions.map((position, index) => (
        <Marker key={index} position={position}>
          <Popup>
            Sensor {index + 1} <br /> Coordenadas: {position[0].toFixed(5)},{' '}
            {position[1].toFixed(5)}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapComponent;
