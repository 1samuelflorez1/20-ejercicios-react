// Crea un componente que simule la carga de posts desde una API usando useEffect con timeout.

import { useEffect, useState } from "react";

type Personajesi = ({
    id: number,
    name: string
})

function CargaApiPantalla (){

    const [personajes, setPersonajes] = useState<Personajesi[]>([])
    const [loading, setloading] = useState(true)

      useEffect(() => {
            fetch('https://rickandmortyapi.com/api/character')
                .then(res => res.json())
                .then(data => {
                    setTimeout(() => { //la funcion de timeout sirve para ejecutar algo despues de una cantidad de tiempo
                                    //la cantidad de tiempo se da en milisegundos, asique 1000ms = 1sg
                        setPersonajes(data.results)
                        setloading(false)
                    }, 3000)
                })
            }, [])

        //de esta forma que esta aqui arriba es para añadir tiempo al cargador y que se pueda ver el mensaje
        //esto implica que no se añada el finally (esta es una promesa de js la cual se ejecuta al final de la promesa)
        //el timeout es para darle un tiempo de espera a que ejecute los personajes en este caso


    //  useEffect(() => {
    //         fetch('https://rickandmortyapi.com/api/character')
    //             .then(res => res.json())
    //             .then(data => {setPersonajes(data.results)
    //         })
    //         .finally(() => {
    //             setloading(false)
    //         })
    //         }, [])

    //luego en este metodo solo se usa el finally, este metodo es mejor cuando necesitamos en caso real, esperar
    //a que el api o la funcion se ejecute

            if(loading){
              return (
              <>
                <h1>Cargando Nombres API</h1>
              </>)
            }

    return(
    <>
        <div>
            {personajes.map((personaje) => 
                (<div key={personaje.id}>{personaje.name}</div>))}
        </div>
    </>
    )
}

export default CargaApiPantalla