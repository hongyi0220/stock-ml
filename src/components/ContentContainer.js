import './ContentContainer.css';
import ButtonBar from './ButtonBar';
import CLFContainer from './CLFContainer';

function ContentContainer() {
    return (
        <div className='ContentContainer'>
            <ButtonBar />
            <CLFContainer />
        </div>
    );
}

export default ContentContainer;