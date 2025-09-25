// Desarrolla una tarjeta de post con un botón de "like" que incremente un contador cada vez que se haga clic.
import { useState } from "react"
import "../index.css"

function Ejerciciofacil2 () {

    const [likes, setLikes] = useState(17)
    function aumento (){
        setLikes(prev => prev +1)
    }

    return (<>
        <div className="divejercicio2">
            <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIizj-yKMa30aivqh1AFZ3YLdMf-VSphh8mg&s" 
            className="imgejercicio2"
            ></img>
            <h1 className="textoimagenejericio2">Imagen</h1>

            <div className="like">
                <p>Likes: {likes}</p>
                <button
                onClick={aumento} 
                className="likeBtn">Like</button>
            </div>
        </div>
    </>)

}

export default Ejerciciofacil2