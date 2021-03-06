import './Button.css';

function Button({ mod, type, text, className, handleClick }) {
    return (
        <button className={`${className} Button Button--${mod}`} type={type} onClick={handleClick}>
            {text}
        </button>
    );
}

export default Button;