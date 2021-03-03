import { render, screen } from '@testing-library/react';
import SideNavBar from './SideNavBar';

describe('<SideNavBar />', () => {
    test('renders 3 <NavButton /> labels', () => {
        render(<SideNavBar />);
        expect(screen.getByText('Dashboard')).toBeInTheDocument();
        expect(screen.getByText('insert_chart')).toBeInTheDocument();
        expect(screen.getByText('Prediction')).toBeInTheDocument();
        expect(screen.getByText('lightbulb')).toBeInTheDocument();
        expect(screen.getByText('Logout')).toBeInTheDocument();
        expect(screen.getByText('logout')).toBeInTheDocument();
    })
})