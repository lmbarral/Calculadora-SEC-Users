import React from "react";
import './ShowData.css';

const ShowData = ({neto}) => {

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

    return(
        <section id="ShowData">
            <div className="ShowData_Style">
                <div className="Recibo">
                    <div className="neto" class="col">
                        <h1>Total: ${new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'ARS' }).format(TOTAL)}</h1>
                    </div>
                </div>
                <div class="accordion" id="accordionPanelsStayOpenExample">
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                            <div class="container text-center">
                                <div className="NoRem" class="row">
                                    <div className="NoRem" class="col">
                                        Remunerativo:
                                    </div>
                                    <div className="NoRem" class="col">
                                        ${new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'ARS' }).format(SUM)}
                                    </div>
                                </div>
                            </div>
                        </button>
                        </h2>
                        <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                        <div class="accordion-body">
                            <div class="table-responsive">
                            <table class="table table-hover">
                                <tbody>
                                    <tr>
                                        <th scope="row">Jornada</th>
                                        <td>${new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'ARS' }).format(JOR)}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Antigüedad</th>
                                        <td>${new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'ARS' }).format(ANT)}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Presentismo</th>
                                        <td>${new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'ARS' }).format(PRES)}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Horas Extras al 50%</th>
                                        <td>${new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'ARS' }).format(EX50)}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Horas Extras al 100%</th>
                                        <td>${new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'ARS' }).format(EX100)}</td>
                                    </tr>
                                </tbody>
                                </table>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
                        <button class="accordion-button collapsed btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                            <div class="container text-center">
                                <div className="Desc" class="row">
                                    <div className="Desc" class="col">
                                        No Remunerativo:
                                    </div>
                                    <div className="Desc" class="col">
                                        ${new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'ARS' }).format(AUM)}
                                    </div>
                                </div>
                            </div>
                        </button>
                        </h2>
                        <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                        <div class="accordion-body">
                        <div class="container text-center">
                            <table class="table table-hover">
                                <tbody>
                                    <tr>
                                        <th scope="row">Aumento Acuerdo</th>
                                        <td>${new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'ARS' }).format(AUM)}</td>
                                    </tr>
                                </tbody>
                                </table>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="panelsStayOpen-headingThree">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                            <div class="container text-center">
                                <div className="Rem" class="row">
                                    <div className="Rem" class="col">
                                        Descuentos:
                                    </div>
                                    <div className="Rem" class="col">
                                        ${new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'ARS' }).format(RES)}
                                    </div>
                                </div>
                            </div>
                        </button>
                        </h2>
                        <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                        <div class="accordion-body">
                        <div class="table-responsive">
                            <table class="table table-hover">
                                <tbody>
                                    <tr>
                                        <th scope="row">Jubilación</th>
                                        <td>${new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'ARS' }).format(JUB)}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Ley 19032</th>
                                        <td>${new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'ARS' }).format(L19032)}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Descuento por Obra Social (3%)</th>
                                        <td>${new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'ARS' }).format(DOS)}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">OSECAC</th>
                                        <td>${new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'ARS' }).format(OSECAC)}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Sindicato Artículo 100</th>
                                        <td>${new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'ARS' }).format(ART0)}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">FAECYS</th>
                                        <td>${new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'ARS' }).format(FAECYS)}</td>
                                    </tr>
                                </tbody>
                                </table>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
            </div>
        </section>
    );
}

export default ShowData;