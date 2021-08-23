// import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Button from './Pages/Button';
import details from './Pages/Details';
import mainpage from './Pages/mainpage';
import start from './Pages/start';
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
    </div>
    </BrowserRouter>
  );
}

export default App;
