import { render, screen } from '@testing-library/react';
import ButtonBar from './ButtonBar';

describe('<ButtonBar />', () => {
    test('renders 3 <Button />', () => {
        render(<ButtonBar />);
        expect(screen.getByTestId('button_bar')).toBeInTheDocument();
        expect(screen.getAllByRole('button')).toHaveLength(3);
        expect(screen.getByText('Feature Importance')).toBeInTheDocument();
        expect(screen.getByText('Feature Correlation')).toBeInTheDocument();
        expect(screen.getByText('Confusion Matrix')).toBeInTheDocument();
    })
})