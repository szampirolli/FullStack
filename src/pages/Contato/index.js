import Loja from '../../img/loja.png'
import './styles.css'

const contato = ()=> {
    return(
        <main className="container-contato">
        <img src={Loja} alt="Loja" />

        <div>
            <h1>Cantinho Natural</h1>
            <p> Aberto de segunda-feira a sábado</p>
            <p>Horário de funcionamento das 09:00 às 18:00</p>
            <p> Telefone de contato 2222-2222 ou whatsApp 99999-9999</p>
            
        </div>
  
    </main>
    )
}

export default contato;

