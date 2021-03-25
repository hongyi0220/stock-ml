import './HeaderBar.css';
import logo from '../../assets/logo.png';
import {Link} from 'react-router-dom';

function HeaderBar({ username }) {
    return (
       <div className='HeaderBar' data-testid='header_bar'>
           <Link to='/home'>
               <img className='HeaderBar__Logo' src={logo} alt='Kontrarian Asset Management'/>
           </Link>
           <span className='HeaderBar__Username'>Hello, {username}</span>
       </div>
    );
}

export default HeaderBar;