//Create a new component called Carrousel with bootstrap

import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Carrousel.css";


function MyCarrousel(){
    return (<>
            <Container>
                <div className="carrousel">
                <Row>
                    <Col>
                        <Carousel className="myCarousel">
                            <Carousel.Item>
                                <div className="carrouselItem">
                                <img
                                    className="d-block w-100"
                                    src="https://github.com/driques/pizzas-tingeso/blob/c2004df9ad502af192cec222d78180ac4eeaa407/src/img/pizza.jpg?raw=true"
                                    alt="First slide"
                                />
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div className="carrouselItem">
                                <img
                                    className="d-block w-100"
                                    src="https://github.com/driques/pizzas-tingeso/blob/c2004df9ad502af192cec222d78180ac4eeaa407/src/img/pizza.jpg?raw=true"
                                    alt="Second slide"
                                />
                                </div>
                            </Carousel.Item>

                        </Carousel>
                    </Col>
                </Row>
                </div>
            </Container>
        </>
    );
}

export default function Carrousel(){
    return(
            <MyCarrousel/>
    );
}