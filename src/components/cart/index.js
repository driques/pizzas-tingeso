import React from "react";
import {useContext} from "react";
import 'boxicons';
import './Cart.css';
import {DataContext} from "../../context/DataProvider";
import DrinksCarousel from "../misc/DrinksCarrousel";
import {Link} from "react-router-dom";

export const Cart = () => {
    //Se obtiene el contexto
    const value = useContext(DataContext);
    //
     const [cart,setCart] = value.cart;
    //Se obtiene el carrito
    const [nav,setNav] = value.nav;

    //Se obtiene el total del carrito
    const [total] = value.total;




    //Se crea una funcion para mostrar el carrito
    const toogleFalse = () => {
        setNav(false);
    }

    //Constantes que determinan si se muestra el carrito o no
    const showCart = nav ? "carts show" : "carts";
    const showItems = nav ? "cart show" : "cart";

    const addPizza = (id) =>{
        cart.forEach(item =>{
            if(item.id === id){
                item.quantity += 1;
            }
        })
        setCart([...cart])
    }

    const minusPizza = id => {
        cart.forEach(item =>{
            if(item.id === id){
                //Se disminuye la cantidad de pizzas
                item.quantity === 1 ? item.quantity = 1 : item.quantity -= 1;
            }
        })
        setCart([...cart]);
    }


    const remove = id =>{
        //El for recorre el carrito
        cart.forEach((item,index)=>{
            //Si el id del producto que se quiere eliminar es igual al id del producto que se está recorriendo
            if(item.id === id){
                //Se elimina el producto del carrito/
                //Splice elimina un elemento del array
                cart.splice(index,1)
            }
        })
        setCart([...cart])
    }

    return (
        <div className={showCart}>
            <div className={showItems}>
                <div className="cart__close" onClick={toogleFalse}>
                    <box-icon name='x'></box-icon>
                </div>
                <h2 className="cart__title">Mi carro</h2>
                <div className="cart__content">

                    { cart.length === 0 ? <div>
                            <h2 style={{textAlign:"center", fontSize:"5rem"}}>Carrito vacío</h2>
                        <box-icon name='sad' type='solid' color='#5c5656' size='10rem' animation = 'fade-right'></box-icon>

                        <div style={{
                            display:"flex",
                            justifyContent:"center",
                            alignItems:"center"

                        }}>
                            Pero puedes llenarlo con estas deliciosas pizzas! :)
                        </div>
                    </div>: <>
                        {
                        cart.map(product => (
                            <div className="cart__item" key={product.id}>
                                <div className="cart__item__img">
                                                    {/*    Se carga imagen de prubea*/}
                                                    <img src={product.image} alt="pizza" />
                                                </div>
                                                <div className="cart__item__info">
                                                    <h3>{product.title}</h3>
                                                    <p>{product.description}</p>
                                                    <p>$ {product.price}</p>
                                                </div>
                                                <div className="cart__item__quantity">
                                                    <div className="up">
                                                        <box-icon name='chevron-up' onClick={()=>addPizza(product.id)}></box-icon>
                                                    </div>
                                                    <p>{product.quantity}</p>

                                                    <div className="down">
                                                    <box-icon name='chevron-down' onClick={()=>minusPizza(product.id)}></box-icon>
                                                    </div>
                                                </div>
                                                <div className="cart__item__delete" onClick={()=>remove(product.id)}>
                                                    <box-icon name='trash' type='solid'></box-icon>
                                                </div>

                            </div>

                        ))

                    }

                    <div className="drinks">
                        {/*Titulo carousel*/}
                        <h2> ¿ Falta algo ?</h2>
                        <DrinksCarousel/>
                    </div>


                        <div className="cart__footer">
                        <div className="cart__footer__total">
                            <h3>Total</h3>
                            <p>$ {total}</p>
                            <Link to={"/buy"} className="cart__footer__button">
                            <button className="btn" onClick={toogleFalse}>Comprar</button>
                            </Link>
                        </div>
                    </div>




                        </>}



                </div>

            </div>
        </div>

    )
}