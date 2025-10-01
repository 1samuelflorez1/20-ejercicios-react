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
        //en esta parte se usa gun: armasType porque es lo que se esta usando y para poder usarlo, se tipea

         if(compradas.includes(gun.uuid)){ 
            setCompradas(compradas.filter(id => id !== gun.uuid))
            setValor(valor - gun.shopData.cost)
            //en este if pasa, 1: comprueba si en "compradas" se incluye el id de algun arma
            //si esto es asi entonces este if tiene como objetivo quitarlo del array
            //y restarle la cantidad, 2: en la segunda linea, lo que ocurre es que 
            //con filter, se crea un nuevo array pero solo con la condicion que se le indique
            //en este caso lo que se le indica es que creee el array con todos los id´s APARTE
            //del que se coincide con el que se vendio, para poder quitarlo y 


         }else{
            setCompradas([...compradas, gun.uuid])
            setValor(valor + gun.shopData.cost)
            //lo mas importante aqui son los tres puntos el cual se llama (spread operator)
            //lo que significa que, crea un nuevo array, osea reemplaza el anterior, SUMANDOLE
            //el nuevo id que se registro
            //ejemplo:
            // compradas = ["id1", "id2"]
            // gun.uuid = "id3"
            // [...compradas, gun.uuid] 
            // // resultado: ["id1", "id2", "id3"]
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