// Crea un componente que reciba un nombre de usuario por props y muestre un mensaje de bienvenida personalizado 
// dentro de una tarjeta.
import "../index.css"

type SaludoProps = {
    name: string
    career: string
    age: string
}

function Saludo (props: SaludoProps){ //aqui comenzamos con props, lo primero es hacer la funcion con un parametro
    //de props, esto para poder extraer desde fuera del componente la informacion requerida

    return(<>
    <div className="bienvenidoProps">
        <h1>Tu carrera es: {props.career}</h1>
        <h1>Bienvenido: {props.name}</h1>
        <h1>Edad: {props.age}</h1> 
        {/* en esta parte lo que se hace tomar lo que se extrajo y especificar que se quiere colocar, en este 
        caso el nombre */}
    </div>
    </>)
}

export default Saludo