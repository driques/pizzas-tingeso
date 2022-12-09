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
                            <h1>Footer</h1>
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
