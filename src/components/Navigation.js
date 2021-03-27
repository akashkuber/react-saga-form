import { Link } from 'react-router-dom';

const Navigation = () => {
    return <div className="nav" style={{backgroundColor: 'black'}}>
        <Link to="/" style={{color: 'white', fontWeight: 'bold'}}>Iconic Site</Link>&nbsp;&nbsp;&nbsp;
        <Link to="/home" style={{color: 'white', fontWeight: 'bold'}}>Home</Link>&nbsp;&nbsp;&nbsp;
        <Link to="/products" style={{color: 'white', fontWeight: 'bold'}}>Products</Link>&nbsp;&nbsp;&nbsp;
        <Link to="/addproduct" style={{color: 'white', fontWeight: 'bold'}}>Add Products</Link>
    </div>
}
export default Navigation;