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
      style={{ backgroundColor: bgColor.match(/bg-\[(#[0-9a-fA-F]{6})\]/)?.[1] || 'defaultColor' }}
      onClick={handleClick}
    >
      <CardActionArea className="flex flex-col h-full">
        <CardContent className={`p-4 ${bgColor} flex-grow`}>
          <Typography
            className="font-semi-bold text-white"
            gutterBottom
            variant="h5"
            component="div"
            style={{ color: '#fff' }}
          >
            {title}
          </Typography>
          <Typography
            variant="body2"
            className="font-bold text-white"
            color="text.secondary"
            style={{ color: '#fff' }}
          >
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CardComponent;
