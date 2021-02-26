import './Button.css';

function Button({mod, type, text, className}) {
    return (
        <button className={`${className} Button Button--${mod}`} type={type}>
            {text}
        </button>
    );
}

export default Button;