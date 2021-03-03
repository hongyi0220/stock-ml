import AuthForm from "../components/layout/AuthForm";
import './Auth.css';

function Auth() {
    return (
        <div className='Auth'>
            <AuthForm title='User Login'/>
            <div className='Auth__WallPaper'></div>
        </div>

    );
}

export default Auth;