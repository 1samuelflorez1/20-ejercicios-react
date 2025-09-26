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
    const [busqueda, setBusqueda] = useState("")

    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character')
            .then(res => res.json())
            .then(data => setPersonajes(data.results));
    }, []);

    return(<>

        <input
        onChange={e => setBusqueda(e.target.value)} 
        placeholder="Search Bar"></input>
        
        <div className="divPersonajes">
            {personajes.filter(p => p.name.toLocaleLowerCase().includes(busqueda)).map((personaje) => 
            (<li key={personaje.id}>{personaje.name}{<img src={personaje.image}></img>}</li>))}
        </div>

    </>)
}

export default RenderizarApi