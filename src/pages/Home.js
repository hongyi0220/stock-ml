import SideNavBar from '../components/layout/SideNavBar';
import HeaderBar from '../components/common/HeaderBar';
import ContentContainer from '../components/layout/ContentContainer';
import {useAuth0} from '@auth0/auth0-react';

function Home() {
    const { user } = useAuth0();

    return (
        <div>
            <HeaderBar username={user?.nickname}/>
            <SideNavBar />
            <ContentContainer />
        </div>
    );
}

export default Home;