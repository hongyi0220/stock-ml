import ButtonBar from './ButtonBar';
import Loading from '../common/Loading';
import {Switch} from 'react-router';
import {Route} from 'react-router-dom';

function DashboardContent(props) {

    const setErrorMessage = (error) => {
        props.setError(`
                    Something went wrong :(  
                     ${error}
                     `);
    }

    const blobify = (response) => {
        return response.blob();
    }

    const createURLFromBlob = (blob) => {
        return URL.createObjectURL(blob);
    }

    const handleCorrelationHeatmapBtnClick = () => {
        fetch("http://127.0.0.1:5000/dashboard/correlation-heatmap", {mode: 'cors', cache: 'no-cache' })
            .then(blobify, setErrorMessage)
            .then(createURLFromBlob)
            .then(props.setImageSrc)
    }

    const handleFeatureImportanceBtnClick = () => {
        fetch("http://127.0.0.1:5000/dashboard/feature-importance", {mode: 'cors', cache: 'no-cache' })
            .then(blobify, setErrorMessage)
            .then(createURLFromBlob)
            .then(props.setImageSrc)
    }

    const handleConfusionMatrixBtnClick = () => {
        fetch("http://127.0.0.1:5000/dashboard/confusion-matrix", {mode: 'cors', cache: 'no-cache' })
            .then(blobify, setErrorMessage)
            .then(createURLFromBlob)
            .then(props.setImageSrc)
    }

    return (<div>
        <ButtonBar handleClick={{handleCorrelationHeatmapBtnClick, handleFeatureImportanceBtnClick, handleConfusionMatrixBtnClick}} />

        <Route exact path={['/dashboard/feature-correlation', '/dashboard/feature-importance', '/dashboard/confusion-matrix']} >
        {!props.error && (props.imageSrc ? <img src={props.imageSrc} alt='Dashboard Content Image' /> : <Loading />)}
        </Route>

        <Switch>

            <Route exact path='/dashboard/feature-correlation'>
                {<p>Feature Correlation Description</p>}
            </Route>

            <Route exact path='/dashboard/feature-importance'>
                {<p>Feature Importance Description</p>}
            </Route>

            <Route exact path='/dashboard/confusion-matrix'>
                {<p>Confusion Matrix Description</p>}
            </Route>

            <Route exact path='/dashboard'>
                {<p>Welcome to Your Dashboard!</p>}
            </Route>

        </Switch>
    </div>);
}

export default DashboardContent;