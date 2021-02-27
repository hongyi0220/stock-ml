import './NavButton.css';

function NavButton(props) {
    return (
        <div className='NavButton'>
            <div className='NavButton__Selected' data-testid='nav_button_selected'></div>
            <span className='material-icons NavButton__Icon' data-testid='nav_button_icon'>
                {props.icon}
            </span>
            <span className='NavButton__Label' data-testid='nav_button_label'>{props.label}</span>
        </div>
    );
}

export default NavButton;