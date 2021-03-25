import './Button.css';

function Button(props) {
    return (
        <button className={`${props.className} Button Button--${props.mod}`} type={props.type} onClick={props.handleClick}>
                {props.text}
        </button>
    );
}

export default Button;