import { GetServerSideProps } from 'next';

import { Header } from '../components/Header';
import { Functionalities } from '../blocos/Functionalities';
import { Sales } from '../blocos/Sales';
import { Footer } from '../components/Footer';

import style from './home.module.scss';

import Head from 'next/head';

export default function Home({}) {
  return (
    <>
      <Head>
        <title>Início</title>
      </Head>
      <Header />
      <div className={style.container}>
        <img className={style.fundo} src="./img/fundo.png" alt="" />
        <div className={style.main}>
          <div className={style.box}>
            <div className={style.content}>
              <h1>Tenha o controle total de suas frotas na palma da mão.</h1>
              <p>
                Veja em tempo real as principais informações da sua frota. Tenha
                em suas mãos o controle total, realize filtros por período,
                fornecedor e muito mais.
              </p>
              <a href="#price">
                <button>ENTRE EM CONTATO</button>
              </a>
            </div>
          </div>
          <div className={style.box}>
            <img src="./img/celular-home.png" alt="" />
          </div>
        </div>
      </div>
      <Functionalities />
      <Sales />
      <Footer />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {},
  };
};
