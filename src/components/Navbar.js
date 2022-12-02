//Create a new component called Navbar

import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

function MyNav(){
    return (<>
            <Navbar className="navbar-custom">
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            src="https://github.com/driques/pizzas-tingeso/blob/a147bc593ecc5bdd6f46746b02ef33c68c7b4b93/src/img/logo.svg?raw=true"
                            width="70"
                            height="70"
                            className="d-inline-block align-mid"
                            alt="Pizzas Tingeso"
                        />
                    </Navbar.Brand>

                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            <a href="src/components/Navbar#car">
                                <i className="bi bi-basket2 " style={
                                    {fontSize: "2em", color: "white", marginRight: "1em"}
                                }>

                                    <span className="badge rounded-pill bg-danger" > 0</span></i>
                            </a>


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