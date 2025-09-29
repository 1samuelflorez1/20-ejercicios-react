// Implementa un grid de productos donde cada tarjeta muestre nombre, 
// precio y botón de compra con funcionalidad simulada.

import { useEffect, useState } from "react";
import "../index.css"


function GridProductos (){

    type personaje = {
        id: number,  //esto se basa en que, aqui se declarar que va a ser cada cosa
        name: string,    //en este caso el id seria un numero y el name seria un string
        image: string
    }

    function comprado (){
        alert("Articulo Adquirido")
    }

    const [personajes, setPersonajes] = useState<personaje[]>([])

    useEffect (() => {
        fetch("https://rickandmortyapi.com/api/character")
            .then(res => res.json())
            .then(data => setPersonajes(data.results))
    }, [])

    return(<>
    
        <div id="cardPersonajessolo">
            {personajes.map((personaje) => 
                (<div
                onClick={comprado}
                id="personajeSolo" 
                key={personaje.id}>
                    {<img src={personaje.image}></img>}
                    {<p>{personaje.name}</p>}
                    {<p>{Math.floor(Math.random() * 100000) + 50000}$</p>}
                    {<button>Comprar</button>}
                </div>))}
        </div>
    
    </>)

}

export default GridProductos