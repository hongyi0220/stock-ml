import { render, screen } from '@testing-library/react';
import Button from './Button';

test('renders Button', () => {
    render(<Button />);
    //screen.debug();
    //screen.getByRole('');
    expect(screen.getByRole('button')).toBeInTheDocument();
});
