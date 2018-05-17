import React from 'react';
import _ from 'lodash';

//Inicializo imagenes a un array vacío para cuando hace el mount
//esto porque el state es undefined de inicio y genera la data hasta después
//para evitar que el map sea nulo (no se puede mapear un undefined duuuh)
//se inicializa el prop a un arreglo vacío, evitando el error de map is undefined.
const Carrusel = ({imagenes = []}) => {
    /* const imagens = props.imagenes */
    console.log( imagenes)
    return(
        imagenes.map( imagen => {
            return (
                <img src={imagen.url} />
            )
        })

    )
}
//Cómo cambiar imágenes onclick?
//setear state inicial de seleccionado a imagen[0]
//en el click de las imágenes auxiliares, obtengo el index y seteo state a imagen[index]
//alguna otra idea?

export default Carrusel;