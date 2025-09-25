// Implementa un formulario con campos de nombre y correo electrónico que 
// muestre los datos ingresados en tiempo real debajo de los inputs.

import { useState } from "react"
import "../index.css"

function FirstForm (){
    const [texto1, setTexto1] = useState("")
    const [texto2, setTexto2] = useState("")

    return (<>
        <form className="form">
            <input 
            className="inputejer7"
            placeholder="Name" 
            type="text"
            onChange={e => setTexto1(e.target.value)}></input>
            <p>Nombre: {texto1}</p>
            
            <input 
            className="inputejer7"
            placeholder="Email" 
            type="email"
            onChange={e => setTexto2(e.target.value)}></input>
            <p>Email: {texto2}</p>
        </form>
    </>)
}

export default FirstForm