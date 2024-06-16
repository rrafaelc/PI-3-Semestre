'use client';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import * as React from 'react';

export default function FixedContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed>
        <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} />
      </Container>
    </React.Fragment>
  );
}
