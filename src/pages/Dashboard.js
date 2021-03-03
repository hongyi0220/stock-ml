import SideNavBar from '../components/layout/SideNavBar';
import HeaderBar from '../components/common/HeaderBar';
import ContentContainer from '../components/layout/ContentContainer';
import {Route} from 'react-router-dom';

function Dashboard() {
    return (
        <div>
            <HeaderBar />
            <SideNavBar />
            <ContentContainer />
        </div>
    );
}

export default Dashboard;