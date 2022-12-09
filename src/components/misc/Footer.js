//Create a simple component called Footer

import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Footer.css";

function MyFooter(){
    return(
        <>
                <div className="footer">
                    <Row>
                        <Col>
                            <div className="logo__footer">
                                <img src="https://github.com/driques/pizzas-tingeso/blob/3ac587fef3d83c83c4ac432e5975a7878ecd90f4/src/img/logo.svg?raw=true"></img>
                            </div>
                            <h1 className="footer__title">
                                DIN Pizzas
                            </h1>
                            <h2 className="footer__subtitle">
                                ¡La mejor pizza de la ciudad!
                            </h2>

                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className="footer__info">
                                <h3 className="footer__info__title">
                                    Información
                                </h3>
                                <p className="footer__info__text">
                                    ¿Quienes somos?
                                </p>
                                <p className="footer__info__text">
                                    ¿Cómo funciona?
                                </p>
                                <p className="footer__info__text">
                                    ¿Dónde estamos?
                                </p>
                            </div>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <div className="footer__info">
                                <h3 className="footer__info__title">
                                   Siguenos
                                </h3>
                                <p className="footer__info__text">
                                    <box-icon type='logo' name='instagram' style = {

                                    { marginRight: "0.5em", position: "relative", top: "0.4em"}

                                    }></box-icon>
                                    Instagram
                                </p>
                                <p className="footer__info__text">
                                    <box-icon name='facebook-circle' type='logo' style = {

                                        { marginRight: "0.5em", position: "relative", top: "0.4em"}

                                    }></box-icon>
                                   Facebook
                                </p>
                                <p className="footer__info__text">
                                    <box-icon name='twitter' type='logo' style = {

                                        { marginRight: "1em", position: "relative", top: "0.4em"}

                                    }></box-icon>
                                    Twitter
                                </p>
                            </div>
                        </Col>
                    </Row>
                </div>
        </>
    );
}

export default function Footer(){
    return(
        <MyFooter/>
    );
}
