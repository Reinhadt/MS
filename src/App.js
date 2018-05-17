import React, { Component } from 'react';
import ProductHolder from './Components/ProductHolder/ProductHolder';
import Detail from './Components/Detail/Detail'

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import './App.css';

class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">

          <Route exact path="/" component={ProductHolder} />
          <Route exact path={`/productos/:productId`} component={Detail} />

        </div>
      </Router>
    );
  }
}

export default App;
//ENDPOINTS:
//https://developers.mercadoshops.com.ar/documentacion/publicaciones/#busqueda_id

//RENOVAR APPID:
//http://developers.mercadolibre.com/es/producto-autenticacion-autorizacion/

//APPS MS:
//https://developers.mercadolibre.com.mx/apps/home
