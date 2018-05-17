import React from 'react';
import axios from 'axios';

import Carrusel from '../Carrusel/Carrusel'

class Detail extends React.Component {
    state={
        producto: []
    }
    componentWillMount(){
        console.log("IT UPDATED")
        const {productId} = this.props.match.params;
        axios.get(`https://api.mercadoshops.com/v1/shops/107302503/listings/${productId}?access_token=APP_USR-1356382796723817-051711-6e737e40bfe9abd1db4924bb47ec640d-107302503`)
            .then( res => {

                let result = Object.keys(res).map(function (key) {
                    return { [key]: res[key] };
                 });
                console.log(result)
                this.setState({
                    producto: result[0].data
                })
            })
    }

    render(){
        return(
            <div className="container">
                <h1 className="titulo">{this.state.producto.title}</h1>
                <Carrusel imagenes={this.state.producto.pictures} />
                <p>{this.state.producto.price}</p>
            </div>
        )
    }
}

export default Detail;