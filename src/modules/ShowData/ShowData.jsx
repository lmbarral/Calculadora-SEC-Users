import React, { useRef } from "react";
import './ShowData.css';
import ReactToPrint from "react-to-print";


const ShowData = ({neto}) => {

    
    const componentRef = useRef();

    //console.log(neto)

    if(!neto) return;
    const TOTAL = neto.TOTAL;
    const AUM = neto.AUM;
    const ANT = neto.ANT;
    const EX50 = neto.EX50;
    const EX100 = neto.EX100;
    const PRES = neto.PRES;
    const SUM = neto.SUM;
    const JOR = neto.JOR;
    const JUB = neto.JUB;
    const L19032 = neto.L19032;
    const DOS = neto.DOS;
    const OSECAC = neto.OSECAC;
    const ART0 = neto.ART0;
    const FAECYS = neto.FAECYS;
    const RES = neto.RES;
    const FER = neto.FER;
    const VAC = neto.VAC;
    const NDOS = neto.NDOS;
    const NFAECYS = neto.NFAECYS;
    const NART0 = neto.NART0;
    const NRES = neto.NRES;
    const ant = neto.ant;
    const jornada = neto.jornada;
    const os = neto.os;
    const extras50 = neto.extras50;
    const extras100 = neto.extras100;
    const m = neto.m;
    const fer = neto.feriados;
    const vac = neto.vacaciones;
    const CAT = neto.category;
    const AGUI =  neto.AGUI;
    const agui = neto.agui;
    const month = neto.month;

    //console.log(agui)
    
    const CATEGORÍAS = {
        "11": "Maestranza A",
        "12": "Maestranza B",
        "13": "Maestranza C",
        "21": "Administrativo A",
        "22": "Administrativo B",
        "23": "Administrativo C",
        "24": "Administrativo D",
        "25": "Administrativo E",
        "26": "Administrativo F",
        "31": "Cajeros A",
        "32": "Cajeros B",
        "33": "Cajeros C",
        "41": "Auxiliar A",
        "42": "Auxiliar B",
        "43": "Auxiliar C",
        "51": "Auxiliar Especializado A",
        "52": "Auxiliar Especializado B",
        "61": "Vendedor A",
        "62": "Vendedor B",
        "63": "Vendedor C",
        "64": "Vendedor D",
    };

    const SAC = () => {

        return(
            <tr>
                <th scope="row" className="Col-left">Aguinaldo (SAC)</th>
                    <td>-</td>
                    <td>${new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'ARS' }).format(AGUI)}</td>
                    <td>-</td>
                    <td>-</td>
            </tr>
        );
    }

    return(
        <section id="ShowData">
            <div className="ShowData_Style">
                <div className="Recibo">
                    <div className="neto">
                        <h1 className="neto">Total: ${new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'ARS' }).format(TOTAL)}</h1>
                    </div>
                </div>
                <div className="table-responsive" ref={componentRef}>
                    <table class="table table-bordered" id="recibo">
                        <thead>
                            <tr>
                                <th colSpan={5} className="Title">
                                    CATEGORÍA: {CATEGORÍAS[CAT]}
                                    <br />
                                    ANTIGÜEDAD: {ant*100} AÑO/S
                                    <br />
                                    JORNADA: {6*jornada} Horas
                                </th>
                            </tr>
                            <tr>
                                <th scope="col" className="First-col">HABERES</th>
                                <th scope="col" className="Second-col">UNIDADES</th>
                                <th scope="col" className="Third-col">REMUNERATIVOS</th>
                                <th scope="col" className="Fourth-col">NO REMUNERATIVOS</th>
                                <th scope="col" className="Fourth-col">DEDUCCIONES</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row" className="Col-left">Sueldo Base</th>
                                    <td>-</td>
                                    <td>${new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'ARS' }).format(JOR)}</td>
                                    <td>-</td>
                                    <td>-</td>
                            </tr>
                            <tr>
                                <th scope="row" className="Col-left">Antigüedad</th>
                                    <td>{ant*100}%</td>
                                    <td>${new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'ARS' }).format(ANT)}</td>
                                    <td>-</td>
                                    <td>-</td>
                            </tr>
                            <tr>
                                <th scope="row" className="Col-left">Feriados</th>
                                    <td>{fer}</td>
                                    <td>${new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'ARS' }).format(FER)}</td>
                                    <td>-</td>
                                    <td>-</td>
                            </tr>
                            <tr>
                                <th scope="row" className="Col-left">Horas Extras al 50%</th>
                                    <td>{extras50}</td>
                                    <td>${new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'ARS' }).format(EX50)}</td>
                                    <td>-</td>
                                    <td>-</td>
                            </tr>
                            <tr>
                                <th scope="row" className="Col-left">Horas Extras al 100%</th>
                                    <td>{extras100}</td>
                                    <td>${new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'ARS' }).format(EX100)}</td>
                                    <td>-</td>
                                    <td>-</td>
                            </tr>
                            <>
                                {agui && <SAC/>}
                            </>
                            <tr>
                                <th scope="row" className="Col-left">Presentismo</th>
                                    <td>8,33%</td>
                                    <td>${new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'ARS' }).format(PRES)}</td>
                                    <td>-</td>
                                    <td>-</td>
                            </tr>
                            <tr>
                                <th scope="row" className="Col-left">Vacaciones</th>
                                    <td>{vac}</td>
                                    <td>${new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'ARS' }).format(VAC)}</td>
                                    <td>-</td>
                                    <td>-</td>
                            </tr>
                            <tr>
                                <th scope="row" className="Col-left">Aumento Acuerdo</th>
                                    <td>{m*100}%</td>
                                    <td>-</td>
                                    <td>${new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'ARS' }).format(AUM)}</td>
                                    <td>-</td>
                            </tr>
                            <tr>
                                <th scope="row" className="Col-left">Jubilación</th>
                                    <td>11%</td>
                                    <td>-</td>
                                    <td>-</td>
                                    <td>${new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'ARS' }).format(JUB)}</td>
                            </tr>
                            <tr>
                                <th scope="row" className="Col-left">Ley 19.032</th>
                                    <td>3%</td>
                                    <td>-</td>
                                    <td>-</td>
                                    <td>${new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'ARS' }).format(L19032)}</td>
                            </tr>
                            <tr>
                                <th scope="row" className="Col-left">Aporte Obra Social</th>
                                <td>{os * 100}%</td>
                                <td>-</td>
                                <td>-</td>
                                <td>${new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'ARS' }).format(DOS)}</td>
                            </tr>
                            <tr>
                                <th scope="row" className="Col-left">Aporte Solidario O.S.E.C.A.C.</th>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>${new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'ARS' }).format(OSECAC)}</td>
                            </tr>
                            <tr>
                                <th scope="row" className="Col-left">S.E.C.</th>
                                <td>2%</td>
                                <td>-</td>
                                <td>-</td>
                                <td>${new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'ARS' }).format(ART0)}</td>
                            </tr>
                            <tr>
                                <th scope="row" className="Col-left">F.A.E.C.Y.S.</th>
                                <td>0,5%</td>
                                <td>-</td>
                                <td>-</td>
                                <td>${new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'ARS' }).format(FAECYS)}</td>
                            </tr>
                            <tr>
                                <th scope="row" className="Col-left">Extraordinario Obra Social</th>
                                <td>3%</td>
                                <td>-</td>
                                <td>-</td>
                                <td>${new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'ARS' }).format(NDOS)}</td>
                            </tr>
                            <tr>
                                <th scope="row" className="Col-left">Extraordinario S.E.C.</th>
                                <td>2%</td>
                                <td>-</td>
                                <td>-</td>
                                <td>${new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'ARS' }).format(NART0)}</td>
                            </tr>
                            <tr>
                                <th scope="row" className="Col-left">Extraordinario F.A.E.C.Y.S.</th>
                                <td>0,5%</td>
                                <td>-</td>
                                <td>-</td>
                                <td>${new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'ARS' }).format(NFAECYS)}</td>
                            </tr>
                            <tr className="Spacer"><th colSpan={5}></th></tr>
                            <tr>
                                <th scope="row" colSpan={2}>Totales Parciales</th>
                                <td>${new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'ARS' }).format(SUM + AGUI)}</td>
                                <td>${new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'ARS' }).format(AUM)}</td>
                                <td>${new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'ARS' }).format(RES + NRES)}</td>
                            </tr>
                            <tr>
                                <th scope="row" colSpan={4}>Sueldo Neto</th>
                                <td>${new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'ARS' }).format(TOTAL)}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="Selector">
                    <div class="d-grid gap-2">
                        <div className="Selector-style">
                            <h3>¿Querés imprimir la simulación?</h3>
                            <h2>¡Completá el formulario y nosotros te lo enviamos!</h2>
                        </div>
                        <form>
                            <div class="mb-3">
                                <label class="form-label">Nombre</label>
                                <input type="name" class="form-control" id="exampleInputPassword1" />
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Dirección de Correo Electrónico</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                <div id="emailHelp" class="form-text">Jamás compartiremos este correo con terceros.</div>
                            </div>
                        </form>
                        <ReactToPrint
                            trigger={() => <button class="btn" className="btn-config">Imprimir Simulación</button>}
                            content={() => componentRef.current}
                            documentTitle={`Simulación-Recibo-SEC_${CATEGORÍAS[CAT]}_${month}`}
                            pageStyle={"margin-right: .1rem; margin-left: .1rem;"}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ShowData;

//<button class="btn" className="btn-config" type="submit" onClick={handlePrint}>Imprimir Simulación</button>