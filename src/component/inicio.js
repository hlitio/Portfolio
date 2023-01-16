import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { faTwitter, faFacebook, faInstagramSquare, faLinkedin, faDiscord, faGithub } from "@fortawesome/free-brands-svg-icons"



function Inicio(){

    return(
        
    <section id="inicio">
        <div className="contenido">
            <header>
                <div className="contenido-header">
                    <h1></h1>
                    <nav id="nav" className="">
                        <ul id="links">
                            <li><a href="#inicio" className="seleccionado" onClick="seleccionar(this)">INICIO</a></li>
                            <li><a href="#sobremi" onClick="seleccionar(this)">SOBRE MI</a></li>
                            <li><a href="#servicios" onClick="seleccionar(this)">SERVICIOS</a></li>
                            <li><a href="#portfolio" onClick="seleccionar(this)">PORTFOLIO</a></li>
                            <li><a href="#contacto" onClick="seleccionar(this)">CONTACTO</a></li>
                        </ul>
                    </nav>

                   
                    <div id="icono-nav" onClick="responsiveMenu()">
                        <FontAwesomeIcon icon={faBars}/>
                    </div>


                    <div className="redes">
    
                        
                        <a href="#"><FontAwesomeIcon icon={faTwitter}/></a>
                        <a href="#"><FontAwesomeIcon icon={faFacebook}/></a>
                        <a href="#"><FontAwesomeIcon icon={faInstagramSquare}/></a>
                        <a href="#"><FontAwesomeIcon icon={faLinkedin}/></a>
                        <a href="#"><FontAwesomeIcon icon={faDiscord}/></a>
                        <a href="#"><FontAwesomeIcon icon={faGithub}/></a>
                    </div>
                </div>
            </header>
            <div className="presentacion">
                <p className="bienvenida">Bienvenidos al mundo del futuro</p>
                <h2>Aquí encontraras <span> Ideas Innovadoras</span>,</h2>
                <p className="descripcion">Soy Hernán y te invito a explorar mi mundo</p>
                <p className="descripcion"></p>
                <p className="descripcion"></p>
                <p className="descripcion"></p>
                <a href="#portfolio">Mi Portafolio</a>
            </div>
        </div>
        
    </section>
    )

}
export default Inicio