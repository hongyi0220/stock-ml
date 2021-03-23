import './App.css';
import Auth from './pages/Auth';
import Home from './pages/Home';
import { Route, Redirect, Switch } from 'react-router-dom';
import ProtectedRoute from './auth/protected-route';
import {useAuth0} from '@auth0/auth0-react';
import Loading from './components/common/Loading';

function App() {
    const { isAuthenticated, isLoading, user } = useAuth0();
    console.log('isAuthenticated:', isAuthenticated)
    console.log('user:', user)

    return (
        <div className='App'>
            <Switch>

                <Route exact path='/' component={Auth} />

                <Route path={['/home', '/dashboard', '/prediction']} render={() => (isLoading ? <Loading /> : (isAuthenticated ? <Home /> : <Redirect to='/' />))} />

                <Route path='/*'>
                    <div><h1>Page Not Found :(</h1></div>
                </Route>

            </Switch>
        </div>
    );
}

export default App;
