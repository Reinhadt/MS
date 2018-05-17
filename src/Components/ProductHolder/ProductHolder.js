import React from 'react';
import axios from 'axios';
import ProductCard from '../ProductCard/ProductCard';
import CatFilter from '../CatFilter/CatFilter';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'


class ProductHolder extends React.Component{

    state = {
        productos: [],
        filteredProductos: [],
        categorias: []
    }

    componentDidMount(){
        axios.get('https://api.mercadoshops.com/v1/shops/107302503/listings/search?limit=10&access_token=APP_USR-1356382796723817-051711-6e737e40bfe9abd1db4924bb47ec640d-107302503')
            .then(res => {
                this.setState({ productos: res.data.results, filteredProductos: res.data.results })
                console.log(res)
            })
        axios.get('https://api.mercadoshops.com/v1/shops/107302503/categories/tree')
            .then( res => {
                this.setState({ categorias: res.data[0].children })
                console.log('Cats:', res.data[0].children);
            })
    }

    onSelectChangeHandler = (e) => {
        console.log(e.target.value);
        let id = Number(e.target.value);
        this.setState( currentState => {
            let nuevo = currentState.productos.filter( producto =>{
                console.log(producto.category_id, id)
                return producto.category_id === id
            })

            return{
                filteredProductos: nuevo
            }
        })
    }

    render(){
        return(
            <div className="container">
                <CatFilter change={this.onSelectChangeHandler} cats={this.state.categorias} />

                <div className="flex">
                    {/* react router: linkear al producto pasándole los props
                        1.- Encerrar los productcard entre Links de react router
                        2.- Hacer el render de react con el componente de a mostrar en detalle de producto
                        cómo le paso el id de producto al link?
                        necesito hacerlo en el producto?
                        necesito crear un product card que no haga map?
                    */}
                    {this.state.filteredProductos.map( producto => {
                        return(

                                <Link to={`/productos/${producto.id}`}>
                                    <ProductCard productos={producto} />
                                </Link>

                        )
                    })}
                </div>
            </div>
        )
    }
}

export default ProductHolder;