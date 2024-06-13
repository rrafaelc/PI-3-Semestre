'use client';
import { Card, CardActionArea, CardContent, Typography } from '@mui/material';
import React from 'react';
import { useMap } from '../mapa/MapContext';

interface CardComponentProps {
  title: string;
  description: string;
  bgColor: string;
  markerPosition: [number, number];
}

const CardComponent: React.FC<CardComponentProps> = ({
  title,
  description,
  bgColor,
  markerPosition,
}) => {
  const { setMarkerPosition } = useMap();

  const handleClick = () => {
    setMarkerPosition(markerPosition);
  };

  return (
    <Card
      sx={{ maxWidth: 345 }}
      className="m-2 flex flex-col justify-between"
      onClick={handleClick}
    >
      <CardActionArea className="flex flex-col h-full">
        <CardContent className={`p-4 ${bgColor} flex-grow`}>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CardComponent;
