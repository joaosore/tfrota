import style from './styles.module.scss'

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
              <li>Home</li>
              <li>Funcionalidades</li>
              <li>Preço</li>
            </ul>
          </div>
          <button>
            ENTRE EM CONTATO
          </button>
        </div>
      </header>
    </>
  );
}

export { Header }