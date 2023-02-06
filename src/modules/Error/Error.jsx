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
                            <p className="Error-text">Los campos CATEGORÍA, MES DE CÁLCULO, AÑOS DE ANTIGÜEDAD y JORNADA deben completarse para realizar el cálculo.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Error