// Crea un componente que muestre la hora actual y se actualice automáticamente cada segundo.
import { useEffect, useState } from "react"
import "../index.css"

function RelojDigital (){

    const [hora, setHora] = useState(new Date())

    useEffect(() => {
        const intervalo = setInterval(() => {
            setHora(new Date())
        }, 1000)

        return (() => clearInterval(intervalo))

    }, [])

    return(<>
        <h1 className="hora">{hora.toLocaleTimeString()}</h1>
    </>)
}

export default RelojDigital