
import FormContato from '../../components/FormContato';
import style from './styles.module.scss'


const Sales = () => {
  return (
    <>
      <div className={style.container} >
        <div className={style.bg}>
          <img src="./img/fundo.png" alt="" />
        </div>
        <div className={style.content}>
          <header>
            <h3>Contrate conforme sua necessidade</h3>
            <p>Escolha o plano ideal para sua empresa.</p>
          </header>
          <div className={style.box}>
            <div>
              <header>
                <span>Mensal</span>
                <div>
                  <span>R$</span>
                  <h3>9,90</h3>
                  <span>/ user / mês</span>
                </div>
                <span>Pago mensalmente</span>
              </header>
              <main>
                <span>Usúario ilimitado</span>
                <span>Exportação de relatórios</span>
                <span>Exportação de relatórios</span>
                <span>Exportação de relatórios</span>
                <span>Exportação de relatórios</span>
              </main>
              <footer>
                <button>Experimente Grátis</button>
                <span>(*) Valor p/ até</span>
              </footer>
            </div>
            <div>
              <header>
                <span>Mensal</span>
                <div>
                  <span>R$</span>
                  <h3>9,90</h3>
                  <span>/ user / mês</span>
                </div>
                <span>Pago mensalmente</span>
              </header>
              <main>
                <span>Usúario ilimitado</span>
                <span>Exportação de relatórios</span>
                <span>Exportação de relatórios</span>
                <span>Exportação de relatórios</span>
                <span>Exportação de relatórios</span>
              </main>
              <footer>
                <button>Experimente Grátis</button>
                <span>(*) Valor p/ até</span>
              </footer>
            </div>
            <div>
              <header>
                <span>Mensal</span>
                <div>
                  <span>R$</span>
                  <h3>9,90</h3>
                  <span>/ user / mês</span>
                </div>
                <span>Pago mensalmente</span>
              </header>
              <main>
                <span>Usúario ilimitado</span>
                <span>Exportação de relatórios</span>
                <span>Exportação de relatórios</span>
                <span>Exportação de relatórios</span>
                <span>Exportação de relatórios</span>
              </main>
              <footer>
                <button>Experimente Grátis</button>
                <span>(*) Valor p/ até</span>
              </footer>
            </div>
          </div>
        </div>
        <FormContato />
      </div>
    </>
  );
}

export { Sales }