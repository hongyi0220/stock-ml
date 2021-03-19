import './ContentContainer.css';
import ButtonBar from './ButtonBar';
import CLFContainer from './CLFContainer';
import {Route, Switch} from 'react-router-dom';
import Loading from '../common/Loading';
import {useState, useEffect} from 'react';

function ContentContainer(props) {
    const [ correlationHeatmapImageSrc, setCorrelationHeatmapImageSrc ] = useState(null);
    const [ featureImportanceImageSrc, setFeatureImportanceImageSrc ] = useState(null);
    const [ confusionMatrixImageSrc, setConfusionMatrixImageSrc ] = useState(null);
    const [ error, setError ] = useState('');

    const setErrorMessage = (error) => {
        setError(`
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

    useEffect(() => {
        fetch("http://127.0.0.1:5000/correlation-heatmap", {mode: 'cors', cache: 'no-cache' })
            .then(blobify)
            .then(createURLFromBlob)
            .then(url => {
                setCorrelationHeatmapImageSrc(url)
            })
    }, [])

    useEffect(() => {
        fetch("http://127.0.0.1:5000/feature-importance", {mode: 'cors', cache: 'no-cache' })
            .then(blobify)
            .then(createURLFromBlob)
            .then(url => {
                setFeatureImportanceImageSrc(url)
            })
    }, [])

    useEffect(() => {
        fetch("http://127.0.0.1:5000/confusion-matrix", {mode: 'cors', cache: 'no-cache' })
            .then(blobify)
            .then(createURLFromBlob)
            .then(url => {
                setConfusionMatrixImageSrc(url)
            })
    }, [])

    return (
        <div className='ContentContainer'>
            <Switch>
                <Route path='/home'></Route>
                <Route path='/correlation-heatmap'>
                    <ButtonBar />
                    {error && (props.src ? <img src={props.src} alt='Dashboard Content Image' /> : <Loading />)}
                </Route>
                <Route path='/correlation-heatmap'>
                    <ButtonBar />
                    {props.src ? <img src={props.src} alt='Dashboard Content Image' /> : <Loading />}
                </Route>
                <Route path='/correlation-heatmap'>
                    <ButtonBar />
                    {props.src ? <img src={props.src} alt='Dashboard Content Image' /> : <Loading />}
                </Route>
                <Route path='/prediction'>
                    <CLFContainer />
                </Route>
                <Route path='/*'>
                    <div><h1>Page Not Found :(</h1></div>
                </Route>
            </Switch>
        </div>
    );
}

export default ContentContainer;