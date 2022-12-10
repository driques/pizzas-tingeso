import React,{useContext} from "react";
import {Link} from "react-router-dom";
import IMG from "../../img/Pizza-Boxes.jpg";
import {DataContext} from "../../context/DataProvider";
import "boxicons";

import "./Drinks.css";
export const DrinkItem = ({ id,  title, description, price, image}) =>{
    const value = useContext(DataContext);
    const addCart = value.addCart;


    return (

        <div className="itemDrink">
            {/*Se agrega una pizza a los productos*/}
            <a href="#">
                <img src={image} alt="pizza" className="pizzaImg" />
            </a>

            <div className="pizzaInfo">
                <h1 className="pizza__name">{title}</h1>
                <p className="pizza__description">{description}</p>
                <p className="pizza__price">$ {price}</p>
            </div>

            <div className="toCart">
                <div className="myBtn" onClick={()=>addCart(id,"bebida")}>
                    Añadir
                    <box-icon name="plus-circle"></box-icon>
                </div>
            </div>



        </div>
    )



}
