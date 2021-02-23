import Button from './Button';
import Input from './Input';
import './AuthForm.css';

function AuthForm(props) {
    return (
        <form className='AuthForm'>
            <div className='AuthForm__Cap'></div>
            <p className='AuthForm__Title'>{props.title}</p>
            <div className='AuthForm__AlignDiv'>
                <Input className='AuthForm__Input' label='username' placeholder='username' />
                <Input className='AuthForm__Input' label='password' placeholder='password' />
                <Button className='AuthForm__Button' mod='Small' text='Login' type='submit'/>
            </div>
        </form>
    );
}

export default AuthForm;