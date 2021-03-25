import './Input.css'

function Input({ mod, label, className, handleChange, value }) {
    return (
        <div className={`${className} InputContainer`}>
            <input className={`InputContainer__Input InputContainer__Input--${mod}`} onChange={handleChange} value={value}/>
            <label className={`InputContainer__Label InputContainer__Label--${mod}`} data-testid='label'>{label}</label>
        </div>
    );
}

export default Input;