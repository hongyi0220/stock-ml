import './SideNavBar.css';
import NavButton from "../common/NavButton";
import {useAuth0} from '@auth0/auth0-react';
import {Link} from 'react-router-dom';
import {useState} from 'react';
import {styleType} from '../../SideNavBarStyleType';

function SideNavBar() {
    const { logout } = useAuth0();
    const [navBtnClicked, setNavBtnClicked] = useState(null);

    const handleNavBtnClick = label => {
        console.log(label)
        setNavBtnClicked(styleType[label.toLowerCase()]);
    }

    const handleLogoutButtonClick = () => {
        logout({ returnTo: window.location.origin });
    }

    return (
        <div className='SideNavBar'>

            <Link to='/dashboard'>
                <NavButton handleClick={handleNavBtnClick} selected={navBtnClicked} icon='insert_chart' label='Dashboard' />
            </Link>

            <Link to='/prediction'>
                <NavButton handleClick={handleNavBtnClick} selected={navBtnClicked} icon='lightbulb' label='Prediction' />
            </Link>

            <NavButton selected={navBtnClicked} icon='logout' label='Logout' handleClick={handleLogoutButtonClick}/>

        </div>
    );
}

export default SideNavBar;