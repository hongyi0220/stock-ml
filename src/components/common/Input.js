import './Input.css'

function Input({mod, label, className}) {
    return (
        <div className={`${className} InputContainer`}>
            <input className={`InputContainer__Input InputContainer__Input--${mod}`} />
            <label className={`InputContainer__Label InputContainer__Label--${mod}`}>{label}</label>
        </div>
    );
}

export default Input;