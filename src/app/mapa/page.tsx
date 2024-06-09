// pages/index.tsx
import Head from 'next/head';
import MapComponent from './mapa';

export default function Mapa() {
  return (
    <>
      <Head>
        <title>Leaflet Map with Next.js</title>
        <meta name="description" content="Integrating Leaflet map in Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>Página mapa</div>
      <MapComponent />
    </>
  );
}
