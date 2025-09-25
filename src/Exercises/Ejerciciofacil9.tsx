import { useEffect, useState } from "react"
import "../index.css"
import "./Ejerciciofacil9.json"

type Compra = {
    Nombre: string
}

function Listacompras () {
    const [nombreSolo, setNombreSolo] = useState<Compra[]>([])

    useEffect(() => {
        fetch("Ejerciciofacil9.json")
        .then(res => res.json())
        .then(data => setNombreSolo(data.carrito))
    }, [])

    return(<>

        <div>
            {nombreSolo.map((nombresolito) => 
                (<li key={nombresolito.Nombre}>{nombreSolo.Nombre}</li>))}
        </div>

    </>)
}

export default Listacompras