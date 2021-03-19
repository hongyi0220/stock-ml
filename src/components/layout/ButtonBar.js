import './ButtonBar.css';
import Button from '../common/Button';
import { Link, useRouteMatch } from 'react-router-dom';

function ButtonBar() {
    const { url } = useRouteMatch();

    return (
       <div className='ButtonBar' data-testid='button_bar'>
           <Link to={`${url}`}>
               <Button text='Feature Correlation' type='button' />
           </Link>
           <Link to={`${url}/feature-importance`}>
               <Button text='Feature Importance' type='button' />
           </Link>
           <Link to={`${url}/confusion-matrix`}>
               <Button text='Confusion Matrix' type='button' />
           </Link>
       </div>
    );
}

export default ButtonBar;

//TODO:
//  []clicking buttons in ButtonBar triggers fetch request for resources