// Implementa una tarjeta que contenga un input para escribir comentarios 
// y muestre en tiempo real lo que se está escribiendo debajo del input.
import { useState } from "react"
import "../index.css"

function  InputEscribir() {

    const [texto, setTexto] = useState("")

    return (<>
        <div className="cardInputejercicio3">
            <input
            onChange={e => setTexto(e.target.value)}
            className="inputEjercicio3">
            </input>
            <p className="textoInput">Texto: {texto}</p>
        </div>
    </>)
}

export default InputEscribir