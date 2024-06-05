export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-5">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-4">Bem-vindo ao nosso site</h1>
        <p className="text-lg text-gray-600">
          Estamos em construção, mas você pode acessar as seguintes páginas.
        </p>
      </div>
      <div className="bg-white shadow-lg rounded-lg p-5">
        <h2 className="text-2xl font-semibold mb-4">Páginas disponíveis</h2>
        <div className="flex flex-col gap-2">
          <a href="/login" className="text-blue-500 hover:underline text-lg">
            Login
          </a>
          <a href="/cadastrar-sensor" className="text-blue-500 hover:underline text-lg">
            Cadastrar Sensor
          </a>
          <a href="/sensores" className="text-blue-500 hover:underline text-lg">
            Listar Sensores
          </a>
        </div>
      </div>
    </main>
  );
}
