import Head from 'next/head';
import Header from './components/Header'; // Certifique-se de que este é o caminho correto

export default function Home() {
  return (
    <div>
      <Head>
        <title>Next.js App</title>
      </Head>
      <Header />
      <main>
        <div style={{ height: '200vh' }}></div>
      </main>
    </div>
  );
}
