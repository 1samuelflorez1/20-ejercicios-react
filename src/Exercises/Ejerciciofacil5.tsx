// Crea una tarjeta de perfil con un botón que permita 
// mostrar u ocultar la información del usuario.
import { useState } from "react"
import "../index.css"

function BtnMostrar () {

    const [ocultar, setOcultar] = useState(false)

    return (<>
        <div className="divOcultarInfoejer5">
            <img className="imgejer5" src="https://cdn-icons-png.flaticon.com/512/12225/12225881.png"></img>
            <button
            onClick={() => setOcultar(!ocultar)}
            className="BtnInfoejer5"
            >{ocultar ? "Ocultar Informacion" : "Mostrar Informacion"}</button>
            
            {ocultar && <h1 className="infoUser">Samuel Florez Villaquiran</h1>}
        </div>
    </>)
}

export default BtnMostrar

