import React from "react"


import datos_porfolio from "../datos/datos_portfolio.json"





function Portafolio({Info}){
    
   
    return(
        
        <section id="portfolio">
            <h3 className="titulo-seccion">Mis Proyectos en curso </h3>
            <div className="fila">            
                <Info/>            
  
            
            </div>
        </section>
   
    )
}

export default Portafolio