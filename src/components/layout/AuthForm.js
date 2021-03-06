import Button from '../common/Button';
import Input from '../common/Input';
import './AuthForm.css';
import { useState } from 'react';
import { useAuth0 } from "@auth0/auth0-react";

function AuthForm(props) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const handleUsernameChange = e => {
        setUsername(e.target.value);
    }
    const handlePasswordChange = e => {
        setPassword(e.target.value);
    }
    const { loginWithRedirect } = useAuth0();
    const handleLoginButtonClick = () => {
        loginWithRedirect({redirectUri: 'http://localhost:3000/home'});
    }

    return (
        <form className='AuthForm'>
            <div className='AuthForm__Cap'/>
            <p className='AuthForm__Title'>{props.title}</p>
            <div className='AuthForm__AlignDiv'>
                <Input className='AuthForm__Input' label='username' placeholder='username' handleChange={handleUsernameChange} />
                <Input className='AuthForm__Input' label='password' placeholder='password' handleChange={handlePasswordChange} />
                <Button className='AuthForm__Button' mod='Small' text='Login' type='submit' handleClick={handleLoginButtonClick}/>
            </div>
        </form>
    );
}

export default AuthForm;