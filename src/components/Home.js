import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
class Home extends React.Component {
    constructor() {
        super();
        this.nameRef = React.createRef();
        this.passwordRef = React.createRef();
        let today = new Date();
        let month = today.getMonth() + 1;
        if(month <= 9) month = 0 + '' + month;
        let date = today.getFullYear() + '-' + month + '-' + today.getDate();
        console.log(date);
        this.state = {
            user: {
                rating: '1',
                date: date,
                isChecked: false,
                status: 'Yes',
                userName: '',
                password: ''
            }
        }
    }
    handleChange = (e) => {
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        this.setState({ [e.target.name]: value });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.nameRef.current.value);
        console.log(this.passwordRef.current.value);
        this.setState({user: { userName: this.nameRef.current.value, 
            password: this.passwordRef.current.value}
        })
    }

    render() {
        return <div className="container">
                    <form className="form" onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name:</label>
                            <input className="form-control" type="text" name="name"
                                ref={this.nameRef} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="Password">Password:</label>
                            <input className="form-control" type="Password" name="Password"
                                ref={this.passwordRef} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="rating">Select Rating:</label>
                            <select className="form-control" value={this.state.rating} name="rating" onChange={this.handleChange}>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                            </select>
                        </div> 
                        <div className="form-group">
                            <label htmlFor="date">Date:</label>
                            <input className="form-control" type="date" name="date"
                                onChange={this.handleChange} value={this.state.date}/>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="status" id="inlineRadio1" value="Yes" onChange={this.handleChange}/>
                            <label className="form-check-label" htmlFor="inlineRadio1">Yes</label>
                        </div>
                        <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="status" id="inlineRadio2" value="No" onChange={this.handleChange}/>
                        <label className="form-check-label" htmlFor="inlineRadio2">No</label>
                        </div>
                        <div className="form-group">
                            <label htmlFor="ischecked">Status:</label>
                            <input className="form-control" type="checkbox" checked={this.state.isChecked} name="isChecked" onChange={this.handleChange} />
                        </div>
                        <button type="submit" value="submit" className="btn btn-primary">Submit</button>
                    </form>
            </div>
    }
}

export default Home;