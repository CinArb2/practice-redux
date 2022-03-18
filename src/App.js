import { Routes, Route } from "react-router-dom";
import Home from "./pagina/Home";
import About from './pagina/About'
import Contact from './pagina/Contact'
import './App.css';
import NotFound from "./pagina/NotFound";
import Header from "./components/Header";
import ProductDetail from "./pagina/ProductDetail";
import Carrito from "./pagina/Carrito";
import { Provider } from 'react-redux'
import store from "./Redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header/>
        <Routes>
            <Route path="/" element={ <Home/> } />
            <Route path="/About" element={ <About/> } />
            <Route path="/Contact" element={ <Contact/> } />
            <Route path="/Carrito" element={ <Carrito/> } />
            <Route path="/Product/:id" element={ <ProductDetail/> } />
            <Route path="*" element={ <NotFound/> } />
        </Routes>
      </div>
    </Provider>  
  ); 
}

export default App;
