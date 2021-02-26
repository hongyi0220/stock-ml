import './NavButton.css';

function NavButton(props) {
    return (
        <div className='NavButton'>
            <div className='NavButton__Selected'></div>
            <span className="material-icons NavButton__Icon">
                {props.icon}
            </span>
            <span className='NavButton__Label'>{props.label}</span>
        </div>
    );
}

export default NavButton;