import React from 'react';
// import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductList from './ProductList';
import { connect } from 'react-redux';
import { deleteProductAction } from '../redux/action';

class Products extends React.Component {
    // state = {
    //     products: [
    //         {
    //             id: 1,
    //             name: 'Laptop',
    //             price: 2000,
    //             status: 'Available'
    //         },
    //         {
    //             id: 2,
    //             name: 'Monitor',
    //             price: 1000,
    //             status: 'Sold'
    //         },
    //         {
    //             id: 3,
    //             name: 'mobile',
    //             price: 7500,
    //             status: 'Available'
    //         }
    //     ]
    // };
    // componentDidMount = () => {
    //     axios.delete('http://localhost:4000/product', this.state.products);
    //     axios.post('http://localhost:4000/adddProduct', this.state.products[0]);
    //     axios.post('http://localhost:4000/adddProduct', this.state.products[1]);
    //     axios.post('http://localhost:4000/adddProduct', this.state.products[2]);
    // }
    removeProduct = id => {
        this.props.removed(id);
    }
    
    render() {
        return <React.Fragment>
            <div className="container">
                <h1>Show All Products</h1>
                <ProductList products={this.props.products} deleteProducts={this.removeProduct}>
                     <div className="text text-success"><b>No Products Found</b></div></ProductList>
            </div>
        </React.Fragment>
    }
}

const mapDispatchToProps = dispatch => {
    return {
        removed: (id) => dispatch(deleteProductAction(id))
    }
}
const mapStateToProps = state => {
    return {
        products: state
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Products);