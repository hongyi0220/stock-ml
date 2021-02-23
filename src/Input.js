import './Input.css'

function Input(props) {
    return (
        <div className='InputContainer'>
            <input className={`InputContainer__Input InputContainer__Input--${props.mod}`} />
            <label className={`InputContainer__Label InputContainer__Label--${props.mod}`}>{props.label}</label>
        </div>
    );
}

export default Input;