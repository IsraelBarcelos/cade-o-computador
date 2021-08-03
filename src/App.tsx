import { BrowserRouter, Route } from 'react-router-dom';
import { Login } from './pages/Login'
import { Andares } from './pages/Andares'
import { Andar } from './pages/Andar'
import { AreaDeTrabalho } from './components/AreaDeTrabalho'
import { OrangeBox } from './components/OrangeBox'
import { Titulo } from './components/Titulo'
import { Aside } from './components/Aside'
import "./styles/globals.scss"
import computadores from "./assets/images/computers.svg"

function App() {
  return (
    <AreaDeTrabalho>
      <Titulo />
      <main className="main-content">
        <Aside>
          <img src={computadores} alt="Computaores" />
        </Aside>
        <OrangeBox>
          <BrowserRouter>
            <Route path="/" exact component={Login}></Route>
            <Route path="/andares" exact component={Andares}></Route>
            <Route path="/andar" exact component={Andar}></Route>
          </BrowserRouter>
        </OrangeBox>
      </main>
    </AreaDeTrabalho>
  );
}

export default App;
