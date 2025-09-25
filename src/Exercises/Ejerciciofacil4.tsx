//Renderiza un listado de mascotas en formato de grid usando tarjetas. 
//Cada tarjeta debe mostrar el nombre y tipo de animal.


import { useEffect, useState } from "react"

type Personaje = {
    id: number,
    name: string,
    image: string
}

function RenderizarApi (){

    const [personajes, setPersonajes] = useState<Personaje[]>([]);

    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character')
            .then(res => res.json())
            .then(data => setPersonajes(data.results));
    }, []);

    return(<>
        
        <div className="divPersonajes">
            {personajes.map((personaje) => 
            (<li key={personaje.id}>{personaje.name}{<img src={personaje.image}></img>}</li>))}
        </div>

    </>)
}

export default RenderizarApi