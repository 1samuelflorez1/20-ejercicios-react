// Implementa un input de búsqueda que filtre y muestre usuarios en tarjetas basándose en lo que se escriba.

import { useEffect, useState } from "react"

type Usuarios = {
    "id": number,
    "first_name": string
}

function SearchInput (){

    const [usuarios, setUsuarios] = useState<Usuarios[]>([])
    const [busqueda, setBusqueda] = useState("")

    useEffect(() => {
            fetch("/Ejerciciofacil10.json")
            .then(res => res.json())
            .then(data => setUsuarios(data.Users))
        }, [])

    return(<>
        <input
        onChange={e => setBusqueda(e.target.value)} 
        placeholder="Search Bar"></input>
        <ul>
            {usuarios.filter(user => user.first_name.toLocaleLowerCase().includes(busqueda)).map((UsuariosIndividual) => (
                <ul key={UsuariosIndividual.id}>
                    <h3 className="producto">{UsuariosIndividual.first_name}</h3>
                </ul>
            ))}
        </ul>
    </>)
}

export default SearchInput