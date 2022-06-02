import Loja from '../../img/loja.png'
import './styles.css'

const Home = () => {
    return(
        <main className="container-home">
            <img src={Loja} alt="Loja" />

            <div>
                <h1>Cantinho Natural</h1>
                <p> Toda linha de produtos naturais e orgânicos.</p>
                <p>Venha conferir nosso estoque em nosso site.</p>
                <p> Uma rede de mercados especializada em alimentação saudável.</p>
                <p> Referência em alimentação saudável. Em nossas lojas você encontra uma ampla linha de produtos naturais e suplementos, além de novidades cuidadosamente selecionadas. Qualidade e bom atendimento são a nossa missão!</p>
            </div>
      
        </main>
      
    )
}

export default Home;