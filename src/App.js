import './App.css';
import Auth from './pages/Auth';
import Home from './pages/Home';
import { Route, Redirect, Switch } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Predict from './pages/Predict';

function App() {
    return (
        <div className='App'>
            <Switch>
                <Route exact path='/'>
                    <Auth />
                    {/*
                    <Redirect from='/*' to='/' />
                */}
                </Route>
                <Route path={/\/home|\/dashboard|\/predict/}>
                    <Home />
                </Route>
                {/*
                <Route path='/dashboard'>
                    <Dashboard />
                </Route>
                <Route path='/predict'>
                   <Predict />
                </Route>
                */}
                <Route path='/*'>
                    <div><h1>Page Not Found :(</h1></div>
                </Route>
            </Switch>
        </div>
    );
}

export default App;
