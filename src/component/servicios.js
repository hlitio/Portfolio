
import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCode } from "@fortawesome/free-solid-svg-icons"
import { faFileCode } from "@fortawesome/free-solid-svg-icons"
import { faArrowTrendUp } from "@fortawesome/free-solid-svg-icons"
import { faDatabase } from "@fortawesome/free-solid-svg-icons"
function Servicios(){

    return(
        <section id="servicios">
        <h3 className="titulo-seccion">MIS SERVICIOS</h3>
        <div className="fila">
            <div className="servicio">
                
                <span className="icono"> <FontAwesomeIcon icon={faCode}/></span>
                <h4>Data Engineering</h4>
                <hr/>
                <ul className="servicios-tag">
                    <li>Hadoop</li>
                    <li>Spark</li>
                    <li>Cloud Computing</li>
                </ul>
                <p>Capacidad para organizar, administrar y explorar grandes volumenes de datos, asi como conectarlos con lo que se necesite. </p>
            </div>
            <div className="servicio">
                <span className="icono"><FontAwesomeIcon icon={faFileCode}/></span>
                <h4>Data Analytics</h4>
                <hr/>
                <ul className="servicios-tag">
                    <li>Python</li>
                    <li>Apache Spark</li>
                    <li>Power BI</li>
                </ul>
                <p>Incorporación de herramientas de visualización y reporte, para comunicar y transmitir ideas con el fin de impulsar cambios y soluciones.</p>
            </div>
            <div className="servicio">
                <span className="icono"><FontAwesomeIcon icon={faArrowTrendUp}/></span>
                <h4>Machine Learning</h4>
                <hr/>
                <ul className="servicios-tag">
                    <li></li>
                    <li>Scikit-Learn</li>
                    <li></li>
                </ul>
                <p>Extracción de características importantes para resolver objetivos, creando modelos de machine learning y evaluando su performance, para predecir comportamiento, segmentar o encontrar anomalías.</p>
            </div>
        </div>
        <div className="fila">
            <div className="servicio">
                <span class="icono"><FontAwesomeIcon icon={faDatabase}/></span>
                <h4>Desarrollo de Software</h4>
                <hr/>
                <ul className="servicios-tag">
                    <li>DB</li>
                    <li>UX</li>
                    <li>Testing</li>
                </ul>
                <p>Diseño e implementación de sistemas de Software, Documentación bajo formato IEEE (SRS) 830, utilización de metodología SCRUM, elaboración de Product Backlog, Sprint backlog. </p>
            </div>
   
        </div> 
    </section>
    )

}

export default Servicios