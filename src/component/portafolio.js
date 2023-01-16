import React from "react"
import proyecto1 from "../img/proyecto1.jpg"
import proyecto2 from "../img/proyecto2.jpg"
import proyecto3 from "../img/proyecto3.jpg"
import proyecto4 from "../img/proyecto4.jpg"
import proyecto_construccion from "../img/proyecto-en-construccion.jpg"



function Portafolio(){
    return(
        <section id="portfolio">
        <h3 className="titulo-seccion">Mis Proyectos en curso </h3>
        <div className="fila">
            <div className="proyecto">
                <div className="overlay"></div>
                <img src={proyecto1} alt="proyecto1.html"/>
                <div className="info">
                    <h4>Sistema de Gestión de Entidades de Salud</h4>
                    <p>SGH</p>
                </div>
            </div>
            <div className="proyecto">
                <div className="overlay"></div>
                <img src={proyecto2} alt=""/>
                <div className="info">
                    <h4>Progreso de nivel de carrera y toma de decisiones.</h4>
                    <p>SMART UNIVERSITY</p>
                </div>
            </div>
            <div className="proyecto">
                <div className="overlay"></div>
                <img src={proyecto3} alt=""/>
                <div className="info">
                    <h4>Prevee el nivel de enojo de mascotas para evitar accidentes.</h4>
                    <p>SAVE YOUR DOG</p>
                </div>
            </div>
        </div>
        <div className="fila">
            <div className="proyecto">
                <div className="overlay"></div>
                <img src={proyecto4} alt=""/>
                <div className="info">
                    <h4>Evaluador de puntos + y - de actitudes.</h4>
                    <p>++</p>
                </div>
            </div>
            <div className="proyecto">
                <div className="overlay"></div>
                <img src={proyecto_construccion} alt=""/>
                <div className="info">
                    <h4>Proyecto en construcción</h4>
                    <p>WARNING</p>
                </div>
            </div>
            <div className="proyecto">
                <div className="overlay"></div>
                <img src={proyecto_construccion} alt=""/>
                <div className="info">
                    <h4>Proyecto en construcción</h4>
                    <p>WARNING</p>
                </div>
            </div>
        </div>
    </section>

    )
}

export default Portafolio