import './HeaderBar.css';
import logo from '../../assets/logo.png';

function HeaderBar({ username }) {
    return (
       <div className='HeaderBar' data-testid='header_bar'>
           <img className='HeaderBar__Logo' src={logo} alt='Kontrarian Asset Management'/>
           <span className='HeaderBar__Username'>Hello, {username}</span>
       </div>
    );
}

export default HeaderBar;