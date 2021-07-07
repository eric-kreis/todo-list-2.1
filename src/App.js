import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import './styles/bootstrap.min.css'
import { GlobalStyle } from './styles/styledComponents'

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Switch>
        <Route exact path="/"><HomePage /></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
