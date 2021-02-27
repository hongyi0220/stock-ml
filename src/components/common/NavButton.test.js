import { render, screen } from '@testing-library/react';
import NavButton from './NavButton';

test('renders NavButton', () => {
    render(<NavButton />);
    screen.getByTestId('nav_button_selected');
    screen.getByTestId('nav_button_icon');
    screen.getByTestId('nav_button_label');
})
