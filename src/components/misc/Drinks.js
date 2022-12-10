import React, {useState,useContext} from "react";
import "./Drinks.css"

import {DrinkItem} from "./DrinkItem";
import {DataContext} from "../../context/DataProvider";


export default function Drinks(){
    const value = useContext(DataContext);
    const [drinks] = value.drinks;

    return(
        <>
            <div className="drink__page">
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <h1 className="drink__title">Bebidas y Salsas</h1>
                <div className="drinks__grid">
                    {
                        drinks.map(pizza => (
                            <DrinkItem key={pizza.id}
                                       id = {pizza.id}
                                       title = {pizza.title}
                                       description = {pizza.description}
                                       price = {pizza.price}
                                       image = {pizza.image}/>

                        ))
                    }
                </div>


                {/*<div className="drinks__grid">*/}
                {/*    {*/}
                {/*        drinks.map(drink => (*/}
                {/*            <div className="drink__item" key={drink.id}>*/}
                {/*            <DrinkItem key={drink.id}*/}
                {/*                       id = {drink.id}*/}
                {/*                       title = {drink.title}*/}
                {/*                       description = {drink.description}*/}
                {/*                       price = {drink.price}*/}
                {/*                       image = {drink.image}/>*/}

                {/*                <div className="drink-info">*/}
                {/*                    <h3>{drink.title}</h3>*/}
                {/*                    <p>$ {drink.price}</p>*/}
                {/*                    /!*    Agregar al carrito*!/*/}
                {/*                    <button className="btn" onClick={()=>addCart(drink.id,"bebida")}>Agregar</button>*/}
                {/*                </div>*/}

                {/*            </div>*/}


                {/*        ))*/}

                {/*    }*/}

                {/*</div>*/}
            </div>
            </>
    );
}
