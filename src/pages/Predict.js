import SideNavBar from '../components/layout/SideNavBar';
import HeaderBar from '../components/common/HeaderBar';
import ContentContainer from '../components/layout/ContentContainer';
import {Route} from 'react-router-dom';

function Predict() {
    return (
        <div>
            <HeaderBar />
            <SideNavBar />
            <Route>
                <ContentContainer />
            </Route>
        </div>
    );
}

export default Predict;