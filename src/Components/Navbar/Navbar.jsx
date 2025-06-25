import './Navbarstyle.css';
import logo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
     <div className="nav">
        <div className="logo">
            <img src={logo} alt="logo" />
        </div>
        <ul>
            <Link className='Link' to="/"><li>Home</li></Link>
            <Link className='Link' to="/Product"><li>Service</li></Link>  
            <Link className='Link' to="/Contact"><li>Contact</li></Link>  
        </ul>    
    </div>   
    </>
  )
}

export default Navbar