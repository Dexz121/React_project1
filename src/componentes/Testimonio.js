//import React from 'react'; //a partir del 2020, react 17 se hizo un cambio importante, ya no requiere importar react
import '../stylesheets/Testimonios.css';

function Testimonio(props){ // se agrega props y puedo usar esa palabra props en la estructura del componentes
   return(
    <div className='contenedor-testimonio'>
      <img 
        className='imagen-testimonio' 
        src={require(`../imagenes/halo-${props.imagen}.webp`)}
        alt='Foto de master chief' />{/* en lugar de usar una cadena de caracteres, vamos a usar comillas invertidas, nos van a permitir insertar codigo de javascript dentro de la cadena con la combinacion de simbolos ${}*/}

      <div className='contenedor-texto-testimonio'>
        <p className='nombre-testimonio'>
          <strong>{props.nombre}</strong> en {props.pais} 
        </p>
        <p className='Atributo'><strong>{props.cargo}</strong> en {props.empresa}
        </p>
        <p className='descripcion'>"{props.Testimonio}" <strong>{props.testimonioLorem}{props.TestimonioV2}</strong>{/* Esto es un comentario escrito dentro del return de una function*/}
        </p> 
      </div>

    </div>
   ); 
}

export default Testimonio;