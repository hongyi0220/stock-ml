import Button from './Button';
import Input from './Input';
import './AuthForm.css';

function AuthForm(props) {
    return (
        <form className='AuthForm'>
            {props.title}
            <Input label='username' />
            <Input label='password' />
            <Button text='Login'/>
        </form>
    );
}

export default AuthForm;