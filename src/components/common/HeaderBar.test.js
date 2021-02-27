import { render, screen } from '@testing-library/react';
import HeaderBar from './HeaderBar';

test('renders HeaderBar', () => {
    render(<HeaderBar />);
    expect(screen.getByTestId('header_bar')).toBeInTheDocument();
})