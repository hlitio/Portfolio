import React from "react"
import henry1 from "../img/portada-proyecto-henry1.jpg"
import henry2 from "../img/portada-proyecto-henry2.jpg"
import henry3 from "../img/portada-proyecto-henry3.jpg"


function Portafolio_2(){
    return(
        <section id="portfolio">
        <h3 className="titulo-seccion">Mis Proyectos Bootcamp</h3>
        <div className="fila">
            <div className="proyecto">
                <div className="overlay"></div>
                <img src={henry1} alt=""/>
                <div class="info">
                    <h4>Proyecto Individual</h4>
                    <p>13/02/2023 - 03/03/2023</p>
                </div>
            </div>
            <div className="proyecto">
                <div className="overlay"></div>
                <img src={henry2}  alt=""/>
                <div className="info">
                    <h4>Proyecto Grupal</h4>
                    <p>06/03/2023</p>
                </div>
            </div>
            <div className="proyecto">
                <div className="overlay"></div>
                <img src={henry3} alt=""/>
                <div className="info">
                    <h4>Proyecto FInal</h4>
                    <p>Abril 2023</p>
                </div>
            </div>
        </div>
    </section>
    )
}

export default Portafolio_2