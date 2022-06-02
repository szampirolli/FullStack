import Imagem1 from '../../img/imagem1.jpg';
import Imagem2 from '../../img/imagem2.jpg';
import Imagem3 from '../../img/imagem3.jpg';
import Imagem4 from '../../img/imagem4.jpg';
import './styles.css' 

const Services = ()=> {
    return(
        <div className='container-service' >
            <main>
                <h1>Produtos em Promoção</h1>
                <div>
                    <img src={Imagem1} alt="Pagamento"/>
                </div>
                <div>
                    <img src={Imagem2} alt="Produto"/>
                </div>
                <div>
                    <img src={Imagem3} alt="Pagamento"/>
                </div>
                <div>
                    <img src={Imagem4} alt="Produto"/>
                </div>
                <section class="video-prop">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/wqMrzE9XPrk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </section>
 
            </main>
          
        </div>
    )
} 

export default Services;