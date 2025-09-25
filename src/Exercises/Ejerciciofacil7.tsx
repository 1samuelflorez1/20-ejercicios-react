// Implementa un formulario con campos de nombre y correo electrónico que 
// muestre los datos ingresados en tiempo real debajo de los inputs.

import "../index.css"

function FirstForm (){

    return (<>
        <form>
            <input 
            placeholder="Name" 
            type="text"></input>
            
            <input 
            placeholder="Email" 
            type="email"></input>
        </form>
    </>)
}

export default FirstForm