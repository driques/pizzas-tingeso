import Container from 'react-bootstrap/Container';
import './PizzasTingeso.css';
import NewNav from "../components/Navbar";
import Carrousel from "../components/Carrousel";
function PizzasTingeso() {
    return(
        <>
            <NewNav/>
            <Container>
                <h1> Pizzas Tingeso </h1>
            </Container>
            <Carrousel/>
        </>
    );
}

export default PizzasTingeso