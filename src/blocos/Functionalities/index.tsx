
import style from './styles.module.scss'

const Functionalities = () => {
  return (
    <>
      <div className={style.container} >
        <div className={style.content}>
          <h6>Funcionalidades</h6>
          <h2>Acesso on-line rápido e simples</h2>
          <p>Acesse do seu celular ou computador não perca mais tempo montando relatórios</p>
        </div>
        <div className={style.content}>
          <div className={style.card}>
            <img src="./img/15954951721529652579.png" alt="" />
            <span>Relatório em tempo real</span>
            <p>Lista de consumo dos veículos. Filtro por período. Totalmente integrado via API.</p>
          </div>
          <div className={style.card}>
            <img src="./img/Caminho 37.png" alt="" />
            <span>Atualização automática</span>
            <p>Atualização em tempo real de todos  Veículos, Motoristas e Alertas</p>
          </div>
          <div className={style.card}>
            <img src="./img/4776566291595452484.png" alt="" />
            <span>Tome decisões mais rápidas</span>
            <p>Receba alertas de toda sua frota e de seus motoristas</p>
          </div>
        </div>
      </div>
    </>
  );
}

export { Functionalities }