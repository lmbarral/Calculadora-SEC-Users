import React, { useRef, useState } from "react";
import './ShowData.css';
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";


const ShowData = ({neto}) => {

    
    const componentRef = useRef();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [user, setUser] = useState({});

    //console.log(neto)

    if(!neto) return;
    const TOTAL = neto.TOTAL;
    const AUM = neto.AUM || false;
    const ANT = neto.ANT || false;
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
    const NDOS = neto.NDOS || false;
    const NFAECYS = neto.NFAECYS || false;
    const NART0 = neto.NART0 || false;
    const NRES = neto.NRES || false;
    const ant = neto.ant;
    const jornada = neto.jornada;
    const os = neto.os;
    const extras50 = neto.extras50;
    const extras100 = neto.extras100;
    const m = neto.m;
    const fer = neto.feriadosM;
    const vac = neto.vacacionesM;
    const CAT = neto.category;
    const AGUI =  neto.AGUI;
    const agui = neto.agui;
    const month = neto.month;
    const adEmpresaM = neto.adEmpresaM || false;

    const antFixed = (ant*100).toFixed(0);
    
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

    const ANTG = () => {

        return(
            <tr>
                <th scope="row" className="Col-left">Antigüedad</th>
                    <td>{antFixed}%</td>
                    <td>${new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'ARS' }).format(ANT)}</td>
                    <td>-</td>
                    <td>-</td>
            </tr>
        );
    }

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

    const ADEMPRESA = () => {

        return(
            <tr>
                <th scope="row" className="Col-left">Adicional Empresa</th>
                    <td>-</td>
                    <td>${new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'ARS' }).format(adEmpresaM)}</td>
                    <td>-</td>
                    <td>-</td>
            </tr>
        );
    }

    const FERIADOS = () => {

        return(
            <tr>
                <th scope="row" className="Col-left">Feriados</th>
                    <td>{fer}</td>
                    <td>${new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'ARS' }).format(FER)}</td>
                    <td>-</td>
                    <td>-</td>
            </tr>
        );
    }

    const EXTRAS50 = () => {

        return(
            <tr>
                <th scope="row" className="Col-left">Horas Extras al 50%</th>
                    <td>{extras50}</td>
                    <td>${new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'ARS' }).format(EX50)}</td>
                    <td>-</td>
                    <td>-</td>
            </tr>
        );
    }

    const EXTRAS100 = () => {

        return(
            <tr>
                <th scope="row" className="Col-left">Horas Extras al 100%</th>
                    <td>{extras100}</td>
                    <td>${new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'ARS' }).format(EX100)}</td>
                    <td>-</td>
                    <td>-</td>
            </tr>
        );
    }

    const VACACIONES = () => {
                            
        return(
            <tr>
                <th scope="row" className="Col-left">Vacaciones</th>
                    <td>{vac}</td>
                    <td>${new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'ARS' }).format(VAC)}</td>
                    <td>-</td>
                    <td>-</td>
            </tr>
        );
    }

    const ACUERDO = () => {

        return(
            <tr>
                <th scope="row" className="Col-left">Aumento Acuerdo</th>
                    <td>{m*100}%</td>
                    <td>-</td>
                    <td>${new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'ARS' }).format(AUM)}</td>
                    <td>-</td>
            </tr>
        );
    }

    const EXOS = () => {

        return(
            <tr>
                <th scope="row" className="Col-left">Extraordinario Obra Social</th>
                <td>3%</td>
                <td>-</td>
                <td>-</td>
                <td>${new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'ARS' }).format(NDOS)}</td>
            </tr>
        );
    }

    const EXSEC = () => {

        return(
            <tr>
                <th scope="row" className="Col-left">Extraordinario S.E.C.</th>
                <td>2%</td>
                <td>-</td>
                <td>-</td>
                <td>${new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'ARS' }).format(NART0)}</td>
            </tr>
        );
    }

    const EXFAECYS = () => {

        return(
            <tr>
                <th scope="row" className="Col-left">Extraordinario F.A.E.C.Y.S.</th>
                <td>0,5%</td>
                <td>-</td>
                <td>-</td>
                <td>${new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'ARS' }).format(NFAECYS)}</td>
            </tr>
        );
    }

    const handleExport = () => {
        const pdf = new jsPDF("p", "mm", "a4");
        
        if(name === "" || email === "") return;
        setUser({name, email});

        autoTable(pdf, {
            html: '#recibo',
            theme:'grid',
            headStyles: {
                fillColor: '#004c97'
            },
            columnStyles:{
                1: {halign: "center"},
                2: {halign: "center"},
                3: {halign: "center"},
                4: {halign: "center"},
                5: {halign: "center"}
            },
            bodyStyles: {
                textColor: '#004c97'
            },
            footStyles: {
                halign: "center"
            }
        });
        pdf.save(`Recibo-SEC_${CATEGORÍAS[CAT]}_${month}`);
        //let pdfOutput = pdf.output();
        //console.log(pdfOutput)
    };

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
                                    ANTIGÜEDAD: {antFixed} AÑO/S
                                    <br />
                                    JORNADA: {jornada} Horas
                                </th>
                            </tr>
                            <tr>
                                <th scope="col" className="First-col" key={1}>HABERES</th>
                                <th scope="col" className="Second-col" key={2}>UNIDADES</th>
                                <th scope="col" className="Third-col" key={3}>REMUNERATIVOS</th>
                                <th scope="col" className="Fourth-col" key={4}>NO REMUNERATIVOS</th>
                                <th scope="col" className="Fourth-col" key={5}>DEDUCCIONES</th>
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
                            <>
                                {ant && <ANTG />}
                            </>
                            <>
                                {fer && <FERIADOS />}
                            </>
                            <>
                                {extras50 && <EXTRAS50 />}
                            </>
                            <>
                                {extras100 && <EXTRAS100 />}
                            </>
                            <>
                                {agui && <SAC />}
                            </>
                            <>
                                {adEmpresaM && <ADEMPRESA />}
                            </>
                            <tr>
                                <th scope="row" className="Col-left">Presentismo</th>
                                    <td>8,33%</td>
                                    <td>${new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'ARS' }).format(PRES)}</td>
                                    <td>-</td>
                                    <td>-</td>
                            </tr>
                            <>
                                {vac && <VACACIONES />}
                            </>
                            <>
                                {AUM && <ACUERDO />}
                            </>
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
                            <>
                                {NDOS && <EXOS />}
                            </>
                            <>
                                {NART0 && <EXSEC />}
                            </>
                            <>
                                {NFAECYS && <EXFAECYS />}
                            </>
                            <tr className="Spacer"><th colSpan={5} key={"spacer"}></th></tr>
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
                        <tfoot>
                            <tr>
                                <th colSpan={5} className="Footer">
                                    La presente liquidación no es real y se imprime al sólo efecto de orientar sobre la misma. Cada caso puede ser revisado puntualmente enviando la documentación a gremiales@sec.org.ar.
                                </th>
                            </tr>
                        </tfoot>
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
                                <input
                                    type="name"
                                    class="form-control"
                                    id="exampleInputPassword1"
                                    required
                                    onChange={(e) => { setName(e.target.value) }}
                                />
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Dirección de Correo Electrónico</label>
                                <input
                                    type={"email"}
                                    class="form-control"
                                    id="exampleInputEmail1"
                                    required
                                    onChange={(e) => { setEmail(e.target.value) }}
                                />
                                <div id="emailHelp" class="form-text">Jamás compartiremos este correo con terceros.</div>
                            </div>
                        </form>
                        <button class="btn" className="btn-config" type="submit" onClick={handleExport}>Imprimir Simulación</button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ShowData;