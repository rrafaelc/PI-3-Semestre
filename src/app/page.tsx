import dynamic from 'next/dynamic';
import React from 'react';
import CardComponent from './components/CardComponent';
import { MapProvider } from './mapa/MapContext';
const MapComponent = dynamic(() => import('./mapa/mapa'), { ssr: false });

const Home: React.FC = () => {
  return (
    <MapProvider>
      <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-5">
        <div className="bg-gray-100 p-4 rounded-lg shadow-md">
          <h1 className="text-center text-2xl font-bold my-4">Mapa</h1>
          <h2 className="text-center text-1xl font-bold my-4">Cidade de Itapira</h2>
          <MapComponent />
        </div>
        <br></br>

        <div className="flex flex-wrap justify-center">
          <CardComponent
            title="Bom"
            description="A qualidade do ar é considerada satisfatória e a poluição atmosférica representa pouco ou nenhum risco"
            bgColor="bg-[#009966]"
            markerPosition={[-22.430574, -46.827593]}
          />
          <CardComponent
            title="Moderado"
            description="	A qualidade do ar é aceitável; no entanto, para alguns poluentes, pode haver um problema moderado de saúde para um número muito pequeno de pessoas que são invulgarmente sensíveis à poluição atmosférica."
            bgColor="bg-[#C9BE6D]"
            markerPosition={[-22.429774, -46.825493]}
          />
          <CardComponent
            title="Não saudável para grupos sensíveis"
            description="Membros de grupos sensíveis podem sofrer efeitos na saúde. O público em geral provavelmente não será afetado."
            bgColor="bg-[#FF9933]"
            markerPosition={[-22.431974, -46.828993]}
          />
          <CardComponent
            title="Pouco saudável"
            description="Todos podem começar a sentir efeitos na saúde; membros de grupos sensíveis podem sofrer efeitos mais graves para a saúde"
            bgColor="bg-[#CC0033]"
            markerPosition={[-22.432374, -46.826193]}
          />
        </div>
      </main>
    </MapProvider>
  );
};

export default Home;
