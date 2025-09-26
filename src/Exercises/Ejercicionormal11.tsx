// Desarrolla un toggle que cambie entre modo claro y oscuro en toda la aplicación, modificando los estilos globalmente.

import { useEffect, useState } from "react"
import "../index.css"

function ModoOscuro (){
    const [mode, setMode] = useState(true)

    useEffect(() => {
        document.body.classList = mode ? "modeOscuroF" : "modeClaroF"
    }, [mode])

    return(<>
    
        <button
        className={mode ? "modeOscuro" : "modeClaro"}
        onClick={() => setMode(!mode)}>
            {mode ? "Modo Claro" : "Modo Oscuro"}
        </button>
    
    </>)
}

export default ModoOscuro