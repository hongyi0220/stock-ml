import './CLFContainer.css';
import Input from '../common/Input';
import Button from '../common/Button';
import { useState } from 'react';

function CLFContainer() {
    const [stockName, setStockName] = useState('');
    const handleStockNameChange = e => {
        setStockName(e.target.value);
    }

    return (
        <div className='CLFContainer'>
            <Input className='CLFContainer__StockSearchBox' label='search stock' handleChange={handleStockNameChange} h/>
            <Button className='CLFContainer__StockSearchButton' mod='Small' text='search' type='button'/>
            <div data-testid='search_dropdown_menu' className='CLFContainer__SearchDropdownMenu'>
            </div>
            <div data-testid='result' className='CLFContainer__Result'></div>
        </div>
    );
}

export default CLFContainer;