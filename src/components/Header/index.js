import { Link } from "react-router-dom";
import './styles.css'
import Logo from '../../img/logo.png';

const Header = () => {
    return (
       <main className="container-main">
           <img src={Logo} alt="Logo" />
           <h1>Cantinho Natural</h1>

            <ul>
                <li><Link to="/">Principal</Link></li>
                <li><Link to="/service">Produtos</Link></li>
                <li><Link to="/contato">Contato</Link></li>
            </ul>

       </main>
    )
}

export default Header;