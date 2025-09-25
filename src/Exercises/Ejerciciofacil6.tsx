// Desarrolla una tarjeta que muestre si un usuario está conectado o desconectado, con un botón para cambiar entre estados.

import "../index.css"
import { useState } from "react"

function EstadoConectado (){

    const [conectado, setConectado] = useState(true)

    return(<>
        <div className="divejer6">
            <button
            className="btnejer6"
            onClick={() => setConectado(!conectado)}
            >{conectado ? "Off" : "On"}</button>
            <p
            className="textejer6"
            >El Usuario esta {conectado ? "Conectado" : "Desconectado"}</p>
        </div>
    </>)
}

export default EstadoConectado