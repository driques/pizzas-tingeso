import Container from "react-bootstrap/Container";
import "./MakePizza.css";
import React, {useContext, useState} from "react";
import {DataContext} from "../../context/DataProvider";


export default function MakePizza() {
    const [ingredients, setIngredients] = useState([]);
    const value = useContext(DataContext);
    const addCart = value.addCart;

    function deleteIngredient(id) {
        console.log("deleteIngredient", id);
        setIngredients(ingredients.filter((ingredient) => ingredient !== id));
    }

    function addIngredient(ingredient,tipo) {
        console.log(ingredient);
        console.log(ingredients);
        if (ingredients.includes(tipo +" : "+(ingredient))) {
        alert("Ya agregaste este ingrediente");
        return;
        }
        else {
        setIngredients([...ingredients, tipo +" : "+(ingredient)]);
            }
    }

    function stringToJSON(ingredients){

        var json = [];
        var ingredientesPerzonalizados="";
        var obj = {};
        for (var i = 0; i < ingredients.length; i++) {
            var split = ingredients[i].split(" : ");
            ingredientesPerzonalizados = ingredientesPerzonalizados + split[1] + ", ";
        }
        obj["id"] = Math.floor(Math.random() * 1000+200);
        obj["title"] = "Pizza personalizada";
        obj["description"] = ingredientesPerzonalizados;
        obj["price"] = ingredients.length * 1000;
        obj["image"] = "https://images.telepizza.com/vol/cl/images/content/productos/p5qe_c.png";
        obj["quantity"] = 1;
        json.push(obj);
        console.log(json[0], "<-  json");
        return json;
    }



    return(
        <>
            <Container className="makePizza">
                    <div >
                        <div className="makePizzaContainer">
                            <h1>Elige tus ingredientes</h1>
                            <div className="makePizzaItem">

                                <h2>Carnes</h2>
                                <select value={ingredients} onChange={(event)=>addIngredient(event.target.value,"carne")} >
                                    <option >Carne normal</option>
                                    <option >Carne mechada </option>
                                    <option >Pepperoni</option>
                                    <option >Salchicha</option>
                                    <option >Jamón</option>
                                    <option >Pollo</option>
                                    <option >Tocino</option>
                                </select>
                            </div>
                            <div className="makePizzaItem">
                                <h2>Vegetales</h2>
                                <select value={ingredients} onChange={(event)=>addIngredient(event.target.value,"vegetal")} >
                                    <option>Aceitunas</option>

                                    <option>Choclo</option>

                                    <option>Piña</option>
                                    <option >Cebolla</option>
                                    <option >Pimientos</option>
                                    <option >Tomate</option>

                                    <option>Champiñones</option>


                                </select>
                            </div>


                            <div className="makePizzaItem">
                                <h2>Tipo Queso</h2>
                                <select value={ingredients} onChange={(event)=>addIngredient(event.target.value,"queso")} >
                                    <option >Queso Gauda</option>
                                    <option >Queso Mozzarella</option>
                                </select>
                            </div>

                            <div className="makePizzaItem">
                                <h2>Cantidad Queso</h2>
                                <select value={ingredients} onChange={(event)=>addIngredient(event.target.value,"cantidadQueso")} >
                                    <option >Normal</option>
                                    <option >Extra</option>
                                    <option >Doble</option>
                                </select>
                            </div>


                            <div className="makePizzaItem">
                                <h2>Tipo Masa</h2>
                                <select value={ingredients} onChange={(event)=>addIngredient(event.target.value,"tipoMasa")} >
                                    <option >Normal</option>
                                    <option >Delgada</option>
                                </select>
                            </div>

                            <div className="makePizzaItem">
                                <h2>Tamaño Pizza</h2>
                                <select value={ingredients} onChange={(event)=>addIngredient(event.target.value,"tamanio")} >
                                    <option >Familiar</option>
                                    <option >Mediana</option>
                                    <option >Individual</option>
                                </select>
                            </div>
                        </div>
                </div>

                <div className="actualPizza">
                    <div className="actualPizzaContainer">

                        <div className="myPizza">

                            <h1>Actual Pizza</h1>
                            <h2>Carne</h2>
                            {ingredients.map((ingredient) => (
                                <div className="actualPizzaItem">
                                {/*    Pregunta si existe la palabra vegetal, si es asi lo muestra*/}
                                    {ingredient.includes("carne") && <p>
                                        <div className="actualPizzaItem">
                                    <div className="addPizza">
                                            {ingredient.split("carne :")}
                                            <box-icon name='trash' type='solid' color='red' className="trash"
                                             onClick={() => deleteIngredient(ingredient)}></box-icon>

                                    </div>


                                        </div>
                                    </p>
                                    }
                                </div>
                            ))}


                            <h2>Vegetales</h2>
                            {ingredients.map((ingredient) => (
                                <div className="actualPizzaItem">
                                    {/*    Pregunta si existe la palabra carne, si es asi lo muestra*/}
                                    {ingredient.includes("vegetal") && <p>
                                        <div className="actualPizzaItem">
                                            <div className="addPizza">
                                                {ingredient.split("vegetal :")}
                                                <box-icon name='trash' type='solid' color='red' className="trash"
                                                          onClick={() => deleteIngredient(ingredient)}></box-icon>

                                            </div>
                                        </div>
                                    </p>
                                    }
                                </div>
                            ))}


                            <h2>Queso</h2>
                            {ingredients.map((ingredient) => (
                                <div className="actualPizzaItem">
                                    {/*    Pregunta si existe la palabra queso, si es asi lo muestra*/}
                                    {ingredient.includes("queso") && <p>
                                        <div className="actualPizzaItem">
                                            <div className="addPizza">
                                                {ingredient.split("queso :")}
                                                <box-icon name='trash' type='solid' color='red' className="trash"
                                                          onClick={() => deleteIngredient(ingredient)}></box-icon>

                                            </div>
                                        </div>
                                    </p>
                                    }
                                </div>
                            ))}



                            <h2>Cantidad Queso</h2>
                            {ingredients.map((ingredient) => (
                                <div className="actualPizzaItem">
                                    {/*    Pregunta si existe la palabra cantidadQueso, si es asi lo muestra*/}
                                    {ingredient.includes("cantidadQueso") && <p>
                                        <div className="actualPizzaItem">
                                            <div className="addPizza">
                                                {ingredient.split("cantidadQueso :")}
                                                <box-icon name='trash' type='solid' color='red' className="trash"
                                                          onClick={() => deleteIngredient(ingredient)}></box-icon>

                                            </div>
                                        </div>
                                    </p>
                                    }
                                </div>
                            ))}

                            <h2>Tipo masa</h2>
                            {ingredients.map((ingredient) => (
                                <div className="actualPizzaItem">
                                    {/*    Pregunta si existe la palabra tipoMasa, si es asi lo muestra*/}
                                    {ingredient.includes("tipoMasa") && <p>
                                        <div className="actualPizzaItem">
                                            <div className="addPizza">
                                                {ingredient.split("tipoMasa :")}
                                                <box-icon name='trash' type='solid' color='red' className="trash"
                                                          onClick={() => deleteIngredient(ingredient)}></box-icon>

                                            </div>
                                        </div>
                                    </p>
                                    }
                                </div>
                            ))}


                            <h2>Tamaño</h2>
                            {ingredients.map((ingredient) => (
                                <div className="actualPizzaItem">
                                    {/*    Pregunta si existe la palabra tamanio, si es asi lo muestra*/}
                                    {ingredient.includes("tamanio") && <p>
                                        <div className="actualPizzaItem">
                                            <div className="addPizza">
                                                {ingredient.split("tamanio :")}
                                                <box-icon name='trash' type='solid' color='red' className="trash"
                                                          onClick={() => deleteIngredient(ingredient)}></box-icon>

                                            </div>
                                        </div>
                                    </p>
                                    }
                                </div>
                            ))}

                        </div>
                    </div>
                    <div className="totalPrice">
                        <h1>Total</h1>
                        <h2>$ {ingredients.length*1000}</h2>
                    {/*    Boton de compra*/}
                        <button className="buyButton" onClick={()=>addCart(stringToJSON(ingredients)[0].id,"pizzaPersonalizada",stringToJSON(ingredients))}>Comprar</button>


                    </div>
                </div>
            </Container>

        </>

    );
}
