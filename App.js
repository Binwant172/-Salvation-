// import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Button from './Pages/Button';
import details from './Pages/Details';
import mainpage from './Pages/mainpage';
import start from './Pages/start';
import cards from './Pages/cards';
import Card from './components/card';
import { BrowserRouter, Route } from 'react-router-dom';


function App() {

  return (
    <BrowserRouter>
    <div className="App">
      
      {/* <Details /> */}
      <Route exact path="/" component={start} />
      <Route exact path="/" component={Button} />
      <Route path="/details" component={details} />
      <Route path="/mainpage" component={mainpage} />
      <Route path="/mainpage" component={cards} />
    </div>
    </BrowserRouter>
  );
}

export default App;
