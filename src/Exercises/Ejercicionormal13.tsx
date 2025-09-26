// Implementa un post que permita agregar comentarios mediante un input y mostrar todos los comentarios agregados en una lista.
import { useState } from "react"
import "../index.css"

function ComentariosPost (){
    const [comentario, setComentario] = useState("")
    const [textocoment, setTextoComent] = useState<string[]>([])

    function crearComentario(){
        if(comentario.trim() === "")return
        setTextoComent([...textocoment, comentario])
        setComentario("")
    }

    return(<>
    <div className="comentarioDiv">
        <input
        value={comentario}
        onChange={e => setComentario(e.target.value)}
        className="inputejer13" 
        placeholder="Comentario"
        ></input>

        <button
        className="btnComent"
        onClick={crearComentario}
        >Publicar</button>

        <div className="comentariosLista">
            {textocoment.map((comentario, id) => (
                <p key={id}>{comentario}</p>
            ))}
        </div>
    </div>
    </>)
}

export default ComentariosPost