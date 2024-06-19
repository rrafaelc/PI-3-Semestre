'use client';

import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { FC, useEffect, useRef } from 'react';
import { MapContainer, Marker, Popup, TileLayer, ZoomControl, useMap } from 'react-leaflet';
import { useMap as useMapContext } from '../mapa/MapContext';

const initialPosition: [number, number] = [-22.431174768380146, -46.82690373056951];
const positions: [number, number][] = [
  [-22.43143038689599, -46.84176915850736], // Ponto 1
  [-22.44799180863187, -46.81355212422708], // Ponto 2
  [-22.425983468260394, -46.81750961305043], // Ponto 3
  [-22.43991561667506, -46.821210340935], // Ponto 4
];

const iconUrls = [
  'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-red.png',
  'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-green.png',
  'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-blue.png',
];

const icons = iconUrls.map(
  (url) =>
    new L.Icon({
      iconUrl: url,
      iconRetinaUrl: url,
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
      shadowSize: [41, 41],
    }),
);

const MapComponent: FC = () => {
  const { markerPosition } = useMapContext();
  const mapRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (mapRef.current) {
      mapRef.current.setView(markerPosition, 15);
    }
  }, [markerPosition]);

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
    <div className="h-[70vh] w-[80vw] max-w-screen-lg mx-auto sm:h-[60vh] sm:w-[70vw] xs:h-[50vh] xs:w-[90vw]">
      <MapContainer
        center={initialPosition}
        zoom={15}
        className="h-full w-full"
        zoomControl={false}
      >
        <ZoomControl position="bottomright" />
        <SetMapRef />
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {positions.map((position, index) => (
          <Marker key={index} position={position} icon={icons[index % icons.length]}>
            <Popup>
              <h3 className="text-lg font-bold">Sensor {index + 1}</h3>
              <p>
                Coordenadas: {position[0].toFixed(5)}, {position[1].toFixed(5)}
              </p>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default MapComponent;
