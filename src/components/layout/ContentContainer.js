import './ContentContainer.css';
import CLFContainer from './CLFContainer';
import {Route, Switch} from 'react-router-dom';
import DashboardContent from './DashboardContent';
import {useState} from 'react';

function ContentContainer(props) {
    const [ imageSrc, setImageSrc ] = useState(null);
    const [ error, setError ] = useState('');

    return (
        <div className='ContentContainer'>
            <Switch>

                <Route path='/home'>
                    {/* Content */}
                        <h1>
                            Simplify Your Stock Research.
                        </h1>
                        <h2>
                        Stock prediction software that uses machine learning to make stock recommendations
                        </h2>

                </Route>

                <Route exact path={['/dashboard/feature-correlation', '/dashboard/feature-importance', '/dashboard/confusion-matrix', '/dashboard']} render={() => <DashboardContent setImageSrc={setImageSrc} imageSrc={imageSrc} error={error} setError={setError}/>} />

                <Route path='/prediction'>
                    <CLFContainer setError={setError} />
                </Route>

                <Route path='/*'>
                    <div><h1>Page Not Found :(</h1></div>
                </Route>

            </Switch>
        </div>
    );
}

export default ContentContainer;