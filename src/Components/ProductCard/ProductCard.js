import React from 'react';

const ProductCard = (props) => {
            return (
                    <div key={props.productos.id} className="tarjeta">
                        <img src={props.productos.pictures[0].url} alt=""/>
                        <p>{props.productos.title}</p>
                        <p><i>${props.productos.price}</i></p>
                    </div>
            )
}

export default ProductCard;