import React from "react";
import './SAC.css';

const SAC = ({handleClick3}) => {

    const handleSubmit = e => {
        e.preventDefault();
    }

    const handleErrase = () => {
    }

    const handleClosure = () => {
        handleClick3(false);
        handleErrase();
    }

    return(
        <section id="SAC">
            <div className="SAC-style">
                <div className="SAC-title">
                    <h2>Calculadora de Aguinaldo (SAC)</h2>
                </div>
                <div className="Selector">
                    <div class="d-grid gap-2">
                            <button class="btn btn-success" type="submit" onClick={handleSubmit}>Simular</button>
                        </div>
                        <div class="d-grid gap-2">
                            <button class="btn btn-danger" type="reset" onClick={handleErrase}>Borrar Calculadora</button>
                        </div>
                        <div class="d-grid gap-2">
                            <button class="btn btn-primary" type="reset" onClick={handleClosure}>Cerrar Calculadora</button>
                        </div>
                </div>
            </div>
        </section>
    );
}

export default SAC