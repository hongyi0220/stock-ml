import './App.css';
import AuthForm from "./components/AuthForm";
import SideNavBar from "./components/SideNavBar";
import HeaderBar from "./components/common/HeaderBar";
import ContentContainer from "./components/ContentContainer";

function App() {
    return (
        <div className='App'>
            <HeaderBar />
            <SideNavBar />
            <ContentContainer />
            <AuthForm title='User Login'/>
        </div>
    );
}

export default App;
