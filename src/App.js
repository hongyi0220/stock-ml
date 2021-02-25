import './App.css';
import AuthForm from "./AuthForm";
import SideNavBar from "./SideNavBar";
import HeaderBar from "./HeaderBar";
import ContentContainer from "./ContentContainer";

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
