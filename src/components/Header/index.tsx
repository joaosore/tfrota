import style from './styles.module.scss';

const Header = () => {
  return (
    <>
      <header className={style.header}>
        <div className={style.content}>
          <div className={style.logo}>
            <img src="./img/logo-white.svg" alt="" />
          </div>
          <div className={style.nav}>
            <ul>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#funcionalidades">Funcionalidades</a>
              </li>
              <li>
                <a href="#price">Preço</a>
              </li>
            </ul>
          </div>
          <a href="#price">
            <button>ENTRE EM CONTATO</button>
          </a>
        </div>
      </header>
    </>
  );
};

export { Header };
