// Crea una tarjeta de producto con botones de incrementar y decrementar cantidad, mostrando el número actual.
import { useState } from "react"
import "../index.css"

function Cantidadplusminus (){
    const [cantidadDeterminada, setCantidadDeterminada] = useState(0)

    function aumento (){
        setCantidadDeterminada(cantidadDeterminada + 1)
    }

    function descenso (){
        if(cantidadDeterminada > 0){
            setCantidadDeterminada(cantidadDeterminada - 1)
        }
    }

    function alerta (){
        alert(`Usted va a comprar ${cantidadDeterminada} Laptops Asus?`)
    }

    return(<>
        <div className="divAsus">
            <img 
            className="productoAsus"
            src="https://tynmagazine.com/wp-content/uploads/sites/3/2025/01/unnamed-file-74-930x597.jpg"></img>
            <div className="btnsasus">
                <button 
                onClick={alerta}
                className="btnprincipal">Comprar</button>

                <button
                onClick={aumento} 
                className="btnmas">+</button>

                <button
                onClick={descenso} 
                className="btnmenos">-</button>

                <p className="cantidad">Cantidad: {cantidadDeterminada}</p>
            </div>
        </div>
    </>)
}

export default Cantidadplusminus