import './Auth.css';
import {useAuth0} from '@auth0/auth0-react';
import Button from '../components/common/Button';

function Auth() {
    const { loginWithRedirect } = useAuth0();
    const handleLoginButtonClick = () => {
        loginWithRedirect({redirectUri: 'http://localhost:3000/home'});
    }

    return (
        <div className='Auth'>
            <Button className='Auth__Button' mod='Medium' text='Continue' type='submit' handleClick={handleLoginButtonClick} />
            <div className='Auth__WallPaper'/>
        </div>

    );
}

export default Auth;