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
                                    className="slide"
                                    src="https://github.com/driques/pizzas-tingeso/blob/3ac587fef3d83c83c4ac432e5975a7878ecd90f4/src/img/slide-1.jpg?raw=true"
                                    alt="First slide"
                                />
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div className="carrouselItem">
                                <img
                                    className="slide"
                                    src="https://github.com/driques/pizzas-tingeso/blob/3ac587fef3d83c83c4ac432e5975a7878ecd90f4/src/img/slide-2.jpg?raw=true"
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