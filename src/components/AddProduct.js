import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { connect } from 'react-redux';
import { addProductAction } from '../redux/action'

class AddProduct extends React.Component {
    state = {
        id: '',
        name: '',
        price: '',
        status: 'offline',
        isChecked: false,
        message: '',
    };
    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }
    handleCheck = (e) => {
        this.setState({ [e.target.name]: e.target.checked });
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const { name, id, price, isChecked } = this.state;
        if (name === '' || id === '' || price === '') {
            this.setState(
                { message: 'Please fill all the fields' }
            );
        } else {
            if (isChecked) {
                this.setState(
                    { message: 'Form submitted successfully' }
                );
                this.props.addproduct(this.state);
                setTimeout(() => {
                    this.props.history.replace('/products');
                }, 2000);
                
            } else {
                this.setState(
                    { message: 'please accept terms and conditions' }
                );
            }
        }
    }
    render() {
        return <React.Fragment>
            <div className="container" style={{ paddingTop: '50px' }}>
                <h1>Add Product</h1>
                <div className="row">
                    <div className="col-12">
                        <div className="col-3" style={{ float: 'left' }}></div>
                        <div className="col-6">
                            <form onSubmit={this.handleSubmit}>
                                <div className="form-goup">
                                    <label style={{ float: 'left' }} htmlFor="id">Id:</label>
                                    <input className="form-control" type="number" name="id" value={this.state.id}
                                        onChange={this.handleChange} id="id" />
                                </div>
                                <div className="form-goup">
                                    <label style={{ float: 'left' }} htmlFor="name">Name:</label>
                                    <input className="form-control" type="text" name="name" value={this.state.name}
                                        onChange={this.handleChange} id="name" />
                                </div>
                                <div className="form-goup">
                                    <label style={{ float: 'left' }} htmlFor="price">Price:</label>
                                    <input className="form-control" type="text" name="price" value={this.state.price}
                                        onChange={this.handleChange} id="price" />
                                </div>
                                <div className="form-goup">
                                    <label style={{ float: 'left' }} htmlFor="status">Status:</label>
                                    <select className="form-control" name="status" value={this.state.status} onChange={this.handleChange}>
                                        <option value="online">Online</option>
                                        <option value="offline">Offline</option>
                                    </select>
                                </div>
                                <div className="form-goup">
                                    <label htmlFor="isChecked">Accept terms and conditions.</label>
                                    <input className="form-control" type="checkbox" name="isChecked" checked={this.state.isChecked}
                                        onChange={this.handleCheck} id="isChecked" />
                                </div>
                                <br />
                                <div className="text text-danger"><b>{this.state.message}</b></div>
                                <div>
                                    <button className="btn btn-primary" type="submit">Submit</button>
                                </div>
                            </form>
                        </div>
                        <div className="col-3"></div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    }
}

const mapStateToProps = state => {
    return {
        products: state
    }
    
}

const mapDispatchToProps = dispatch => {
    return {
        addproduct: product => dispatch(addProductAction(product))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddProduct);