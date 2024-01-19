import React, { useState } from "react";
import "./PreCalculator.css"

const PreCalculator = ({handleClick1, handleClick2, handleClick3}) => {

    const state1 = true;
    const state2 = true;
    const state3 = true;

    const onClick1 = () => {
        handleClick1(state1);
        //console.log(state1)
    }

    const onClick2 = () => {
        handleClick2(state2);
        //console.log(state2)
    }

    const onClick3 = () => {
        handleClick3(state3);
    }

    return(
        <section id="precalculator">
            <div className="PreCalcStyle">
                <img src="https://comunicacionsec.com/media/images/sec_calculadora_img_mesa_de_trabajo_1.png" alt="Banner Calculadora SEC" className="banner" />
                <h1 className="PreCalc">CALCULADORA SEC</h1>
                <div className="container separador"></div>
                <div className="row Body">
                    <p>¡Les presentamos la calculadora de sueldo SEC! Una herramienta de consulta orientativa a través de la cual podrás calcular si tu sueldo se encuentra dentro de los parámetros estipulados por el Convenio Colectivo de Trabajo N°130/75.</p>
                    <p>Para que la calculadora arroje un resultado promedio lo más exacto posible, es requisito indispensable completar todos los campos obligatorios. Estos son:</p>
                    <div className="campos">
                        <div className="cat">CATEGORÍA</div>
                        <div className="mes">MES DE CÁLCULO</div>
                        <div className="ant">AÑOS DE ANTIGÜEDAD</div>
                        <div className="jor">JORNADA</div>
                    </div>
                </div>
                <div className="Selector">
                    <div class="d-grid gap-2">
                        <button class="btn" className="btn-config" type="submit" onClick={onClick1}>Calculadora de Sueldo</button>
                    </div>
                    <div class="d-grid gap-2">
                        <button class="btn" className="btn-config" type="submit" onClick={onClick2}>Calculadora de Horas Extras</button>
                    </div>
                    <div class="d-grid gap-2">
                        <button class="btn" className="btn-config" type="submit" onClick={onClick3}>Calculadora de Aguinaldo</button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default PreCalculator