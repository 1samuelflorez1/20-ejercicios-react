// Desarrolla una tarjeta de perfil de usuario con un botón que alterne entre "Seguir" y "Siguiendo".

import { useState } from "react"
import "../index.css"

function CardBtn (){
    const [follow, setFollow] = useState(false)

    function btnseguirsi(){
        setFollow(!follow)
    }
 
    return(<>
        <div id="divseguir">
            <img
            id="fotoPerfil"
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"></img>
            <h1>Samuel Florez Villaquiran</h1>
            <button
            id="btnseguir"
            onClick={btnseguirsi}
            >{follow ? "Siguiendo" : "Seguir"}</button>
        </div>
    </>)
}

export default CardBtn