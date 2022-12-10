import React, { useState, useEffect, createContext } from 'react';
import pizzaData from "./PizzaData.js";


//Con esto se crea el contexto
export const DataContext = createContext();

export const DataProvider = (props) => {

    //Es un estado que se va a encargar de manejar los productos
    //que se van a agregar al carrito, inicializa en falso porque
    //no hay productos en el carrito
    const [nav, setNav] = useState(false);
    const [pizzas, setPizzas] = useState([]);
    //Creamos un estado para manejar el carrito
    const [cart, setCart] = useState([]);

    //Se crea un estado para manejar el total del carrito
    //
    const [total, setTotal] = useState(0);

    //Se crea un estado para manejar los bebesitbles del carrito
    const [drinks, setDrinks] = useState([]);


    //Los datos se cargan desde el archivo PizzaData.js
    //Al momento de cargar la página, se cargan los datos de las pizzas
    useEffect(() => {
        const pizzasDatos = pizzaData.items
        setPizzas(pizzasDatos)
    }, []);

    const addCart = (id, alimento, jsonPerson) => {
        var check = true;
        //Se crea un nuevo array con los productos que ya estaban en el carrito
        //Every devuelve true si todos los elementos del array cumplen con la condición
        //Si el id del producto que se quiere agregar es igual al id de un producto que ya está en el carrito

         check = cart.every(item => {
            //Si el id del producto que se quiere agregar al carrito es igual al id del producto que ya está en el carrito
            return item.id !== id
        })

        console.log(check, "check");
        //Si el producto no está en el carrito
        if (check && alimento === "bebida"){
            const data = drinks.filter(drink => {
                return drink.id === id
            })

            setCart([...cart, ...data])
        }
        //Si el producto no está en el carrito, se agrega al carrito
        if(check && alimento === "pizza"){
            //Se filtran los productos que coincidan con el id del producto que se quiere agregar al carrito
            const data = pizzas.filter(pizza => {
                return pizza.id === id
            })
            console.log(data, "data de la pizza");
            //Se agrega el producto al carrito
            setCart([...cart, ...data])
        }
        if(alimento==="pizzaPersonalizada"){
            console.log("pizza personalizada");
            console.log(jsonPerson);
            const data = jsonPerson;
            setCart([...cart, ...data])
        }

        if(!check){
            alert("El producto ya está en el carrito")
        }
    }
    //UseEffect se ejecuta cada vez que se renderiza el componente
    //Este permite que el carrito se mantenga en el local storage
    useEffect(() => {
        const dataCart = JSON.parse(localStorage.getItem('dataCart'))
        console.log(dataCart, "dataCart")
        //Si hay productos en el carrito, se agregan al carrito
        if (dataCart){
            if (dataCart.length > 0){
                console.log("si hay data")
                console.log(dataCart, "dataCart")
                setCart(dataCart)
        }}
        }, [])

    //Este permite que el carrito se mantenga en el local storage
    useEffect(() => {
        localStorage.setItem('dataCart', JSON.stringify(cart))

    }, [cart])

    //Se crea un useEfect para mostrar total de productos en el carrito
    useEffect(() => {
        const getTotal = () => {
            const res = cart.reduce((prev, item) => {
                return prev + (item.price * item.quantity)
            }, 0)
            return res;
        }
        setTotal(getTotal())
    }, [cart])
    //Se crea un useEfect para cargar los bebidas disponibles en el carrito
    useEffect(() => {
        const drinksData = pizzaData.drinks
        setDrinks(drinksData)
    }, []);

    const myPizzas = {
        pizzas : [pizzas],
        nav : [nav, setNav],
        cart : [cart, setCart],
        addCart : addCart,
        total : [total, setTotal],
        drinks : [drinks]
    };
    return (
        <DataContext.Provider value={myPizzas}>
            {props.children}
        </DataContext.Provider>
    )
}