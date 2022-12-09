
import './PizzasTingeso.css';
import NewNav from "../components/misc/Navbar";
import Carrousel from "../components/misc/Carrousel";
import Footer from "../components/misc/Footer";
import {PizzasList} from "../components/pizzas/PizzasList";
import Map from "../components/misc/Map";

function PizzasTingeso() {
    return(
        <>
             <Carrousel/>
                <br/>
                <br/>
                <PizzasList/>
                <Footer/>


        </>
    );
}

export default PizzasTingeso