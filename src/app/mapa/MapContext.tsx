'use client';
import React, { ReactNode, createContext, useContext, useState } from 'react';

interface MapContextProps {
  markerPosition: [number, number];
  setMarkerPosition: (position: [number, number]) => void;
}

const MapContext = createContext<MapContextProps | undefined>(undefined);

export const MapProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [markerPosition, setMarkerPosition] = useState<[number, number]>([
    -22.431174768380146, -46.82690373056951,
  ]);

  return (
    <MapContext.Provider value={{ markerPosition, setMarkerPosition }}>
      {children}
    </MapContext.Provider>
  );
};

export const useMap = () => {
  const context = useContext(MapContext);
  if (!context) {
    throw new Error('useMap must be used within a MapProvider');
  }
  return context;
};
