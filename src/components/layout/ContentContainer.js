import './ContentContainer.css';
import ButtonBar from './ButtonBar';
import CLFContainer from './CLFContainer';
import {Route, Switch} from 'react-router-dom';

function ContentContainer() {
    return (
        <div className='ContentContainer'>
            <Switch>
                <Route path='/home'></Route>
                <Route path='/dashboard' render={() => <ButtonBar />} />
                <Route path='/predict'>
                    <CLFContainer />
                </Route>
                <Route path='/*'>
                    <div><h1>Page Not Found :(</h1></div>
                </Route>
            </Switch>
        </div>
    );
}

export default ContentContainer;