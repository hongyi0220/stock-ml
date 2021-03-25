import './NavButton.css';
import {styleType} from '../../SideNavBarStyleType';

function NavButton({ icon, label, handleClick, selected }) {
    const navBtnSelectedStyle = () => {
        return styleType[label.toLowerCase()] == selected ? 'NavButton__Selected--Clicked' : '';
    }

    return (
        <div className='NavButton' onClick={() => handleClick(label)}>

            <div className={`NavButton__Selected ${navBtnSelectedStyle()}`} data-testid='nav_button_selected'></div>

            <span className='material-icons NavButton__Icon' data-testid='nav_button_icon'>
                {icon}
            </span>

            <span className='NavButton__Label' data-testid='nav_button_label'>{label}</span>

        </div>
    );
}

export default NavButton;