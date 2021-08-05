import { BrowserRouter, Route } from 'react-router-dom';
import { Login } from './pages/Login'
import { Andares } from './pages/Andares'
import { Andar } from './pages/Andar'
import { AreaDeTrabalho } from './components/AreaDeTrabalho'
import { Titulo } from './components/Titulo'
import "./styles/globals.scss"

function App() {
  return (
    <BrowserRouter>
      <AreaDeTrabalho>
        <Titulo />
        <main className="main-content">
          <Route path="/" exact component={Login}></Route>
          <Route path="/andares" exact component={Andares}></Route>
          <Route path="/andar" exact component={Andar}></Route>
        </main>
      </AreaDeTrabalho>
    </BrowserRouter>
  );
}

export default App;
