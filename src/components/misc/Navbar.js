//Create a new component called Navbar
import React, {useContext} from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import "./Navbar.css";
import {DataContext} from "../../context/DataProvider";
import {Link} from "react-router-dom";


function MyNav(){

    const value = useContext(DataContext);
    const [nav,setNav] = value.nav;
    const [cart] = value.cart;

    const toogleCart = () => {
        setNav(!nav);
    }
    return (<>
            <Navbar className="navbar-custom fixed-top">
                <Container>
                    {/*Hacemos uso de link para evitar el doble render y trabajar la pagina como un spa*/}
                    <Link to={"/"} className="navbar-brand">
                    <Navbar.Brand >
                        <img
                            src="https://github.com/driques/pizzas-tingeso/blob/a147bc593ecc5bdd6f46746b02ef33c68c7b4b93/src/img/logo.svg?raw=true"
                            width="70"
                            height="70"
                            className="d-inline-block align-mid"
                            alt="Pizzas Tingeso"
                        />
                    </Navbar.Brand>
                        </Link>

                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            <button className="cartButton" onClick={toogleCart}>
                                <i className="bi bi-basket2 " style={
                                    {fontSize: "2em", color: "white", marginRight: "1em" , position: "relative", top: "0.2em"}
                                }>

                                    <span className="badge rounded-pill bg-danger" > {cart.length}</span></i>
                            </button>
                        </Navbar.Text>
                        <Navbar.Text>

                            <Link to={"/"} style={{textDecoration:'none', color:"white"}}>
                            <div className="navButtons">
                                <box-icon name='food-menu' type='solid' style = {
                                    {fontSize: "1em", fill: "white", marginRight: "0.5em", position: "relative", top: "0.4em"}
                                }></box-icon>
                                Menú
                            </div>
                            </Link>

                        </Navbar.Text>
                        <Navbar.Text>

                            <Link to={"/map"} style={{textDecoration:'none', color:"white"}}>
                            <div className="navButtons">

                                <box-icon name='store-alt' type='solid' style = {
                                    {fontSize: "1em", fill: "white", marginRight: "0.5em", position: "relative", top: "0.4em"}
                                }></box-icon>
                                Sucursales


                            </div>

                            </Link>
                        </Navbar.Text>

                        <Navbar.Text >
                            <Link to={"/makepizza"} style={{textDecoration:'none'}}>
                            <div className="navButtons" >
                                <box-icon name='pizza' type='solid' style = {
                                    {fontSize: "1em", fill: "white", marginRight: "0.5em", position: "relative", top: "0.4em"}
                                }></box-icon>
                               Arma tu pizza
                            </div>
                            </Link>

                        </Navbar.Text>

                    </Navbar.Collapse>

                </Container>
            </Navbar>
        </>

    );

}

export default function NewNav(){

    return(
            <MyNav/>
    );



}