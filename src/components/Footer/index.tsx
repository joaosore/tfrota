import style from './styles.module.scss'

const Footer = () => {
  return (
    <>
      <footer className={style.container}>
        <div>
          <span>© 2022 Copyright TFROTA - JOHNNYDEV. Direitos reservados.</span>
          <span>Feito por JohnnyDev</span>
        </div>
      </footer>
    </>
  );
}

export { Footer }