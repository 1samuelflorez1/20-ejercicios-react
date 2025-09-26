//Crea una tarjeta con texto que tenga botones para aumentar y disminuir el tamaño de la fuente dinámicamente.

import { useState } from "react"

function AumentoTexto (){

    const [aumento, setAumento] = useState(30)

    function aumentoText (){
        setAumento(aumento + 1)
    }

    function descensoText (){
        if(aumento > 10){
            setAumento(aumento - 10)
        }
    }

    return(<>
        <button
        onClick={aumentoText}>Aumento</button>

        <button
        onClick={descensoText}>Descenso</button>
        <p 
        style={{
            fontSize: `${aumento}px`,
        }}>Texto Base</p>
    </>)
}

export default AumentoTexto