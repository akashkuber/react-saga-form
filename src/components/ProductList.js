// import { useState, useEffect } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
// import axios from 'axios';

const ProductList = (props) => {
    // const [product, setProduct] = useState([]);
    // useEffect(() => {
    //     axios.get('http://localhost:4000/products').then(res => {
    //         const { data } = res.data;
    //         setProduct(data);
    //     });
    // }, []);

    let content = props.products.length > 0 ?
        <table className="table table-border">
            <thead className="thead">
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Status</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody className='tbody'>
                {props.products.map(item =>
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.price}</td>
                        <td>{item.status}</td>
                        <td><button className="btn btn-danger" onClick={(e) => props.deleteProducts(item.id)}>Delete</button></td>
                    </tr>
                )}
            </tbody>
        </table>
        : <div>{props.children}</div>;

    return <div className="row">{content}</div>
}

export default ProductList;