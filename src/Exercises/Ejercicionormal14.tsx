// Desarrolla un selector dropdown que permita elegir entre diferentes categorías y muestre la selección actual.

import { useState } from "react"
import "../index.css"

function DropDown (){

    const [valorOpcion, setValorOpcion] = useState("Inicio")

    return(<div id="selectorejer14">
        <select
        onChange={e => setValorOpcion(e.target.value)}>
            <option value={"Opcion A"}>Opcion A</option>
            <option value={"Opcion B"}>Opcion B</option>
            <option value={"Opcion C"}>Opcion C</option>
            <option value={"Opcion D"}>Opcion D</option>
            <option value={"Opcion E"}>Opcion E</option>
        </select>

        <p id="textoejer14">Escogiste la {valorOpcion}</p>
    </div>)
}

export default DropDown
