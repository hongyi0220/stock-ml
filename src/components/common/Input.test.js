import { render, screen } from '@testing-library/react';
import Input from './Input';

test('renders Input', () => {
    render(<Input />);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getByTestId('label')).toBeInTheDocument();
})