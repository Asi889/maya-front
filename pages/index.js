import Head from 'next/head';
import Test from '../components/Test';

export default function Home() {
  return (
    <>
      <Head>
        <title>עמוד הבית</title>
      </Head>
      <div>
        <Test />
      </div>
    </>
  );
}
