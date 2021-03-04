import Button from '../common/Button';
import Input from '../common/Input';
import './AuthForm.css';
import { useState } from 'react';

function AuthForm(props) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const handleUsernameChange = e => {
        setUsername(e.target.value);
    }
    const handlePasswordChange = e => {
        setPassword(e.target.value);
    }

    return (
        <form className='AuthForm'>
            <div className='AuthForm__Cap'></div>
            <p className='AuthForm__Title'>{props.title}</p>
            <div className='AuthForm__AlignDiv'>
                <Input className='AuthForm__Input' label='username' placeholder='username' handleChange={handleUsernameChange} />
                <Input className='AuthForm__Input' label='password' placeholder='password' handleChange={handlePasswordChange} />
                <Button className='AuthForm__Button' mod='Small' text='Login' type='submit'/>
            </div>
        </form>
    );
}

export default AuthForm;