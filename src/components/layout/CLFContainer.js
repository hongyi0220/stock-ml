import './CLFContainer.css';
import Input from '../common/Input';
import Button from '../common/Button';
import {useEffect, useState} from 'react';

function CLFContainer(props) {
    const [stockName, setStockName] = useState('');
    const [stockList, setStockList] = useState(null);

    const setErrorMessage = (error) => {
        props.setError(`
                    Something went wrong :(  
                     ${error}
                     `);
    }

    const handleStockNameChange = e => {
        setStockName(e.target.value);
    }

    useEffect(() => {
        fetch('http://127.0.0.1:5000/prediction', {mode: 'cors', cache: 'no-cache'})
            .then((response) => {
                return response.json();
            }, setErrorMessage)
            .then((res) => {
                console.log(res)
                setStockList(res);
            })
    }, [])

    const stockListFiltered = (stockName) => { return Object.keys(stockList).map((stock) => {
        const regex = new RegExp(`^${stockName}`);

        if (stock.trim().toLowerCase().match(regex)) {
            return <div key={stock}>{stock}</div>
        }
    })};

    return (
        <div className='CLFContainer'>

            <Input className='CLFContainer__StockSearchBox' label='search stock' handleChange={handleStockNameChange} />

            <Button className='CLFContainer__StockSearchButton' mod='Small' text='search' type='button'/>

            <div data-testid='search_dropdown_menu' className='CLFContainer__SearchDropdownMenu'>
                <div>{stockName ? stockListFiltered(stockName) : ''}</div>
            </div>

            <div data-testid='result' className='CLFContainer__Result'></div>

        </div>
    );
}

export default CLFContainer;