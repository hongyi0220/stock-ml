import './SideNavBar.css';
import NavButton from "./NavButton";

function SideNavBar() {
    return (
        <div className='SideNavBar'>
            <NavButton icon='insert_chart' label='Dashboard' />
            <NavButton icon='lightbulb' label='Prediction' />
            <NavButton icon='logout' label='Logout' />
        </div>
    );
}

export default SideNavBar;