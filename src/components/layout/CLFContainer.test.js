import { render, screen } from '@testing-library/react';
import CLFContainer from './CLFContainer';

describe('<CLFContainer />', () => {
    test('renders 1 <Input />, 1 <Button />, 1 SearchDropdownMenu div, 1 Result div', () => {
        render(<CLFContainer />);
        expect(screen.getByText('search stock')).toBeInTheDocument();
        expect(screen.getByText('search')).toBeInTheDocument();
        expect(screen.getByTestId('search_dropdown_menu')).toBeInTheDocument();
        expect(screen.getByTestId('result')).toBeInTheDocument();
    })
})

