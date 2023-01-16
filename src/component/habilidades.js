
import React from 'react'
import { useInView } from 'react-intersection-observer';



function Habilidades(){
    const { ref, inView, entry } = useInView({
        /* Optional options */
        
        threshold: 0,
    });
    
    return (
        
        
        <div className="contenedor-skills" id="skills" ref={ref}>
            
            <h3>HABILIDADES </h3>
            <div className="skill">
                <div className="info">
                    <p> <span className="lista"> </span>Html & Css</p>
                    <span className="porcentaje">95%</span>
                </div>

                <div className="barra">
                    <div id="html"></div>
                    <div style={{
                        backgroundColor:"#fff",
                        width:"95%", 
                        height:"6px", 
                        animation: inView ? "progreso1 2s forwards" : ""
                        }}>
                    </div>                    
                </div>              

            </div>


            <div className="skill">
                <div className="info">
                    <p> <span className="lista"> </span>Javascript</p>
                    <span className="porcentaje">90%</span>
                </div>

                <div className="barra">
                    <div id="js"></div>
                    <div style={{
                        backgroundColor:"#fff",
                        width:"90%", 
                        height:"6px", 
                        animation: inView ? "progreso2 2s forwards" : ""
                        }}>
                        
                    </div>
                </div>
            </div>


            <div className="skill">
                <div className="info">
                    <p> <span className="lista"> </span>Bases de Datos</p>
                    <span className="porcentaje">90%</span>

                </div>

                <div className="barra">
                    <div id="bd"></div>
                    <div style={{
                        backgroundColor:"#fff",
                        width:"90%", 
                        height:"6px", 
                        animation: inView ? "progreso3 2s forwards" : ""
                        }}>
                        
                    </div>
                </div>
            </div>


            <div className="skill">
                <div className="info">
                    <p> <span className="lista"> </span>Python</p>
                    <span className="porcentaje">85%</span>
                </div>

                <div className="barra">
                    <div id="ps"></div>
                    <div style={{
                        backgroundColor:"#fff",
                        width:"55%", 
                        height:"6px", 
                        animation: inView ? "progreso4 2s forwards" : ""
                        }}>

                    </div>
                </div>
            </div>
        </div>
       
    )
}

export default Habilidades