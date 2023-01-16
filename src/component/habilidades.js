import React from "react"


function Habilidades(){

    return (
        <div className="contenedor-skills" id="skills">
            <h3>HABILIDADES </h3>
            <div className="skill">
                <div className="info">
                    <p> <span className="lista"> </span>Html & Css</p>
                    <span className="porcentaje">95%</span>
                </div>

                <div className="barra">
                    <div className="" id="html"></div>
                </div>
            </div>
            <div className="skill">
                <div className="info">
                    <p> <span className="lista"> </span>Javascript</p>
                    <span className="porcentaje">90%</span>
                </div>

                <div className="barra">
                    <div className="" id="js"></div>
                </div>
            </div>
            <div className="skill">
                <div className="info">
                    <p> <span className="lista"> </span>Bases de Datos</p>
                    <span className="porcentaje">90%</span>
                </div>

                <div class="barra">
                    <div className="" id="bd"></div>
                </div>
            </div>
            <div className="skill">
                <div className="info">
                    <p> <span className="lista"> </span>Python</p>
                    <span className="porcentaje">85%</span>
                </div>

                <div className="barra">
                    <div className="" id="ps"></div>
                </div>
            </div>
        </div>
    )
}

export default Habilidades