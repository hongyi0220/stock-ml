import { render, screen } from '@testing-library/react';
import AuthForm from './AuthForm';

test('redners auth form', () => {
    render(<AuthForm />);
    //screen.debug();
    expect(screen.getAllByRole('textbox').length).toBe(2);
    expect(screen.getByRole('button')).toBeInTheDocument();

})