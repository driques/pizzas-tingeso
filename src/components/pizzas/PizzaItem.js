import React,{useContext} from "react";
import {DataContext} from "../../context/DataProvider";
import "boxicons";

export const PizzaItem = ({ id,  title, description, price, image}) =>{
    const value = useContext(DataContext);
    const addCart = value.addCart;

    function alertBootstrap() {
        console.log("Agregado al carrito");
       return(
           <div className="alert alert-primary" role="alert">
               Se ha agregado al carrito!
           </div>
       );
    }

    return (

    <div className="pizza">
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

            <div className="myBtn" onClick={()=>{addCart(id,"pizza");alertBootstrap()}}>
                Añadir
                <box-icon name="plus-circle"></box-icon>
            </div>
        </div>
        
    </div>
    )



}
