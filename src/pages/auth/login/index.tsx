import { GetServerSideProps } from 'next';

import Head from 'next/head';
import { FormLogin } from '../../../components/FormLogin';

export default function Login() {
  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <main>
        <div className='content'>
          <FormLogin />
        </div>
        <div className='img'></div>
      </main>
    </>
  );
}


export const getServerSideProps: GetServerSideProps = async () => {

  const product = {
    priceId: "1",
    amount: new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(1000 / 100),
  };

  return {
    props: {
      product,
    },
  };
};
