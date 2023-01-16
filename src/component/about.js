import React from "react"

function About() {
    return(
        <section id="sobremi">
            <div className="contenedor-foto">
                <img src="img/foto.jpg" alt=""/>
            </div>
            <div className="sobremi">
                <p className="titulo-seccion">Sobre Mi</p>
                <h2>Hola, Soy <span>Hernán H.</span> </h2>
    
                <p>Trabajo en Desarrollo Web desde el 2020. </p>
                <p>Actualmente inmersa en el mundo de Data Science, estudiando e implementando Phyton </p>
    
            </div>
        </section>
    )
}

export default About