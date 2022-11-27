import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import PizzasTingeso from "./pages/PizzasTingeso";
import {Nav} from "react-bootstrap";
import Example from "./navigation/Navbar";

export default function PizzasApp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PizzasTingeso />}>
                </Route>
                <Route path="/test" element={<Nav />}>
                </Route>
                <Route path="/test2" element={<Example />}>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<PizzasApp />);