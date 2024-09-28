import './navbar.css';

import {Link} from 'react-router-dom'
function Navbar(){
    let jwt=localStorage.getItem('jwt');
    let loginLink
    if(!jwt){
        loginLink=<> <Link to='/login' className="nav-bar-item">Login</Link><Link to='/signup' className="nav-bar-item">SinUp</Link></>
    }
    return(
       <>
       <div className="nav-barcontainer">
        <img className="nav-bar-logo" src="https://res.cloudinary.com/muni/image/upload/fl_preserve_transparency/v1725352870/SNM/Circle_Monogram_Logo_2_msqjiq.jpg?_s=public-apps"></img>
        <Link to='/home' className="nav-bar-item">Home</Link>
        <Link to='/shoping' className="nav-bar-item">Shoping</Link>
        <Link to='/favorites' className="nav-bar-item">Favorites</Link>
        <Link to='/deals' className="nav-bar-item">Top Deals</Link>
        <Link to='/payments' className="nav-bar-item">Payments</Link>
        <Link to='/newproducts' className="nav-bar-item">New Products</Link>
        <Link to='/cart' className="nav-bar-item">Cart</Link>
        <Link to='/orders' className="nav-bar-item">Orders</Link>
        {loginLink}
       </div>
       </>
    )
}

export default Navbar;