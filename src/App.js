import logo from './logo.svg';
import './App.css';
import React from 'react';
import {DataProvider} from "./context/DataProvider";
import { Routes, Route } from "react-router-dom";
import PizzasTingeso from "./pages/PizzasTingeso";
import {Cart} from "./components/cart";
import MakePizza from "./components/pizzas/MakePizza";
import NewNav from "./components/misc/Navbar";

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


              </Routes>
          </div>
    </DataProvider>
  );
}

export default App;
