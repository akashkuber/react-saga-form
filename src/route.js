import React from 'react';
import { Route } from 'react-router-dom';

import Home from './components/Home';
import Products from './components/Products';
import AddProduct from './components/AddProduct';

const allRoute = () => {
    return <React.Fragment>
        <Route exact path="/" component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/products" component={Products} />
        <Route path="/addProduct" component={AddProduct} />
    </React.Fragment>
     
}
export default allRoute