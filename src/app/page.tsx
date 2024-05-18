import Head from 'next/head';
import Header from './components/Header';

const Home: React.FC = () => {
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
};

export default Home;
