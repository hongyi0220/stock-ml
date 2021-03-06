import './NavButton.css';

function NavButton({ icon, label, handleClick }) {
    return (
        <div className='NavButton' onClick={handleClick}>
            <div className='NavButton__Selected' data-testid='nav_button_selected'></div>
            <span className='material-icons NavButton__Icon' data-testid='nav_button_icon'>
                {icon}
            </span>
            <span className='NavButton__Label' data-testid='nav_button_label'>{label}</span>
        </div>
    );
}

export default NavButton;