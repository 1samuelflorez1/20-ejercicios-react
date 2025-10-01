// Implementa un sistema donde se puedan agregar productos a un carrito y se calcule automáticamente el precio total.

import { useEffect, useState } from "react"
import "../index.css"

type armasType = ({
    uuid: string,
    displayName: string,
    displayIcon: string,
    shopData : {
        cost: number
    }
})

function SumaApiArmas (){

    const [armas, setArmas] = useState<armasType[]>([])
    const [valor, setValor] = useState(0)
    const [compradas, setCompradas] = useState<string[]>([])

    useEffect(() => {
        fetch("../Ejercicionormal19.json")
            .then(res => res.json())
            .then(info => setArmas(info.data))
    }, [])

    useEffect(() => {
        document.body.classList = "colorFondoArmas"
    }, [])

    function clickBtn(gun: armasType){
         if(compradas.includes(gun.uuid)){
            setCompradas(compradas.filter(id => id !== gun.uuid))
            setValor(valor - gun.shopData.cost)
         }else{
            setCompradas([...compradas, gun.uuid])
            setValor(valor + gun.shopData.cost)
         }
    }

    return(<>

        <div id="individualGun">

            <h1 id="costetitulo">Valor armas: {valor}</h1>

            {armas.map((gun) => 
            {const estaComprada = compradas.includes(gun.uuid)
                
            return (<div id="gunsola" key={gun.uuid}>
                    <img src={gun.displayIcon}></img>
                    <p id="namegun">{gun.displayName}</p>
                    <p id="costgun">{gun.shopData?.cost ?? "No esta"}</p>

                    <button
                    onClick={() => clickBtn(gun)}
                    id="btnarma"
                    >{estaComprada ? "Vender" : "Comprar"}</button>
                    </div>)
})}
        </div>

    </>)
}

export default SumaApiArmas