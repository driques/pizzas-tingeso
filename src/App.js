import logo from './logo.svg';
import './App.css';
import React from 'react';
import {DataProvider} from "./context/DataProvider";
import { Routes, Route } from "react-router-dom";
import PizzasTingeso from "./pages/PizzasTingeso";
import {Cart} from "./components/cart";
import MakePizza from "./components/pizzas/MakePizza";
import NewNav from "./components/misc/Navbar";
import Map from "./components/misc/Map";
import Drinks from "./components/misc/Drinks";
import Footer from "./components/misc/Footer";
import Buy from "./components/misc/Buy";
function App() {
  return (
      <DataProvider>
          <div className="App">
              {/*Se agrega la nav para que se pueda utilizar en todas las paginas*/}
              <NewNav/>
              <Cart/>
              <Routes>
                  <Route path="/" element={<PizzasTingeso />} exact />
                  <Route path="/makepizza" element={<MakePizza />} />
                    <Route path="/map" element={<Map />} />
                  <Route path="/drinks" element={<Drinks />} />
                  <Route path={"/buy"} element={<Buy/>}/>
                  <Route path="*" element={<h1>404 Not Found</h1>} />
              </Routes>
              <Footer/>
          </div>
    </DataProvider>
  );
}

export default App;
