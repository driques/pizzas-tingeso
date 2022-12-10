import React, {useContext, useState} from 'react';
import IMG from '../../img/Pizza-Boxes.jpg';
import './PizzasList.css';
import {DataContext} from "../../context/DataProvider";
import {PizzaItem} from "./PizzaItem";

export const PizzasList = () => {
    const value = useContext(DataContext);
    const [pizzas] = value.pizzas;

    console.log(pizzas);

    return (
        <>
            <h1 className="title">Nuestras Pizzas</h1>
            <div className="pizzas">
                {
                    pizzas.map(pizza => (
                        <PizzaItem key={pizza.id}
                                   id = {pizza.id}
                                   title = {pizza.title}
                                   description = {pizza.description}
                                   price = {pizza.price}
                                   image = {pizza.image}/>

                    ))
                }
            </div>




        </>

    )

}