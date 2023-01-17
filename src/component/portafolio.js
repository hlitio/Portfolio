import React from "react"


import datos_porfolio from "../datos/datos_portfolio.json"

function Portafolio(){
    return(
        <section id="portfolio">
        <h3 className="titulo-seccion">Mis Proyectos en curso </h3>
        <div className="fila">
        {
            datos_porfolio.map((datos)=>{
                return(
                    <div className="proyecto">
                        <div className="overlay"></div>
                        <img src={datos.imagen}alt={datos.imagen_alt}/>
                        <div className="info">
                            <h4>{datos.titulo}</h4>
                            <p>{datos.subtitulo}</p>
                        </div>
                    </div>
                )
            })
        }
            
            
        </div>
    </section>

    )
}

export default Portafolio