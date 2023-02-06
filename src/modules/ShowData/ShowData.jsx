import React from "react";
import './ShowData.css';

const ShowData = ({neto}) => {

    //console.log(neto)

    if(!neto) return;
    const TOTAL = neto.TOTAL || 0;
    const AUM = neto.AUM || 0;
    const ANT = neto.ANT || 0;
    const EX50 = neto.EX50 || 0;
    const EX100 = neto.EX100 || 0;
    const PRES = neto.PRES || 0;
    const SUM = neto.SUM || 0;
    const JOR = neto.JOR || 0;
    const JUB = neto.JUB || 0;
    const L19032 = neto.L19032 || 0;
    const DOS = neto.DOS || 0;
    const OSECAC = neto.OSECAC|| 0;
    const ART0 = neto.ART0 || 0;
    const FAECYS = neto.FAECYS || 0;
    const RES = neto.RES || 0;
    const FER = neto.FER || 0;
    const VAC = neto.VAC || 0;
    const NDOS = neto.NDOS || 0;
    const NFAECYS = neto.NFAECYS || 0;
    const NART0 = neto.NART0 || 0;
    const NRES = neto.NRES || 0;
    const ant = neto.ant || 0;
    const jornada = neto.jornada || 0;
    const os = neto.os || 0;
    const extras50 = neto.extras50 || 0;
    const extras100 = neto.extras100 || 0;
    const m = neto.m || 0;
    const fer = neto.feriados || 0;
    const vac = neto.vacaciones || 0;
    const CAT = neto.category || 0;
    const AGUI =  neto.AGUI || 0;
    const agui = neto.agui;

    console.log(agui)
    
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
                <th scope="row" className="Col-left">Sueldo Anual Complementario</th>
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
                <div className="table-responsive">
                    <table class="table table-bordered">
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
                                <td>${new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'ARS' }).format(SUM)}</td>
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
                        <button class="btn" className="btn-config" type="submit">Imprimir Simulación</button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ShowData;