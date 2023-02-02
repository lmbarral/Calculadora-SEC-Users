import React from "react";
import './Error.css';
import { FaExclamation } from 'react-icons/fa'

const Error = () => {
    
    return(
        <section id="error">
            <div className="Error-style">
                <div class="row align-items-center">
                    <div class="col-3 bg-transparent d-flex justify-content-center">
                        <div className="Error-image">
                            <div className="sign stack-top"><FaExclamation className="Exclamation" /></div>
                        </div>
                    </div>
                    <div class="col-9 bg-transparent">
                        <div className="text">
                            <p className="Error-text">Recordá que los siguientes campos deben completarse para realizar el cálculo deseado:</p>
                            <div className="req-list">
                                <div className="List">CATEGORÍA</div>
                                <div className="List">MES DE CÁLCULO</div>
                                <div className="List">AÑOS DE ANTIGÜEDAD</div>
                                <div className="List">JORNADA</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Error