import { BrowserRouter, Route } from 'react-router-dom'; 
import { Login } from './pages/Login'
import { Andares } from './pages/Andares' 
import { Andar } from './pages/Andar'
import { AreaDeTrabalho } from './components/AreaDeTrabalho'
import { Titulo } from './components/Titulo'
import "./styles/globals.scss"

function App() {
  return (
    <AreaDeTrabalho>
      <Titulo />
      <BrowserRouter>
        <Route path="/" exact component={Login}></Route>
        <Route path="/andares" exact component={Andares}></Route>
        <Route path="/andar" exact component={Andar}></Route>      
      </BrowserRouter>
    </AreaDeTrabalho>
  );
}

export default App;
