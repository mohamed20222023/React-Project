import './App.css';
import Contact from './components/Concat/index';
import NavBar from './components/NavBar/index';
import Index from './components/index/index';


import {BrowserRouter , Route} from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Route exact path = "/home" component = {Index}/>
      <Route path = "/contact" component = {Contact}/>
    </BrowserRouter>
    
    
  );
}

export default App;
