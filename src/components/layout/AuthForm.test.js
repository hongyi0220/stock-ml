import { render, screen } from '@testing-library/react';
import AuthForm from './AuthForm';

describe('<AuthForm />', () => {
    test('renders 2 <Input />, 1 <Button />', () => {
        render(<AuthForm />);
        //screen.debug();
        expect(screen.getAllByRole('textbox')).toHaveLength(2);
        expect(screen.getByText('username')).toBeInTheDocument();
        expect(screen.getByText('password')).toBeInTheDocument();
        expect(screen.getByRole('button')).toBeInTheDocument();
        expect(screen.getByText('Login')).toBeInTheDocument();

    })
})