import './CLFContainer.css';
import Input from '../common/Input';
import Button from '../common/Button';
import {useEffect, useState} from 'react';
import {styleType} from '../../CLFContainerStyleType';

function CLFContainer(props) {
    const [stockName, setStockName] = useState('');
    const [stockList, setStockList] = useState(null);
    const [selectedStockName, setSelectedStockName] = useState('');
    const [buyOrSkip, setBuyOrSkip] = useState('');
    const [buyOrSkipStyle, setBuyOrSkipStyle] = useState('');

    const returnClassNameGivenStyleType = () => {
        if (buyOrSkipStyle == styleType.green) {
            return'CLFContainer__Result__BuyOrSkip--Green';
        } else if (buyOrSkipStyle == styleType.red) {
            return'CLFContainer__Result__BuyOrSkip--Red';
        }
    }

    const setErrorMessage = (error) => {
        props.setError(`
                    Something went wrong :(  
                     ${error}
                     `);
    }

    const handleStockNameChange = e => {
        setStockName(e.target.value.trim().toUpperCase());
    }

    const handleDropdownMenuStockClick = e => {
        setStockName(e.target.dataset.stock);
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

        if (stock.match(regex)) {
            return <div key={stock} data-stock={stock} onClick={handleDropdownMenuStockClick}>{stock}</div>
        }
    })};

    const handleSearchBtnClick = () => {
        setSelectedStockName(stockName);
        let bos = '';
        console.log('stockname:', stockName)
        if (stockName in stockList) {
            if (stockList[stockName] == 1) {
                bos = 'Buy';
                setBuyOrSkipStyle(styleType.green);
            } else {
                bos = 'Skip';
                setBuyOrSkipStyle(styleType.red);
            }
        } else {
            bos = 'Stock Doesn\'t Exist';
        }
        console.log('stocklist[stockname]:', stockList[stockName])
        setBuyOrSkip(bos);
        setStockName('');
    }

    return (
        <div className='CLFContainer'>

            <Input className='CLFContainer__StockSearchBox' label='search stock' handleChange={handleStockNameChange} value={stockName}/>

            <Button handleClick={handleSearchBtnClick} className='CLFContainer__StockSearchButton' mod='Small' text='search' type='button'/>

            <div data-testid='search_dropdown_menu' className='CLFContainer__SearchDropdownMenu'>
                <div className='CLFContainer__SearchDropdownMenu__List'>{stockName ? stockListFiltered(stockName) : ''}</div>
            </div>

            <div data-testid='result' className='CLFContainer__Result'>
                <div className='CLFContainer__Result__StockName'>{selectedStockName}</div>
                <div className={`CLFContainer__Result__BuyOrSkip ${returnClassNameGivenStyleType()}`}>{buyOrSkip}</div>
            </div>

        </div>
    );
}

export default CLFContainer;