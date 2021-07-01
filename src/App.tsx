import { BrowserRouter, Route } from 'react-router-dom'; 
import { Login } from './pages/Login'
import { Andares } from './pages/Andares' 
import { Andar } from './pages/Andar'
function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Login}></Route>
      <Route path="/andares" exact component={Andares}></Route>
      <Route path="/andar" exact component={Andar}></Route>
    </BrowserRouter>
  );
}

export default App;
