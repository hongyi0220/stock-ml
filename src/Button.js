import './Button.css';

function Button(props) {
    return (
        <button className={`Button Button--${props.mod}`} type={props.type}>
            {props.text}
        </button>
    );
}

export default Button;