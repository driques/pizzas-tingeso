//Create a new component called Carrousel with bootstrap

import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./DrinksCarousel.css";
import {useContext} from "react";
import {DataContext} from "../../context/DataProvider";

function Drinks(){
    const value = useContext(DataContext);
    const [drinks] = value.drinks;
    console.log(drinks);
    const addCart = value.addCart;

    return (<>
            <Container className="MyDrinks">
                <div className="carousel">
                    <Row>
                        <Col>
                            <Carousel >
                                {drinks.map((drink,index) => (

                                <Carousel.Item className="item">
                                    <img
                                        className="drink-image"
                                        src = {drink.image}
                                        alt="Second slide"
                                    />
                                    <div className="drink-info">
                                        <h3>{drink.title}</h3>
                                        <p>$ {drink.price}</p>
                                    {/*    Agregar al carrito*/}
                                        <button className="btn" onClick={()=>addCart(drink.id,"bebida")}>Agregar</button>
                                    </div>
                                    <br/>

                                </Carousel.Item>
                                ))}

                            </Carousel>
                        </Col>
                    </Row>
                </div>
            </Container>
        </>
    );
}

export default function DrinksCarousel(){
    return(
        <Drinks/>
    );
}