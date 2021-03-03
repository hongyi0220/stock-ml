import './ContentContainer.css';
import ButtonBar from './ButtonBar';
import CLFContainer from './CLFContainer';
import { Route } from 'react-router-dom';

function ContentContainer() {
    return (
        <div className='ContentContainer'>
            <Route path='/dashboard'>
                <ButtonBar />
            </Route>
            <Route path='/predict'>
                <CLFContainer />
            </Route>
        </div>
    );
}

export default ContentContainer;