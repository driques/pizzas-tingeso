import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import PizzasTingeso from "./pages/PizzasTingeso";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function PizzasApp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PizzasTingeso />}>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<PizzasApp />);