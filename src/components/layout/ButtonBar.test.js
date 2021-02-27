import { render, screen } from '@testing-library/react';
import ButtonBar from './ButtonBar';

test('renders ButtonBar', () => {
    render(<ButtonBar />);
    expect(screen.getByTestId('button_bar')).toBeInTheDocument();
    expect(screen.getAllByRole('button').length).toBe(3);
})