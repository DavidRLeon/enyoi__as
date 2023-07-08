import React from "react";
import './css/primary_button.css'

const Boton = (props:{texto: string, callBack: Function}) =>{
    return(
        <button onClick={function(){props.callBack()}} className="primary_button">{props.texto}</button>
    );
}

export default Boton;