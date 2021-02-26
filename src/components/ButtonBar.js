import './ButtonBar.css';
import Button from './common/Button';

function ButtonBar() {
    return (
       <div className='ButtonBar'>
           <Button text='Feature Correlation' type='button' />
           <Button text='Feature Importance' type='button' />
           <Button text='Confusion Matrix' type='button' />
       </div>
    );
}

export default ButtonBar;