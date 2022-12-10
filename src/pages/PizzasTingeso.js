
import './PizzasTingeso.css';
import Carrousel from "../components/misc/Carrousel";
import {PizzasList} from "../components/pizzas/PizzasList";

function PizzasTingeso() {
    return(
        <>
             <Carrousel/>
                <br/>
                <br/>
                <PizzasList/>
        </>
    );
}

export default PizzasTingeso