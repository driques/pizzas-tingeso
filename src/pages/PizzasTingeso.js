import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './PizzasTingeso.css';


function PizzasTingeso() {
    return (<>
            <Navbar className="navbar-custom">
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            src="https://github.com/driques/pizzas-tingeso/blob/0aef1bec18e03ee01085bfacb65103dc768ceec6/src/img/logo.svg?raw=true"
                            width="70"
                            height="70"
                            className="d-inline-block align-mid"
                            alt="Pizzas Tingeso"
                        />
                    </Navbar.Brand>

                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            <a href="#login">
                                <i className="bi bi-basket2 " style={
                                    {fontSize: "2em", color: "white"}
                                }></i>
                            </a>


                        </Navbar.Text>
                    </Navbar.Collapse>

                </Container>
            </Navbar>
        </>

    );
}

export default PizzasTingeso