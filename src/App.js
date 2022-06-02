import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './pages/Home';
import Contato from './pages/Contato';
import Service from './pages/Services';

import Header from './components/Header';
import Footer from './components/Footer';
import './styles.css';

const Routes = () => {
  return (
    <BrowserRouter>

      <Header/>
      <Switch>
        <Route path= "/" exact={true} component={Home} />
        <Route path= "/service" component={Service} />
        <Route path= "/contato" component={Contato} />
      </Switch>
      <Footer />
    </BrowserRouter>
 
  );
}

export default Routes;
