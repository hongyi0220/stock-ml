import './CLFContainer.css';
import Input from '../common/Input';
import Button from '../common/Button';

function CLFContainer() {
    return (
        <div className='CLFContainer'>
            <Input className='CLFContainer__StockSearchBox' label='search stock'/>
            <Button className='CLFContainer__StockSearchButton' mod='Small' text='search' type='button'/>
            <div data-testid='search_dropdown_menu' className='CLFContainer__SearchDropdownMenu'>
            </div>
            <div data-testid='result' className='CLFContainer__Result'></div>
        </div>
    );
}

export default CLFContainer;