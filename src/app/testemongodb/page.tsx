import { getSensorData } from '@/_actions/sensorDataActions';

export default async function Teste() {
  const { data, errMsg } = await getSensorData();

  if (errMsg) return <h1>Ocorreu um erro: {errMsg}</h1>;

  return (
    <main className="flex flex-col items-center justify-center my-20 gap-5">
      {data &&
        data.map((item) => (
          <div key={item._id}>
            <p>ID: {item._id}</p>
            <p>Sensor ID: {item.sensor_id}</p>
            <p>Latitude: {item.latitude}</p>
            <p>Longitude: {item.longitude}</p>
            <p>Nível: {item.level}</p>
          </div>
        ))}
    </main>
  );
}
