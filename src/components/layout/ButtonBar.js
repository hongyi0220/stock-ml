import './ButtonBar.css';
import Button from '../common/Button';
import {Link} from 'react-router-dom';

function ButtonBar(props) {

    return (
        <div className='ButtonBar' data-testid='button_bar'>
            <Link to={`/dashboard/feature-correlation`}>
                <Button handleClick={props.handleClick.handleCorrelationHeatmapBtnClick} text='Feature Correlation' type='button' className={'ButtonBar__Button'} />
            </Link>

            <Link to={`/dashboard/feature-importance`}>
                <Button handleClick={props.handleClick.handleFeatureImportanceBtnClick} text='Feature Importance' type='button' className={'ButtonBar__Button'} />
            </Link>

            <Link to={`/dashboard/confusion-matrix`}>
                <Button handleClick={props.handleClick.handleConfusionMatrixBtnClick} text='Confusion Matrix' type='button' className={'ButtonBar__Button'} />
            </Link>

        </div>
    );
}

export default ButtonBar;
