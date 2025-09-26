// Renderiza una lista de productos en tarjetas, cada una con un botón "Agregar al carrito" que simule la acción.

import { useEffect, useState } from "react"
import "../index.css"

type Compra = {
    id: number,
    Nombre: string
}

function Listacompras () {
    const [nombreSolo, setNombreSolo] = useState<Compra[]>([])

    useEffect(() => {
        fetch("/Ejerciciofacil9.json")
        .then(res => res.json())
        .then(data => setNombreSolo(data.carrito))
    }, [])

    function Productoagregado(){
        alert("Producto Adquirido")
    }

    return(<>

        <div>
            {nombreSolo.map((nombresolito) => 

                (<div className="productoIndividualejer9">
                    <div key={nombresolito.id}>
                        <h1 className="producto">{nombresolito.Nombre}</h1>
                        <button
                        onClick={Productoagregado} 
                        className="btnproducto">Agregar al carrito</button>
                    </div>
                </div>))}
        </div>

    </>)
}

export default Listacompras