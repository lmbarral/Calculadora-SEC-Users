import React from "react";
import { useState } from "react";
import './Calculator.css';

const Calculator = ({submitSearch, passState, pError, handleClick1}) => {

    const [category, setCategory] = useState("");
    const [month, setMonth] = useState("");
    const [ant, setAnt] = useState("");
    const [jornada, setJornada] = useState("");
    const os = 0.03;
    const [feriados, setFeriado] = useState("");
    const [vacaciones, setVacaciones] = useState("");
    const [extras50, setExtras50] = useState("");
    const [extras100, setExtras100] = useState("");
    const [base, setBase] = useState("");
    const [data, setData] = useState({});
    const [state, setState] = useState(false);
    const [error, setError] = useState(true);

    const handleSubmit = e => {
        e.preventDefault();
        if(!data || data === undefined) return;
        if(!category || !month || !ant || !jornada || category === "" || month === "" || ant === "" || jornada === "") {
            pError(error);
            return;
        }
        setError(false);
        pError(error);
        setData({category, month, ant, jornada, os, extras50, extras100, base, feriados, vacaciones});
        //console.log(data);
        submitSearch(data);
        if(state === true) return;
        setState(current => !current);
        passState(state);
    }

    const handleChange = () => {
        setData({category, month, ant, jornada, os, extras50, extras100, base, feriados, vacaciones});
    }

    const handleErrase = () => {
        if(category === "" || month === "" || ant === "" || jornada === "") return;
        setCategory("");
        setMonth("");
        setAnt("");
        setJornada("");
        setExtras50("");
        setExtras100("");
        setBase("");
        setFeriado("");
        setVacaciones("");
        if(data === "") return;
        setData("");
        setState(current => !current);
        passState(state);
        setError(false);
        pError(error);
        setError(current => !current);
    }

    const handleClosure = () => {
        handleClick1(false);
        handleErrase();
    }

    return(
        <section id="calculator">
            <div className="Calculator">
                <div className="Pre-Calculator-title">
                    <h2>CALCULADORA DE SUELDO SEC</h2>
                </div>
                <form onSubmit={handleSubmit}>
                    <div class="container text-center">
                        <div class="row">
                            <div class="col">
                                <h4>Categoría</h4>
                                <select
                                class="form-select text-center"
                                type="text"
                                name="Category"
                                required
                                autoFocus
                                value={category}
                                onChange={(e) => { setCategory(e.target.value); handleChange() }}>
                                    <option defaultValue={""}>Elegí una opción</option>
                                    <option value="11" >Maestranza A</option>
                                    <option value="12" >Maestranza B</option>
                                    <option value="13" >Maestranza C</option>
                                    <option value="21" >Administrativo A</option>
                                    <option value="22" >Administrativo B</option>
                                    <option value="23" >Administrativo C</option>
                                    <option value="24" >Administrativo D</option>
                                    <option value="25" >Administrativo E</option>
                                    <option value="26" >Administrativo F</option>
                                    <option value="31" >Cajeros A</option>
                                    <option value="32" >Cajeros B</option>
                                    <option value="33" >Cajeros C</option>
                                    <option value="41" >Auxiliar A</option>
                                    <option value="42" >Auxiliar B</option>
                                    <option value="43" >Auxiliar C</option>
                                    <option value="51" >Auxiliar Especializado A</option>
                                    <option value="52" >Auxiliar Especializado B</option>
                                    <option value="61" >Vendedor A</option>
                                    <option value="62" >Vendedor B</option>
                                    <option value="63" >Vendedor C</option>
                                    <option value="64" >Vendedor D</option>
                                </select>
                            </div>
                            <div class="col">
                                <h4>Mes de Cálculo</h4>
                                <select
                                class="form-select text-center"
                                type="text"
                                name="month"
                                //required
                                autoFocus
                                value={month}
                                onChange={(e) => { setMonth(e.target.value); handleChange() }}>
                                    <option defaultValue={""}>Elegí una opción</option>
                                    <option value="202304" >Abr.2023</option>
                                    <option value="202303" >Mar.2023</option>
                                    <option value="202302" >Feb.2023</option>
                                    <option value="202301" >Ene.2023</option>
                                    <option value="202212" >Dic.2022</option>
                                    <option value="202211">Nov.2022</option>
                                    <option value="202210" >Oct.2022</option>
                                    <option value="202209" >Sep.2022</option>
                                    <option value="202208" >Ago.2022</option>
                                    <option value="202207" >Jul.2022</option>
                                    <option value="202206" >Jun.2022</option>
                                    <option value="202205" >May.2022</option>
                                    <option value="202204" >Abr.2022</option>
                                </select>
                            </div>
                            <div class="col">
                                <h4>Años de Antigüedad</h4>
                                <select
                                class="form-select text-center"
                                type="number"
                                name="ant"
                                required
                                //autoFocus
                                value={ant}
                                onChange={(e) => { setAnt(e.target.value); handleChange() }}>
                                    <option defaultValue={""}>Elegí una opción</option>
                                    <option value="0.00">0</option>
                                    <option value="0.01">1</option>
                                    <option value="0.02">2</option>
                                    <option value="0.03">3</option>
                                    <option value="0.04">4</option>
                                    <option value="0.05">5</option>
                                    <option value="0.06">6</option>
                                    <option value="0.07">7</option>
                                    <option value="0.08">8</option>
                                    <option value="0.09">9</option>
                                    <option value="0.10">10</option>
                                    <option value="0.11">11</option>
                                    <option value="0.12">12</option>
                                    <option value="0.13">13</option>
                                    <option value="0.14">14</option>
                                    <option value="0.15">15</option>
                                    <option value="0.16">16</option>
                                    <option value="0.17">17</option>
                                    <option value="0.18">18</option>
                                    <option value="0.19">19</option>
                                    <option value="0.20">20</option>
                                    <option value="0.21">21</option>
                                    <option value="0.22">22</option>
                                    <option value="0.23">23</option>
                                    <option value="0.24">24</option>
                                    <option value="0.25">25</option>
                                    <option value="0.26">26</option>
                                    <option value="0.27">27</option>
                                    <option value="0.28">28</option>
                                    <option value="0.29">29</option>
                                    <option value="0.30">30</option>
                                    <option value="0.31">31</option>
                                    <option value="0.32">32</option>
                                    <option value="0.33">33</option>
                                    <option value="0.34">34</option>
                                    <option value="0.35">35</option>
                                    <option value="0.36">36</option>
                                    <option value="0.37">37</option>
                                    <option value="0.38">38</option>
                                    <option value="0.39">39</option>
                                    <option value="0.40">40</option>
                                    <option value="0.41">41</option>
                                    <option value="0.42">42</option>
                                    <option value="0.43">43</option>
                                    <option value="0.44">44</option>
                                    <option value="0.45">45</option>
                                    <option value="0.46">46</option>
                                    <option value="0.47">47</option>
                                    <option value="0.48">48</option>
                                    <option value="0.49">49</option>
                                    <option value="0.50">50</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="container text-center">
                        <div class="row">
                            <div class="col">
                                <h4>Jornada</h4>
                                <select
                                class="form-select text-center"
                                type="number"
                                name="jornada"
                                required
                                //autoFocus
                                value={jornada}
                                onChange={(e) => { setJornada(e.target.value); handleChange() }}>
                                    <option defaultValue={""}>Elegí una opción</option>
                                    <option value={4} >1/2 jornada (4hs)</option>
                                    <option value={5} >5 hs.</option>
                                    <option value={5.333} >2/3 Jornada</option>
                                    <option value={6} >6 hs.</option>
                                    <option value={8}>Jornada Completa (8hs)</option>
                                </select>
                            </div>
                            <div class="col">
                                <h4>Feriados Trabajados</h4>
                                <select
                                class="form-select text-center"
                                type="number"
                                name="feriados"
                                required
                                //autoFocus
                                value={feriados}
                                onChange={(e) => { setFeriado(e.target.value); handleChange() }}>
                                    <option defaultValue={""}>Elegí una opción</option>
                                    <option value={1} >1</option>
                                    <option value={2} >2</option>
                                    <option value={3} >3</option>
                                    <option value={4} >4</option>
                                    <option value={5}>5</option>
                                    <option value={6} >6</option>
                                    <option value={7} >7</option>
                                    <option value={8} >8</option>
                                    <option value={9} >9</option>
                                    <option value={10}>10</option>
                                </select>
                            </div>
                            <div class="col">
                                <h4>Días de Vacaciones</h4>
                                <select
                                class="form-select text-center"
                                type="number"
                                name="vacaciones"
                                required
                                //autoFocus
                                value={vacaciones}
                                onChange={(e) => { setVacaciones(e.target.value); handleChange() }}>
                                    <option defaultValue={""}>Elegí una opción</option>
                                    <option value={1} >1</option>
                                    <option value={2} >2</option>
                                    <option value={3} >3</option>
                                    <option value={4} >4</option>
                                    <option value={5}>5</option>
                                    <option value={6} >6</option>
                                    <option value={7} >7</option>
                                    <option value={8} >8</option>
                                    <option value={9} >9</option>
                                    <option value={10}>10</option>
                                    <option value={1} >11</option>
                                    <option value={2} >12</option>
                                    <option value={3} >13</option>
                                    <option value={4} >14</option>
                                    <option value={5}>15</option>
                                    <option value={6} >16</option>
                                    <option value={7} >17</option>
                                    <option value={8} >18</option>
                                    <option value={9} >19</option>
                                    <option value={10}>20</option>
                                    <option value={1} >21</option>
                                    <option value={2} >22</option>
                                    <option value={3} >23</option>
                                    <option value={4} >24</option>
                                    <option value={5}>25</option>
                                    <option value={6} >26</option>
                                    <option value={7} >27</option>
                                    <option value={8} >28</option>
                                    <option value={9} >29</option>
                                    <option value={10}>30</option>
                                    <option value={10}>30</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="container text-center">
                        <div class="row">
                            <div class="col">
                                <h4>Horas Extras al 50%</h4>
                                <input type="number"
                                class="form-control text-center"
                                id="extras50"
                                //autoFocus
                                placeholder="Cant. de Horas Extras"
                                value={extras50}
                                onChange={(e) => { setExtras50(e.target.value); handleChange() }}></input>
                            </div>
                            <div class="col">
                                <h4>Horas Extras al 100%</h4>
                                <input type="number"
                                class="form-control text-center"
                                id="extras100"
                                //autoFocus
                                placeholder="Cant. de Horas Extras"
                                value={extras100}
                                onChange={(e) => { setExtras100(e.target.value); handleChange() } }></input>
                            </div>
                        </div>
                    </div>
                    <div class="container text-center">
                        <div class="row">
                            <div class="col">
                                <h4>Sueldo Base</h4>
                                <input type="number" class="form-control text-center" id="base" placeholder="Ingresá tu sueldo base (Opcional)" onChange={(e) => { setBase(e.target.value); handleChange() }}></input>
                            </div>
                        </div>
                    </div>
                    <div class="d-grid gap-2">
                        <button class="btn btn-success" type="submit" onClick={handleChange}>Simular</button>
                    </div>
                    <div class="d-grid gap-2">
                        <button class="btn btn-danger" type="reset" onClick={handleErrase}>Borrar Calculadora</button>
                    </div>
                    <div class="d-grid gap-2">
                        <button class="btn btn-primary" type="reset" onClick={handleClosure}>Cerrar Calculadora</button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Calculator;