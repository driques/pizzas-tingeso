import React from "react";
import "./Buy.css";

export default function Buy(){
    return(
        <>
            <dv className = "navSpace">
            <br/>
                <br/>
                <br/>
                <br/>
                <br/>
            </dv>
            <div className="buyComponent">
                <form>
                        <div className="form-group col-md-6">
                            <label htmlFor="inputEmail4">Email</label>
                            <input type="email" className="form-control" id="inputEmail4" placeholder="Email">
                            </input>
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="inputPassword4">Contraseña</label>
                            <input type="password" className="form-control" id="inputPassword4" placeholder="Contraseña">
                            </input>
                        </div>

                    <div className="form-group col-md-6">
                        <label htmlFor="inputAddress">Dirección de entrega</label>
                        <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St">
                            </input>
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="inputAddress">Ingresa código tarjea</label>
                        <input type="text" className="form-control" id="inputAddress" placeholder="xxxx xxxx xxxx xxxx xxxx">
                        </input>
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="inputAddress">CVV</label>
                        <input type="text" className="form-control" id="inputAddress" placeholder="123">
                        </input>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="inputCity">Ciudad</label>
                            <input type="text" className="form-control" id="inputCity">
                            </input>
                        </div>
                    </div>
                    <button type="submit" className="btnBuy">Sign in</button>
                </form>

            </div>

        </>
    );


}