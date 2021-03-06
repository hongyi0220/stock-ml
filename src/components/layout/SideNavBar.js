import './SideNavBar.css';
import NavButton from "../common/NavButton";
import {useAuth0} from '@auth0/auth0-react';
import {Link} from 'react-router-dom';

function SideNavBar() {
    const { logout } = useAuth0();
    const handleLogoutButtonClick = () => {
        logout({ returnTo: window.location.origin });
    }

    return (
        <div className='SideNavBar'>
            <Link to='/dashboard'>
                <NavButton icon='insert_chart' label='Dashboard' />
            </Link>
            <Link to='/predict'>
                <NavButton icon='lightbulb' label='Prediction' />
            </Link>
                <NavButton icon='logout' label='Logout' handleClick={handleLogoutButtonClick}/>
        </div>
    );
}

export default SideNavBar;