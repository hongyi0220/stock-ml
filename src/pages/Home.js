import SideNavBar from '../components/layout/SideNavBar';
import HeaderBar from '../components/common/HeaderBar';
import ContentContainer from '../components/layout/ContentContainer';
import {Route} from 'react-router-dom';
import {useAuth0} from '@auth0/auth0-react';

function Home() {
    const { user, isAuthenticated } = useAuth0();

    return (
        <div>
            <HeaderBar username={user?.nickname}/>
            <SideNavBar />
            <Route>
                <ContentContainer />
            </Route>
        </div>
    );
}

export default Home;